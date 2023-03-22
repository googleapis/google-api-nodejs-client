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

export namespace run_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
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
   * Deploy and manage user provided container images that scale automatically based on incoming requests. The Cloud Run Admin API v1 follows the Knative Serving API specification, while v2 is aligned with Google Cloud AIP-based API standards, as described in https://google.aip.dev/.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const run = google.run('v1');
   * ```
   */
  export class Run {
    context: APIRequestContext;
    namespaces: Resource$Namespaces;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.namespaces = new Resource$Namespaces(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * Information for connecting over HTTP(s).
   */
  export interface Schema$Addressable {
    url?: string | null;
  }
  /**
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
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
   * A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Webmaster Central](https://www.google.com/webmasters/verification/home).
   */
  export interface Schema$AuthorizedDomain {
    /**
     * Relative name of the domain authorized for use. Example: `example.com`.
     */
    id?: string | null;
    /**
     * Deprecated Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `projects/myproject/authorizedDomains/example.com`.
     */
    name?: string | null;
  }
  /**
   * Associates `members`, or principals, with a `role`.
   */
  export interface Schema$Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$Expr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string | null;
  }
  /**
   * Request message for cancelling an execution.
   */
  export interface Schema$CancelExecutionRequest {}
  /**
   * Not supported by Cloud Run. ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$ConfigMapEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * The ConfigMap to select from.
     */
    name?: string | null;
    /**
     * Specify whether the ConfigMap must be defined.
     */
    optional?: boolean | null;
  }
  /**
   * Not supported by Cloud Run.
   */
  export interface Schema$ConfigMapKeySelector {
    /**
     * Required. Not supported by Cloud Run.
     */
    key?: string | null;
    /**
     * Not supported by Cloud Run.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * Required. Not supported by Cloud Run.
     */
    name?: string | null;
    /**
     * Not supported by Cloud Run.
     */
    optional?: boolean | null;
  }
  /**
   * Not supported by Cloud Run. Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
   */
  export interface Schema$ConfigMapVolumeSource {
    /**
     * (Optional) Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0644. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * (Optional) If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified that is not present in the Secret, the volume setup will error unless it is marked optional.
     */
    items?: Schema$KeyToPath[];
    /**
     * Name of the config.
     */
    name?: string | null;
    /**
     * (Optional) Specify whether the Secret or its keys must be defined.
     */
    optional?: boolean | null;
  }
  /**
   * Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#configuration
   */
  export interface Schema$Configuration {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case always "Configuration".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Configuration, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Configuration (from the client).
     */
    spec?: Schema$ConfigurationSpec;
    /**
     * Status communicates the observed state of the Configuration (from the controller).
     */
    status?: Schema$ConfigurationStatus;
  }
  /**
   * ConfigurationSpec holds the desired state of the Configuration (from the client).
   */
  export interface Schema$ConfigurationSpec {
    /**
     * Template holds the latest specification for the Revision to be stamped out.
     */
    template?: Schema$RevisionTemplate;
  }
  /**
   * ConfigurationStatus communicates the observed state of the Configuration (from the controller).
   */
  export interface Schema$ConfigurationStatus {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, so for the latest ready revision, use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string | null;
    /**
     * LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True".
     */
    latestReadyRevisionName?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
  }
  /**
   * A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
   */
  export interface Schema$Container {
    /**
     * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.
     */
    args?: string[] | null;
    /**
     * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references are not supported in Cloud Run.
     */
    command?: string[] | null;
    /**
     * List of environment variables to set in the container. EnvVar with duplicate names are generally allowed; if referencing a secret, the name must be unique for the container. For non-secret EnvVar names, the Container will only get the last-declared one.
     */
    env?: Schema$EnvVar[];
    /**
     * Not supported by Cloud Run.
     */
    envFrom?: Schema$EnvFromSource[];
    /**
     * Required. Name of the container image in Dockerhub, Google Artifact Registry, or Google Container Registry. If the host is not provided, Dockerhub is assumed. More info: https://kubernetes.io/docs/concepts/containers/images
     */
    image?: string | null;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     */
    imagePullPolicy?: string | null;
    /**
     * Periodic probe of container liveness. Container will be restarted if the probe fails. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    livenessProbe?: Schema$Probe;
    /**
     * Name of the container specified as a DNS_LABEL (RFC 1123). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names
     */
    name?: string | null;
    /**
     * List of ports to expose from the container. Only a single port can be specified. The specified ports must be listening on all interfaces (0.0.0.0) within the container to be accessible. If omitted, a port number will be chosen and passed to the container through the PORT environment variable for the container to listen on.
     */
    ports?: Schema$ContainerPort[];
    /**
     * Not supported by Cloud Run.
     */
    readinessProbe?: Schema$Probe;
    /**
     * Compute Resources required by this container. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
     */
    resources?: Schema$ResourceRequirements;
    /**
     * Not supported by Cloud Run.
     */
    securityContext?: Schema$SecurityContext;
    /**
     * Startup probe of application within the container. All other probes are disabled if a startup probe is provided, until it succeeds. Container will not receive traffic if the probe fails. If not provided, a default startup probe with TCP socket action is used. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    startupProbe?: Schema$Probe;
    /**
     * Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log.
     */
    terminationMessagePath?: string | null;
    /**
     * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
     */
    terminationMessagePolicy?: string | null;
    /**
     * Volume to mount into the container's filesystem. Only supports SecretVolumeSources. Pod volumes to mount into the container's filesystem.
     */
    volumeMounts?: Schema$VolumeMount[];
    /**
     * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
     */
    workingDir?: string | null;
  }
  /**
   * ContainerPort represents a network port in a single container.
   */
  export interface Schema$ContainerPort {
    /**
     * Port number the container listens on. If present, this must be a valid port number, 0 < x < 65536. If not present, it will default to port 8080. For more information, see https://cloud.google.com/run/docs/container-contract#port
     */
    containerPort?: number | null;
    /**
     * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
     */
    name?: string | null;
    /**
     * Protocol for port. Must be "TCP". Defaults to "TCP".
     */
    protocol?: string | null;
  }
  /**
   * Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
   */
  export interface Schema$DomainMapping {
    /**
     * The API version for this call such as "domains.cloudrun.com/v1".
     */
    apiVersion?: string | null;
    /**
     * The kind of resource, in this case "DomainMapping".
     */
    kind?: string | null;
    /**
     * Metadata associated with this BuildTemplate.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * The spec for this DomainMapping.
     */
    spec?: Schema$DomainMappingSpec;
    /**
     * The current status of the DomainMapping.
     */
    status?: Schema$DomainMappingStatus;
  }
  /**
   * The desired state of the Domain Mapping.
   */
  export interface Schema$DomainMappingSpec {
    /**
     * The mode of the certificate.
     */
    certificateMode?: string | null;
    /**
     * If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning.
     */
    forceOverride?: boolean | null;
    /**
     * The name of the Knative Route that this DomainMapping applies to. The route must exist.
     */
    routeName?: string | null;
  }
  /**
   * The current state of the Domain Mapping.
   */
  export interface Schema$DomainMappingStatus {
    /**
     * Array of observed DomainMappingConditions, indicating the current state of the DomainMapping.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * The name of the route that the mapping currently points to.
     */
    mappedRouteName?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.
     */
    resourceRecords?: Schema$ResourceRecord[];
    /**
     * Optional. Not supported by Cloud Run.
     */
    url?: string | null;
  }
  /**
   * Not supported by Cloud Run. EnvFromSource represents the source of a set of ConfigMaps
   */
  export interface Schema$EnvFromSource {
    /**
     * The ConfigMap to select from
     */
    configMapRef?: Schema$ConfigMapEnvSource;
    /**
     * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
     */
    prefix?: string | null;
    /**
     * The Secret to select from
     */
    secretRef?: Schema$SecretEnvSource;
  }
  /**
   * EnvVar represents an environment variable present in a Container.
   */
  export interface Schema$EnvVar {
    /**
     * Required. Name of the environment variable. Must be a C_IDENTIFIER.
     */
    name?: string | null;
    /**
     * Value of the environment variable. Defaults to "". Variable references are not supported in Cloud Run.
     */
    value?: string | null;
    /**
     * Source for the environment variable's value. Only supports secret_key_ref. Cannot be used if value is not empty.
     */
    valueFrom?: Schema$EnvVarSource;
  }
  /**
   * EnvVarSource represents a source for the value of an EnvVar.
   */
  export interface Schema$EnvVarSource {
    /**
     * Not supported by Cloud Run. Not supported in Cloud Run.
     */
    configMapKeyRef?: Schema$ConfigMapKeySelector;
    /**
     * Selects a key (version) of a secret in Secret Manager.
     */
    secretKeyRef?: Schema$SecretKeySelector;
  }
  /**
   * Not supported by Cloud Run. ExecAction describes a "run in container" action.
   */
  export interface Schema$ExecAction {
    /**
     * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
     */
    command?: string[] | null;
  }
  /**
   * Execution represents the configuration of a single execution. An execution is an immutable resource that references a container image which is run to completion.
   */
  export interface Schema$Execution {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * Optional. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Optional. Specification of the desired behavior of an execution. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    spec?: Schema$ExecutionSpec;
    /**
     * Output only. Current status of an execution. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    status?: Schema$ExecutionStatus;
  }
  /**
   * Reference to an Execution. Use /Executions.GetExecution with the given name to get full execution including the latest status.
   */
  export interface Schema$ExecutionReference {
    /**
     * Optional. Completion timestamp of the execution.
     */
    completionTimestamp?: string | null;
    /**
     * Optional. Creation timestamp of the execution.
     */
    creationTimestamp?: string | null;
    /**
     * Optional. Name of the execution.
     */
    name?: string | null;
  }
  /**
   * ExecutionSpec describes how the execution will look.
   */
  export interface Schema$ExecutionSpec {
    /**
     * Optional. Specifies the maximum desired number of tasks the execution should run at given time. Must be <= task_count. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed, i.e. when the work left to do is less than max parallelism.
     */
    parallelism?: number | null;
    /**
     * Optional. Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. Defaults to 1.
     */
    taskCount?: number | null;
    /**
     * Optional. The template used to create tasks for this execution.
     */
    template?: Schema$TaskTemplateSpec;
  }
  /**
   * ExecutionStatus represents the current state of an Execution.
   */
  export interface Schema$ExecutionStatus {
    /**
     * Optional. The number of tasks which reached phase Cancelled.
     */
    cancelledCount?: number | null;
    /**
     * Optional. Represents the time that the execution was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string | null;
    /**
     * Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Execution-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `Started`: `True` when the execution has started to execute. * `Completed`: `True` when the execution has succeeded. `False` when the execution has failed.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * Optional. The number of tasks which reached phase Failed.
     */
    failedCount?: number | null;
    /**
     * Optional. URI where logs for this execution can be found in Cloud Console.
     */
    logUri?: string | null;
    /**
     * Optional. The 'generation' of the execution that was last processed by the controller.
     */
    observedGeneration?: number | null;
    /**
     * Optional. The number of tasks which have retried at least once.
     */
    retriedCount?: number | null;
    /**
     * Optional. The number of actively running tasks.
     */
    runningCount?: number | null;
    /**
     * Optional. Represents the time that the execution started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     */
    startTime?: string | null;
    /**
     * Optional. The number of tasks which reached phase Succeeded.
     */
    succeededCount?: number | null;
  }
  /**
   * ExecutionTemplateSpec describes the metadata and spec an Execution should have when created from a job. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
   */
  export interface Schema$ExecutionTemplateSpec {
    /**
     * Optional. Optional metadata for this Execution, including labels and annotations. The following annotation keys set properties of the created execution: * `run.googleapis.com/cloudsql-instances` sets Cloud SQL connections. Multiple values should be comma separated. * `run.googleapis.com/vpc-access-connector` sets a Serverless VPC Access connector. * `run.googleapis.com/vpc-access-egress` sets VPC egress. Supported values are `all-traffic`, `all` (deprecated), and `private-ranges-only`. `all-traffic` and `all` provide the same functionality. `all` is deprecated but will continue to be supported. Prefer `all-traffic`.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Required. ExecutionSpec holds the desired configuration for executions of this job.
     */
    spec?: Schema$ExecutionSpec;
  }
  /**
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$Expr {
    /**
     * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string | null;
    /**
     * Textual representation of an expression in Common Expression Language syntax.
     */
    expression?: string | null;
    /**
     * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string | null;
    /**
     * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string | null;
  }
  /**
   * Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
   */
  export interface Schema$GoogleCloudRunV1Condition {
    /**
     * Optional. Last time the condition transitioned from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Optional. Human readable message indicating details about the current status.
     */
    message?: string | null;
    /**
     * Optional. One-word CamelCase reason for the condition's last transition. These are intended to be stable, unique values which the client may use to trigger error handling logic, whereas messages which may be changed later by the server.
     */
    reason?: string | null;
    /**
     * Optional. How to interpret this condition. One of Error, Warning, or Info. Conditions of severity Info do not contribute to resource readiness.
     */
    severity?: string | null;
    /**
     * Status of the condition, one of True, False, Unknown.
     */
    status?: string | null;
    /**
     * type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/main/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready" or "Completed": True when the Resource is ready.
     */
    type?: string | null;
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
   * GRPCAction describes an action involving a GRPC port.
   */
  export interface Schema$GRPCAction {
    /**
     * Port number of the gRPC service. Number must be in the range 1 to 65535.
     */
    port?: number | null;
    /**
     * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
     */
    service?: string | null;
  }
  /**
   * HTTPGetAction describes an action based on HTTP Get requests.
   */
  export interface Schema$HTTPGetAction {
    /**
     * Not supported by Cloud Run.
     */
    host?: string | null;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: Schema$HTTPHeader[];
    /**
     * Path to access on the HTTP server.
     */
    path?: string | null;
    /**
     * Port number to access on the container. Number must be in the range 1 to 65535.
     */
    port?: number | null;
    /**
     * Not supported by Cloud Run.
     */
    scheme?: string | null;
  }
  /**
   * HTTPHeader describes a custom header to be used in HTTP probes
   */
  export interface Schema$HTTPHeader {
    /**
     * Required. The header field name
     */
    name?: string | null;
    /**
     * The header field value
     */
    value?: string | null;
  }
  /**
   * Job represents the configuration of a single job, which references a container image which is run to completion.
   */
  export interface Schema$Job {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * Optional. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Optional. Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    spec?: Schema$JobSpec;
    /**
     * Output only. Current status of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    status?: Schema$JobStatus;
  }
  /**
   * JobSpec describes how the job will look.
   */
  export interface Schema$JobSpec {
    /**
     * Optional. Describes the execution that will be created when running a job.
     */
    template?: Schema$ExecutionTemplateSpec;
  }
  /**
   * JobStatus represents the current state of a Job.
   */
  export interface Schema$JobStatus {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Job-specific conditions include: * `Ready`: `True` when the job is ready to be executed.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * Number of executions created for this job.
     */
    executionCount?: number | null;
    /**
     * A pointer to the most recently created execution for this job. This is set regardless of the eventual state of the execution.
     */
    latestCreatedExecution?: Schema$ExecutionReference;
    /**
     * The 'generation' of the job that was last processed by the controller.
     */
    observedGeneration?: number | null;
  }
  /**
   * Maps a string key to a path within a volume.
   */
  export interface Schema$KeyToPath {
    /**
     * The Cloud Secret Manager secret version. Can be 'latest' for the latest value, or an integer or a secret alias for a specific version. The key to project.
     */
    key?: string | null;
    /**
     * (Optional) Mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    mode?: number | null;
    /**
     * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
     */
    path?: string | null;
  }
  /**
   * A list of Authorized Domains.
   */
  export interface Schema$ListAuthorizedDomainsResponse {
    /**
     * The authorized domains belonging to the user.
     */
    domains?: Schema$AuthorizedDomain[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string | null;
  }
  /**
   * ListConfigurationsResponse is a list of Configuration resources.
   */
  export interface Schema$ListConfigurationsResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * List of Configurations.
     */
    items?: Schema$Configuration[];
    /**
     * The kind of this resource, in this case "ConfigurationList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Configuration list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListDomainMappingsResponse is a list of DomainMapping resources.
   */
  export interface Schema$ListDomainMappingsResponse {
    /**
     * The API version for this call such as "domains.cloudrun.com/v1".
     */
    apiVersion?: string | null;
    /**
     * List of DomainMappings.
     */
    items?: Schema$DomainMapping[];
    /**
     * The kind of this resource, in this case "DomainMappingList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this DomainMapping list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListExecutionsResponse is a list of Executions resources.
   */
  export interface Schema$ListExecutionsResponse {
    /**
     * The API version for this call such as "run.googleapis.com/v1".
     */
    apiVersion?: string | null;
    /**
     * List of Executions.
     */
    items?: Schema$Execution[];
    /**
     * The kind of this resource, in this case "ExecutionsList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this executions list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListJobsResponse is a list of Jobs resources.
   */
  export interface Schema$ListJobsResponse {
    /**
     * The API version for this call such as "run.googleapis.com/v1".
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
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
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
   * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
   */
  export interface Schema$ListMeta {
    /**
     * Continuation token is a value emitted when the count of items is larger than the user/system limit. To retrieve the next page of items, pass the value of `continue` as the next request's `page_token`.
     */
    continue?: string | null;
    /**
     * Opaque string that identifies the server's internal version of this object. It can be used by clients to determine when objects have changed. If the message is passed back to the server, it must be left unmodified. https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string | null;
    /**
     * URL representing this object.
     */
    selfLink?: string | null;
  }
  /**
   * ListRevisionsResponse is a list of Revision resources.
   */
  export interface Schema$ListRevisionsResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * List of Revisions.
     */
    items?: Schema$Revision[];
    /**
     * The kind of this resource, in this case "RevisionList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this revision list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListRoutesResponse is a list of Route resources.
   */
  export interface Schema$ListRoutesResponse {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * List of Routes.
     */
    items?: Schema$Route[];
    /**
     * The kind of this resource, in this case always "RouteList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Route list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * A list of Service resources.
   */
  export interface Schema$ListServicesResponse {
    /**
     * The API version for this call; returns "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * List of Services.
     */
    items?: Schema$Service[];
    /**
     * The kind of this resource; returns "ServiceList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Service list.
     */
    metadata?: Schema$ListMeta;
    /**
     * For calls against the global endpoint, returns the list of Cloud locations that could not be reached. For regional calls, this field is not used.
     */
    unreachable?: string[] | null;
  }
  /**
   * ListTasksResponse is a list of Tasks resources.
   */
  export interface Schema$ListTasksResponse {
    /**
     * The API version for this call such as "run.googleapis.com/v1".
     */
    apiVersion?: string | null;
    /**
     * List of Tasks.
     */
    items?: Schema$Task[];
    /**
     * The kind of this resource, in this case "TasksList".
     */
    kind?: string | null;
    /**
     * Metadata associated with this tasks list.
     */
    metadata?: Schema$ListMeta;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Not supported by Cloud Run. LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
   */
  export interface Schema$LocalObjectReference {
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: string | null;
  }
  /**
   * A resource that represents Google Cloud Platform location.
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
   * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  export interface Schema$ObjectMeta {
    /**
     * Unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. * `autoscaling.knative.dev/maxScale`: Revision. * `autoscaling.knative.dev/minScale`: Revision. * `run.googleapis.com/binary-authorization-breakglass`: Service, Job, * `run.googleapis.com/binary-authorization`: Service, Job, Execution. * `run.googleapis.com/client-name`: All resources. * `run.googleapis.com/cloudsql-instances`: Revision, Execution. * `run.googleapis.com/cpu-throttling`: Revision. * `run.googleapis.com/custom-audiences`: Service. * `run.googleapis.com/description`: Service. * `run.googleapis.com/encryption-key-shutdown-hours`: Revision * `run.googleapis.com/encryption-key`: Revision, Execution. * `run.googleapis.com/execution-environment`: Revision, Execution. * `run.googleapis.com/gc-traffic-tags`: Service. * `run.googleapis.com/ingress`: Service. * `run.googleapis.com/network-interfaces`: Revision, Execution. * `run.googleapis.com/post-key-revocation-action-type`: Revision. * `run.googleapis.com/secrets`: Revision, Execution. * `run.googleapis.com/secure-session-agent`: Revision. * `run.googleapis.com/sessionAffinity`: Revision. * `run.googleapis.com/startup-cpu-boost`: Revision. * `run.googleapis.com/vpc-access-connector`: Revision, Execution. * `run.googleapis.com/vpc-access-egress`: Revision, Execution. Execution. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Not supported by Cloud Run
     */
    clusterName?: string | null;
    /**
     * UTC timestamp representing the server time when this object was created. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
     */
    creationTimestamp?: string | null;
    /**
     * Not supported by Cloud Run
     */
    deletionGracePeriodSeconds?: number | null;
    /**
     * The read-only soft deletion timestamp for this resource. In Cloud Run, users are not able to set this field. Instead, they must call the corresponding Delete API.
     */
    deletionTimestamp?: string | null;
    /**
     * Not supported by Cloud Run
     */
    finalizers?: string[] | null;
    /**
     * Not supported by Cloud Run
     */
    generateName?: string | null;
    /**
     * A system-provided sequence number representing a specific generation of the desired state.
     */
    generation?: number | null;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: https://kubernetes.io/docs/user-guide/labels
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. The name of the resource. In Cloud Run, name is required when creating top-level resources (Service, Job), must be unique within a Cloud Run project/region, and cannot be changed once created. More info: https://kubernetes.io/docs/user-guide/identifiers#names
     */
    name?: string | null;
    /**
     * Required. Defines the space within each name must be unique within a Cloud Run region. In Cloud Run, it must be project ID or number.
     */
    namespace?: string | null;
    /**
     * Not supported by Cloud Run
     */
    ownerReferences?: Schema$OwnerReference[];
    /**
     * Opaque, system-generated value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server or omit the value to disable conflict-detection. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string | null;
    /**
     * URL representing this object.
     */
    selfLink?: string | null;
    /**
     * Unique, system-generated identifier for this resource. More info: https://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string | null;
  }
  /**
   * This is not supported or used by Cloud Run.
   */
  export interface Schema$OwnerReference {
    /**
     * This is not supported or used by Cloud Run.
     */
    apiVersion?: string | null;
    /**
     * This is not supported or used by Cloud Run.
     */
    blockOwnerDeletion?: boolean | null;
    /**
     * This is not supported or used by Cloud Run.
     */
    controller?: boolean | null;
    /**
     * This is not supported or used by Cloud Run.
     */
    kind?: string | null;
    /**
     * This is not supported or used by Cloud Run.
     */
    name?: string | null;
    /**
     * This is not supported or used by Cloud Run.
     */
    uid?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
     */
    etag?: string | null;
    /**
     * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    version?: number | null;
  }
  /**
   * Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
   */
  export interface Schema$Probe {
    /**
     * Not supported by Cloud Run.
     */
    exec?: Schema$ExecAction;
    /**
     * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
     */
    failureThreshold?: number | null;
    /**
     * GRPCAction specifies an action involving a GRPC port.
     */
    grpc?: Schema$GRPCAction;
    /**
     * HTTPGet specifies the http request to perform.
     */
    httpGet?: Schema$HTTPGetAction;
    /**
     * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    initialDelaySeconds?: number | null;
    /**
     * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.
     */
    periodSeconds?: number | null;
    /**
     * Minimum consecutive successes for the probe to be considered successful after having failed. Must be 1 if set.
     */
    successThreshold?: number | null;
    /**
     * TCPSocket specifies an action involving a TCP port.
     */
    tcpSocket?: Schema$TCPSocketAction;
    /**
     * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
     */
    timeoutSeconds?: number | null;
  }
  /**
   * A DNS resource record.
   */
  export interface Schema$ResourceRecord {
    /**
     * Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: 'www'.
     */
    name?: string | null;
    /**
     * Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
     */
    rrdata?: string | null;
    /**
     * Resource record type. Example: `AAAA`.
     */
    type?: string | null;
  }
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  export interface Schema$ResourceRequirements {
    /**
     * Only memory and CPU are supported. Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    limits?: {[key: string]: string} | null;
    /**
     * Only memory and CPU are supported. Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
     */
    requests?: {[key: string]: string} | null;
  }
  /**
   * Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision
   */
  export interface Schema$Revision {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * The kind of this resource, in this case "Revision".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Revision, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Revision (from the client).
     */
    spec?: Schema$RevisionSpec;
    /**
     * Status communicates the observed state of the Revision (from the controller).
     */
    status?: Schema$RevisionStatus;
  }
  /**
   * RevisionSpec holds the desired state of the Revision (from the client).
   */
  export interface Schema$RevisionSpec {
    /**
     * ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. If not specified, defaults to 80.
     */
    containerConcurrency?: number | null;
    /**
     * Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided. The runtime contract is documented here: https://github.com/knative/specs/blob/main/specs/serving/runtime-contract.md
     */
    containers?: Schema$Container[];
    /**
     * Not supported by Cloud Run.
     */
    enableServiceLinks?: boolean | null;
    /**
     * Not supported by Cloud Run.
     */
    imagePullSecrets?: Schema$LocalObjectReference[];
    /**
     * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
     */
    serviceAccountName?: string | null;
    /**
     * TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Cloud Run: defaults to 300 seconds (5 minutes). Maximum allowed value is 3600 seconds (1 hour).
     */
    timeoutSeconds?: number | null;
    volumes?: Schema$Volume[];
  }
  /**
   * RevisionStatus communicates the observed state of the Revision (from the controller).
   */
  export interface Schema$RevisionStatus {
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions. Revision-specific conditions include: * `ResourcesAvailable`: `True` when underlying resources have been provisioned. * `ContainerHealthy`: `True` when the Revision readiness check completes. * `Active`: `True` when the Revision may receive traffic.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string | null;
    /**
     * Optional. Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config.
     */
    logUrl?: string | null;
    /**
     * ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * Not currently used by Cloud Run.
     */
    serviceName?: string | null;
  }
  /**
   * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
   */
  export interface Schema$RevisionTemplate {
    /**
     * Optional metadata for this Revision, including labels and annotations. Name will be generated by the Configuration. The following annotation keys set properties of the created revision: * `autoscaling.knative.dev/minScale` sets the minimum number of instances. * `autoscaling.knative.dev/maxScale` sets the maximum number of instances. * `run.googleapis.com/cloudsql-instances` sets Cloud SQL connections. Multiple values should be comma separated. * `run.googleapis.com/vpc-access-connector` sets a Serverless VPC Access connector. * `run.googleapis.com/vpc-access-egress` sets VPC egress. Supported values are `all-traffic`, `all` (deprecated), and `private-ranges-only`. `all-traffic` and `all` provide the same functionality. `all` is deprecated but will continue to be supported. Prefer `all-traffic`.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * RevisionSpec holds the desired state of the Revision (from the client).
     */
    spec?: Schema$RevisionSpec;
  }
  /**
   * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration.
   */
  export interface Schema$Route {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * The kind of this resource, in this case always "Route".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Route, including name, namespace, labels, and annotations.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Spec holds the desired state of the Route (from the client).
     */
    spec?: Schema$RouteSpec;
    /**
     * Status communicates the observed state of the Route (from the controller).
     */
    status?: Schema$RouteStatus;
  }
  /**
   * RouteSpec holds the desired state of the Route (from the client).
   */
  export interface Schema$RouteSpec {
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName.
     */
    traffic?: Schema$TrafficTarget[];
  }
  /**
   * RouteStatus communicates the observed state of the Route (from the controller).
   */
  export interface Schema$RouteStatus {
    /**
     * Similar to url, information on where the service is available on HTTP.
     */
    address?: Schema$Addressable;
    /**
     * Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. Note that providing a TrafficTarget that has latest_revision=True will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new "latest ready" revisions from the Configuration are processed without an update to the Route's spec.
     */
    observedGeneration?: number | null;
    /**
     * Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that was last observed.
     */
    traffic?: Schema$TrafficTarget[];
    /**
     * URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form: https://{route-hash\}-{project-hash\}-{cluster-level-suffix\}.a.run.app
     */
    url?: string | null;
  }
  /**
   * Request message for creating a new execution of a job.
   */
  export interface Schema$RunJobRequest {}
  /**
   * Not supported by Cloud Run. SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
   */
  export interface Schema$SecretEnvSource {
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * The Secret to select from.
     */
    name?: string | null;
    /**
     * Specify whether the Secret must be defined
     */
    optional?: boolean | null;
  }
  /**
   * SecretKeySelector selects a key of a Secret.
   */
  export interface Schema$SecretKeySelector {
    /**
     * Required. A Cloud Secret Manager secret version. Must be 'latest' for the latest version, an integer for a specific version, or a version alias. The key of the secret to select from. Must be a valid secret key.
     */
    key?: string | null;
    /**
     * This field should not be used directly as it is meant to be inlined directly into the message. Use the "name" field instead.
     */
    localObjectReference?: Schema$LocalObjectReference;
    /**
     * The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. The name of the secret in the pod's namespace to select from.
     */
    name?: string | null;
    /**
     * Specify whether the Secret or its key must be defined.
     */
    optional?: boolean | null;
  }
  /**
   * A volume representing a secret stored in Google Secret Manager. The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secret_name. The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
   */
  export interface Schema$SecretVolumeSource {
    /**
     * Integer representation of mode bits to use on created files by default. Must be a value between 01 and 0777 (octal). If 0 or not set, it will default to 0444. Directories within the path are not affected by this setting. Notes * Internally, a umask of 0222 will be applied to any non-zero value. * This is an integer representation of the mode bits. So, the octal integer value should look exactly as the chmod numeric notation with a leading zero. Some examples: for chmod 777 (a=rwx), set to 0777 (octal) or 511 (base-10). For chmod 640 (u=rw,g=r), set to 0640 (octal) or 416 (base-10). For chmod 755 (u=rwx,g=rx,o=rx), set to 0755 (octal) or 493 (base-10). * This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     */
    defaultMode?: number | null;
    /**
     * A list of secret versions to mount in the volume. If no items are specified, the volume will expose a file with the same name as the secret name. The contents of the file will be the data in the latest version of the secret. If items are specified, the key will be used as the version to fetch from Cloud Secret Manager and the path will be the name of the file exposed in the volume. When items are defined, they must specify both a key and a path.
     */
    items?: Schema$KeyToPath[];
    /**
     * Not supported by Cloud Run.
     */
    optional?: boolean | null;
    /**
     * The name of the secret in Cloud Secret Manager. By default, the secret is assumed to be in the same project. If the secret is in another project, you must define an alias. An alias definition has the form: :projects//secrets/. If multiple alias definitions are needed, they must be separated by commas. The alias definitions must be set on the run.googleapis.com/secrets annotation. Name of the secret in the container's namespace to use.
     */
    secretName?: string | null;
  }
  /**
   * Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
   */
  export interface Schema$SecurityContext {
    /**
     * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
     */
    runAsUser?: number | null;
  }
  /**
   * Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/main/docs/spec/overview.md#service
   */
  export interface Schema$Service {
    /**
     * The API version for this call. It must be "serving.knative.dev/v1".
     */
    apiVersion?: string | null;
    /**
     * The kind of resource. It must be "Service".
     */
    kind?: string | null;
    /**
     * Metadata associated with this Service, including name, namespace, labels, and annotations. In Cloud Run, annotations with 'run.googleapis.com/' and 'autoscaling.knative.dev' are restricted, and the accepted annotations will be different depending on the resource type. The following Cloud Run-specific annotations are accepted in Service.metadata.annotations. * `run.googleapis.com/binary-authorization-breakglass` * `run.googleapis.com/binary-authorization` * `run.googleapis.com/client-name` * `run.googleapis.com/custom-audiences` * `run.googleapis.com/description` * `run.googleapis.com/gc-traffic-tags` * `run.googleapis.com/ingress` * `run.googleapis.com/ingress` sets the ingress settings for the Service. See [the ingress settings documentation](/run/docs/securing/ingress) for details on configuring ingress settings. * `run.googleapis.com/ingress-status` is output-only and contains the currently active ingress settings for the Service. `run.googleapis.com/ingress-status` may differ from `run.googleapis.com/ingress` while the system is processing a change to `run.googleapis.com/ingress` or if the system failed to process a change to `run.googleapis.com/ingress`. When the system has processed all changes successfully `run.googleapis.com/ingress-status` and `run.googleapis.com/ingress` are equal.
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Holds the desired state of the Service (from the client).
     */
    spec?: Schema$ServiceSpec;
    /**
     * Communicates the system-controlled state of the Service.
     */
    status?: Schema$ServiceStatus;
  }
  /**
   * ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
   */
  export interface Schema$ServiceSpec {
    /**
     * Holds the latest specification for the Revision to be stamped out.
     */
    template?: Schema$RevisionTemplate;
    /**
     * Specifies how to distribute traffic over a collection of Knative Revisions and Configurations to the Service's main URL.
     */
    traffic?: Schema$TrafficTarget[];
  }
  /**
   * The current state of the Service. Output only.
   */
  export interface Schema$ServiceStatus {
    /**
     * Similar to url, information on where the service is available on HTTP.
     */
    address?: Schema$Addressable;
    /**
     * Conditions communicate information about ongoing/complete reconciliation processes that bring the `spec` inline with the observed state of the world. Service-specific conditions include: * `ConfigurationsReady`: `True` when the underlying Configuration is ready. * `RoutesReady`: `True` when the underlying Route is ready. * `Ready`: `True` when all underlying resources are ready.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * Name of the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
     */
    latestCreatedRevisionName?: string | null;
    /**
     * Name of the latest Revision from this Service's Configuration that has had its `Ready` condition become `True`.
     */
    latestReadyRevisionName?: string | null;
    /**
     * Returns the generation last fully processed by the system. This will only match metadata.generation when reconciliation is complete. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
     */
    observedGeneration?: number | null;
    /**
     * Holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
     */
    traffic?: Schema$TrafficTarget[];
    /**
     * URL that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash\}-{project-hash\}-{cluster-level-suffix\}.a.run.app
     */
    url?: string | null;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Status is a return value for calls that don't return other objects.
   */
  export interface Schema$Status {
    /**
     * Suggested HTTP return code for this status, 0 if not set.
     */
    code?: number | null;
    /**
     * Extended data associated with the reason. Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
     */
    details?: Schema$StatusDetails;
    /**
     * A human-readable description of the status of this operation.
     */
    message?: string | null;
    /**
     * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    metadata?: Schema$ListMeta;
    /**
     * A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
     */
    reason?: string | null;
    /**
     * Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    status?: string | null;
  }
  /**
   * StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
   */
  export interface Schema$StatusCause {
    /**
     * The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed. Fields may appear more than once in an array of causes due to fields having multiple errors. Examples: "name" - the field "name" on the current resource "items[0].name" - the field "name" on the first array entry in "items"
     */
    field?: string | null;
    /**
     * A human-readable description of the cause of the error. This field may be presented as-is to a reader.
     */
    message?: string | null;
    /**
     * A machine-readable description of the cause of the error. If this value is empty there is no information available.
     */
    reason?: string | null;
  }
  /**
   * StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
   */
  export interface Schema$StatusDetails {
    /**
     * The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
     */
    causes?: Schema$StatusCause[];
    /**
     * The group attribute of the resource associated with the status StatusReason.
     */
    group?: string | null;
    /**
     * The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
     */
    name?: string | null;
    /**
     * If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
     */
    retryAfterSeconds?: number | null;
    /**
     * UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/user-guide/identifiers#uids
     */
    uid?: string | null;
  }
  /**
   * Task represents a single run of a container to completion.
   */
  export interface Schema$Task {
    /**
     * Optional. APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    apiVersion?: string | null;
    /**
     * Optional. Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    kind?: string | null;
    /**
     * Optional. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
     */
    metadata?: Schema$ObjectMeta;
    /**
     * Optional. Specification of the desired behavior of a task. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    spec?: Schema$TaskSpec;
    /**
     * Output only. Current status of a task. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    status?: Schema$TaskStatus;
  }
  /**
   * Result of a task attempt.
   */
  export interface Schema$TaskAttemptResult {
    /**
     * Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details.
     */
    exitCode?: number | null;
    /**
     * Optional. The status of this attempt. If the status code is OK, then the attempt succeeded.
     */
    status?: Schema$GoogleRpcStatus;
  }
  /**
   * TaskSpec is a description of a task.
   */
  export interface Schema$TaskSpec {
    /**
     * Optional. List of containers belonging to the task. We disallow a number of fields on this Container. Only a single container may be provided.
     */
    containers?: Schema$Container[];
    /**
     * Optional. Number of retries allowed per task, before marking this job failed. Defaults to 3.
     */
    maxRetries?: number | null;
    /**
     * Optional. Email address of the IAM service account associated with the task of a job execution. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
     */
    serviceAccountName?: string | null;
    /**
     * Optional. Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds.
     */
    timeoutSeconds?: string | null;
    /**
     * Optional. List of volumes that can be mounted by containers belonging to the task. More info: https://kubernetes.io/docs/concepts/storage/volumes
     */
    volumes?: Schema$Volume[];
  }
  /**
   * TaskStatus represents the status of a task.
   */
  export interface Schema$TaskStatus {
    /**
     * Optional. Represents time when the task was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     */
    completionTime?: string | null;
    /**
     * Optional. Conditions communicate information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. Task-specific conditions include: * `Started`: `True` when the task has started to execute. * `Completed`: `True` when the task has succeeded. `False` when the task has failed.
     */
    conditions?: Schema$GoogleCloudRunV1Condition[];
    /**
     * Required. Index of the task, unique per execution, and beginning at 0.
     */
    index?: number | null;
    /**
     * Optional. Result of the last attempt of this task.
     */
    lastAttemptResult?: Schema$TaskAttemptResult;
    /**
     * Optional. URI where logs for this task can be found in Cloud Console.
     */
    logUri?: string | null;
    /**
     * Optional. The 'generation' of the task that was last processed by the controller.
     */
    observedGeneration?: number | null;
    /**
     * Optional. The number of times this task was retried. Instances are retried when they fail up to the maxRetries limit.
     */
    retried?: number | null;
    /**
     * Optional. Represents time when the task started to run. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC.
     */
    startTime?: string | null;
  }
  /**
   * TaskTemplateSpec describes the data a task should have when created from a template.
   */
  export interface Schema$TaskTemplateSpec {
    /**
     * Optional. Specification of the desired behavior of the task. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
     */
    spec?: Schema$TaskSpec;
  }
  /**
   * TCPSocketAction describes an action based on opening a socket
   */
  export interface Schema$TCPSocketAction {
    /**
     * Not supported by Cloud Run.
     */
    host?: string | null;
    /**
     * Port number to access on the container. Number must be in the range 1 to 65535.
     */
    port?: number | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * TrafficTarget holds a single entry of the routing table for a Route.
   */
  export interface Schema$TrafficTarget {
    /**
     * [Deprecated] Not supported in Cloud Run. It must be empty.
     */
    configurationName?: string | null;
    /**
     * Uses the "status.latestReadyRevisionName" of the Service to determine the traffic target. When it changes, traffic will automatically migrate from the prior "latest ready" revision to the new one. This field must be false if RevisionName is set. This field defaults to true otherwise. If the field is set to true on Status, this means that the Revision was resolved from the Service's latest ready revision.
     */
    latestRevision?: boolean | null;
    /**
     * Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified.
     */
    percent?: number | null;
    /**
     * Points this traffic target to a specific Revision. This field is mutually exclusive with latest_revision.
     */
    revisionName?: string | null;
    /**
     * Tag is used to expose a dedicated url for referencing this target exclusively.
     */
    tag?: string | null;
    /**
     * Output only. URL displays the URL for accessing tagged traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. https://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc.)
     */
    url?: string | null;
  }
  /**
   * Volume represents a named volume in a container.
   */
  export interface Schema$Volume {
    /**
     * Not supported in Cloud Run.
     */
    configMap?: Schema$ConfigMapVolumeSource;
    /**
     * Volume's name. In Cloud Run Fully Managed, the name 'cloudsql' is reserved.
     */
    name?: string | null;
    /**
     * The secret's value will be presented as the content of a file whose name is defined in the item path. If no items are defined, the name of the file is the secretName.
     */
    secret?: Schema$SecretVolumeSource;
  }
  /**
   * VolumeMount describes a mounting of a Volume within a container.
   */
  export interface Schema$VolumeMount {
    /**
     * Required. Path within the container at which the volume should be mounted. Must not contain ':'.
     */
    mountPath?: string | null;
    /**
     * Required. The name of the volume. There must be a corresponding Volume with the same name.
     */
    name?: string | null;
    /**
     * Only true is accepted for Secret Volumes. Defaults to true for Secrets Volumes.
     */
    readOnly?: boolean | null;
    /**
     * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
     */
    subPath?: string | null;
  }

  export class Resource$Namespaces {
    context: APIRequestContext;
    authorizeddomains: Resource$Namespaces$Authorizeddomains;
    configurations: Resource$Namespaces$Configurations;
    domainmappings: Resource$Namespaces$Domainmappings;
    executions: Resource$Namespaces$Executions;
    jobs: Resource$Namespaces$Jobs;
    revisions: Resource$Namespaces$Revisions;
    routes: Resource$Namespaces$Routes;
    services: Resource$Namespaces$Services;
    tasks: Resource$Namespaces$Tasks;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains = new Resource$Namespaces$Authorizeddomains(
        this.context
      );
      this.configurations = new Resource$Namespaces$Configurations(
        this.context
      );
      this.domainmappings = new Resource$Namespaces$Domainmappings(
        this.context
      );
      this.executions = new Resource$Namespaces$Executions(this.context);
      this.jobs = new Resource$Namespaces$Jobs(this.context);
      this.revisions = new Resource$Namespaces$Revisions(this.context);
      this.routes = new Resource$Namespaces$Routes(this.context);
      this.services = new Resource$Namespaces$Services(this.context);
      this.tasks = new Resource$Namespaces$Tasks(this.context);
    }
  }

  export class Resource$Namespaces$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List authorized domains.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.authorizeddomains.list({
     *     // Maximum results to return per page.
     *     pageSize: 'placeholder-value',
     *     // Continuation token for fetching the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Name of the parent Project resource. Example: `projects/myproject`.
     *     parent: 'namespaces/my-namespace',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAuthorizedDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Authorizeddomains$List;
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
              rootUrl +
              '/apis/domains.cloudrun.com/v1/{+parent}/authorizeddomains'
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
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Namespaces$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Project resource. Example: `projects/myproject`.
     */
    parent?: string;
  }

  export class Resource$Namespaces$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about a configuration.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.configurations.get({
     *     // The name of the configuration to retrieve. For Cloud Run, replace {namespace_id\} with the project ID or number.
     *     name: 'namespaces/my-namespace/configurations/my-configuration',
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
      params: Params$Resource$Namespaces$Configurations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Configurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Namespaces$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Configuration> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$Get;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
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
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * List configurations.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.configurations.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Not supported by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not supported by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of the records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id\} with the project ID or number.
     *     parent: 'namespaces/my-namespace',
     *     // Not supported by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Not supported by Cloud Run.
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
      params: Params$Resource$Namespaces$Configurations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Configurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConfigurationsResponse>;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConfigurationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Configurations$List;
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
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/configurations'
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
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Configurations$Get
    extends StandardParameters {
    /**
     * The name of the configuration to retrieve. For Cloud Run, replace {namespace_id\} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Configurations$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Not supported by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not supported by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of the records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id\} with the project ID or number.
     */
    parent?: string;
    /**
     * Not supported by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Not supported by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Domainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new domain mapping.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.domainmappings.create({
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
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
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Namespaces$Domainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(
      params: Params$Resource$Namespaces$Domainmappings$Create,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Create
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Create;
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
              rootUrl + '/apis/domains.cloudrun.com/v1/{+parent}/domainmappings'
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
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * Delete a domain mapping.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.domainmappings.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/domainmappings/my-domainmapping',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Domainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Domainmappings$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Delete;
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
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Get information about a domain mapping.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.domainmappings.get({
     *     // The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/domainmappings/my-domainmapping',
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
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Domainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(
      params: Params$Resource$Namespaces$Domainmappings$Get,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$Get
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$Get;
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
            url: (rootUrl + '/apis/domains.cloudrun.com/v1/{+name}').replace(
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
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * List all domain mappings.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.domainmappings.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
      params: Params$Resource$Namespaces$Domainmappings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Domainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Domainmappings$List,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Domainmappings$List
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainMappingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Domainmappings$List;
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
              rootUrl + '/apis/domains.cloudrun.com/v1/{+parent}/domainmappings'
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
        createAPIRequest<Schema$ListDomainMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Domainmappings$Create
    extends StandardParameters {
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Domainmappings$Get
    extends StandardParameters {
    /**
     * The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Domainmappings$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Executions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Cancel an execution.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.executions.cancel({
     *     // Required. The name of the execution to cancel. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/executions/my-execution',
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
    cancel(
      params: Params$Resource$Namespaces$Executions$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Namespaces$Executions$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    cancel(
      params: Params$Resource$Namespaces$Executions$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Namespaces$Executions$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    cancel(
      params: Params$Resource$Namespaces$Executions$Cancel,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Execution>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Executions$Cancel
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Executions$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Executions$Cancel;
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
              rootUrl + '/apis/run.googleapis.com/v1/{+name}:cancel'
            ).replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * Delete an execution.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.executions.delete({
     *     // Optional. Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Optional. Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // Required. The name of the execution to delete. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/executions/my-execution',
     *     // Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Namespaces$Executions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Executions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Executions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Executions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Executions$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Executions$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Executions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Executions$Delete;
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Get information about an execution.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.executions.get({
     *     // Required. The name of the execution to retrieve. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/executions/my-execution',
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
      params: Params$Resource$Namespaces$Executions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Executions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    get(
      params: Params$Resource$Namespaces$Executions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Executions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(
      params: Params$Resource$Namespaces$Executions$Get,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    get(callback: BodyResponseCallback<Schema$Execution>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Executions$Get
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Executions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Executions$Get;
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}').replace(
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }

    /**
     * List executions.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.executions.list({
     *     // Optional. Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of the records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The namespace from which the executions should be listed. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'namespaces/my-namespace',
     *     // Optional. Not supported by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
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
      params: Params$Resource$Namespaces$Executions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Executions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListExecutionsResponse>;
    list(
      params: Params$Resource$Namespaces$Executions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Executions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Executions$List,
      callback: BodyResponseCallback<Schema$ListExecutionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListExecutionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Executions$List
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListExecutionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListExecutionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Executions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Executions$List;
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
              rootUrl + '/apis/run.googleapis.com/v1/{+parent}/executions'
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
        createAPIRequest<Schema$ListExecutionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListExecutionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Executions$Cancel
    extends StandardParameters {
    /**
     * Required. The name of the execution to cancel. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelExecutionRequest;
  }
  export interface Params$Resource$Namespaces$Executions$Delete
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
     * Required. The name of the execution to delete. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
    /**
     * Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see https://kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Executions$Get
    extends StandardParameters {
    /**
     * Required. The name of the execution to retrieve. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Executions$List
    extends StandardParameters {
    /**
     * Optional. Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of the records that should be returned.
     */
    limit?: number;
    /**
     * Required. The namespace from which the executions should be listed. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    watch?: boolean;
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
     * const run = google.run('v1');
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
     *     // Required. The namespace in which the job should be created. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
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
              rootUrl + '/apis/run.googleapis.com/v1/{+parent}/jobs'
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
     * const run = google.run('v1');
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
     *     // Required. The name of the job to delete. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/jobs/my-job',
     *     // Optional. Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Jobs$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Jobs$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
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
     * const run = google.run('v1');
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
     *     // Required. The name of the job to retrieve. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}').replace(
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
     * const run = google.run('v1');
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
     *     // Optional. Not supported by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The namespace from which the jobs should be listed. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'namespaces/my-namespace',
     *     // Optional. Not supported by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
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
              rootUrl + '/apis/run.googleapis.com/v1/{+parent}/jobs'
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

    /**
     * Replace a job. Only the spec and metadata labels and annotations are modifiable. After the Replace request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.jobs.replaceJob({
     *     // Required. The name of the job being replaced. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/jobs/my-job',
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
    replaceJob(
      params: Params$Resource$Namespaces$Jobs$Replacejob,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    replaceJob(
      params?: Params$Resource$Namespaces$Jobs$Replacejob,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Job>;
    replaceJob(
      params: Params$Resource$Namespaces$Jobs$Replacejob,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    replaceJob(
      params: Params$Resource$Namespaces$Jobs$Replacejob,
      options: MethodOptions | BodyResponseCallback<Schema$Job>,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    replaceJob(
      params: Params$Resource$Namespaces$Jobs$Replacejob,
      callback: BodyResponseCallback<Schema$Job>
    ): void;
    replaceJob(callback: BodyResponseCallback<Schema$Job>): void;
    replaceJob(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Replacejob
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
        {}) as Params$Resource$Namespaces$Jobs$Replacejob;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Replacejob;
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
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
     * Trigger creation of a new execution of this job.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.jobs.run({
     *     // Required. The name of the job to run. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/jobs/my-job',
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
    run(
      params: Params$Resource$Namespaces$Jobs$Run,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    run(
      params?: Params$Resource$Namespaces$Jobs$Run,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Execution>;
    run(
      params: Params$Resource$Namespaces$Jobs$Run,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    run(
      params: Params$Resource$Namespaces$Jobs$Run,
      options: MethodOptions | BodyResponseCallback<Schema$Execution>,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    run(
      params: Params$Resource$Namespaces$Jobs$Run,
      callback: BodyResponseCallback<Schema$Execution>
    ): void;
    run(callback: BodyResponseCallback<Schema$Execution>): void;
    run(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Jobs$Run
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Execution>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Execution> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Jobs$Run;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Jobs$Run;
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}:run').replace(
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
        createAPIRequest<Schema$Execution>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Execution>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Jobs$Create
    extends StandardParameters {
    /**
     * Required. The namespace in which the job should be created. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
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
     * Required. The name of the job to delete. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
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
     * Required. The name of the job to retrieve. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
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
     * Optional. Not supported by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Optional. Not supported by Cloud Run.
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
     * Required. The namespace from which the jobs should be listed. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Jobs$Replacejob
    extends StandardParameters {
    /**
     * Required. The name of the job being replaced. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Job;
  }
  export interface Params$Resource$Namespaces$Jobs$Run
    extends StandardParameters {
    /**
     * Required. The name of the job to run. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunJobRequest;
  }

  export class Resource$Namespaces$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a revision.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.revisions.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the revision to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/revisions/my-revision',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see https://kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Revisions$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$Delete;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Get information about a revision.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.revisions.get({
     *     // The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/revisions/my-revision',
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
      params: Params$Resource$Namespaces$Revisions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Namespaces$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$Get
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Revision> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$Get;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
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
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * List revisions.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.revisions.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
      params: Params$Resource$Namespaces$Revisions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRevisionsResponse>;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Revisions$List,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Revisions$List
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Revisions$List;
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
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/revisions'
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
        createAPIRequest<Schema$ListRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRevisionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Revisions$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the revision to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see https://kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Revisions$Get
    extends StandardParameters {
    /**
     * The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Revisions$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about a route.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.routes.get({
     *     // The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/routes/my-route',
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
      params: Params$Resource$Namespaces$Routes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Routes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Namespaces$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$Get
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Route> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$Get;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
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
        createAPIRequest<Schema$Route>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * List routes.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.routes.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'namespaces/my-namespace',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
      params: Params$Resource$Namespaces$Routes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Routes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutesResponse>;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRoutesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Routes$List;
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
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/routes'
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
        createAPIRequest<Schema$ListRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Routes$Get
    extends StandardParameters {
    /**
     * The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Routes$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Namespaces$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.services.create({
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
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
      params: Params$Resource$Namespaces$Services$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Namespaces$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Namespaces$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Create
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Create;
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
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/services'
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
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.services.delete({
     *     // Not supported, and ignored by Cloud Run.
     *     apiVersion: 'placeholder-value',
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
     *     kind: 'placeholder-value',
     *     // Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     *     name: 'namespaces/my-namespace/services/my-service',
     *     // Not supported, and ignored by Cloud Run.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Namespaces$Services$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Namespaces$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Namespaces$Services$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Delete;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Gets information about a service.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.services.get({
     *     // Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     *     name: 'namespaces/my-namespace/services/my-service',
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
      params: Params$Resource$Namespaces$Services$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Namespaces$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Get
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Get;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
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
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Lists services for the given project and region.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.services.list({
     *     // Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     *     parent: 'namespaces/my-namespace',
     *     // Not supported, and ignored by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
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
      params: Params$Resource$Namespaces$Services$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Namespaces$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$List;
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
              rootUrl + '/apis/serving.knative.dev/v1/{+parent}/services'
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
        createAPIRequest<Schema$ListServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.services.replaceService({
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     *     name: 'namespaces/my-namespace/services/my-service',
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
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    replaceService(
      params?: Params$Resource$Namespaces$Services$Replaceservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(
      params: Params$Resource$Namespaces$Services$Replaceservice,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    replaceService(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Services$Replaceservice
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Services$Replaceservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Services$Replaceservice;
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
            url: (rootUrl + '/apis/serving.knative.dev/v1/{+name}').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Services$Create
    extends StandardParameters {
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Namespaces$Services$Delete
    extends StandardParameters {
    /**
     * Not supported, and ignored by Cloud Run.
     */
    apiVersion?: string;
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    kind?: string;
    /**
     * Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     */
    name?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Namespaces$Services$Get
    extends StandardParameters {
    /**
     * Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Services$List
    extends StandardParameters {
    /**
     * Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     */
    parent?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Namespaces$Services$Replaceservice
    extends StandardParameters {
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }

  export class Resource$Namespaces$Tasks {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about a task.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.tasks.get({
     *     // Required. The name of the task to retrieve. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'namespaces/my-namespace/tasks/my-task',
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
      params: Params$Resource$Namespaces$Tasks$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Namespaces$Tasks$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Task>;
    get(
      params: Params$Resource$Namespaces$Tasks$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Namespaces$Tasks$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Task>,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(
      params: Params$Resource$Namespaces$Tasks$Get,
      callback: BodyResponseCallback<Schema$Task>
    ): void;
    get(callback: BodyResponseCallback<Schema$Task>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Tasks$Get
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Task>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Task> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Tasks$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Tasks$Get;
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
            url: (rootUrl + '/apis/run.googleapis.com/v1/{+name}').replace(
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
        createAPIRequest<Schema$Task>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Task>(parameters);
      }
    }

    /**
     * List tasks.
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
     * const run = google.run('v1');
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
     *   const res = await run.namespaces.tasks.list({
     *     // Optional. Optional encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The namespace from which the tasks should be listed. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'namespaces/my-namespace',
     *     // Optional. Not supported by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Optional. Not supported by Cloud Run.
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
      params: Params$Resource$Namespaces$Tasks$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Namespaces$Tasks$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListTasksResponse>;
    list(
      params: Params$Resource$Namespaces$Tasks$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Namespaces$Tasks$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTasksResponse>,
      callback: BodyResponseCallback<Schema$ListTasksResponse>
    ): void;
    list(
      params: Params$Resource$Namespaces$Tasks$List,
      callback: BodyResponseCallback<Schema$ListTasksResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTasksResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Namespaces$Tasks$List
        | BodyResponseCallback<Schema$ListTasksResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTasksResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTasksResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListTasksResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Namespaces$Tasks$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Namespaces$Tasks$List;
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
              rootUrl + '/apis/run.googleapis.com/v1/{+parent}/tasks'
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
        createAPIRequest<Schema$ListTasksResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTasksResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Namespaces$Tasks$Get
    extends StandardParameters {
    /**
     * Required. The name of the task to retrieve. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Namespaces$Tasks$List
    extends StandardParameters {
    /**
     * Optional. Optional encoded string to continue paging.
     */
    continue?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Optional. Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn. For example, to list all tasks of execution "foo" in succeeded state: `run.googleapis.com/execution=foo,run.googleapis.com/runningState=Succeeded`. Supported states are: * `Pending`: Initial state of all tasks. The task has not yet started but eventually will. * `Running`: Container instances for this task are running or will be running shortly. * `Succeeded`: No more container instances to run for the task, and the last attempt succeeded. * `Failed`: No more container instances to run for the task, and the last attempt failed. This task has run out of retry attempts. * `Cancelled`: Task was running but got stopped because its parent execution has been aborted. * `Abandoned`: The task has not yet started and never will because its parent execution has been aborted.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * Required. The namespace from which the tasks should be listed. Replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Optional. Not supported by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects {
    context: APIRequestContext;
    authorizeddomains: Resource$Projects$Authorizeddomains;
    locations: Resource$Projects$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains = new Resource$Projects$Authorizeddomains(
        this.context
      );
      this.locations = new Resource$Projects$Locations(this.context);
    }
  }

  export class Resource$Projects$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List authorized domains.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.authorizeddomains.list({
     *     // Maximum results to return per page.
     *     pageSize: 'placeholder-value',
     *     // Continuation token for fetching the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Name of the parent Project resource. Example: `projects/myproject`.
     *     parent: 'projects/my-project',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Projects$Authorizeddomains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Projects$Authorizeddomains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAuthorizedDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Authorizeddomains$List;
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
            url: (rootUrl + '/v1/{+parent}/authorizeddomains').replace(
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
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Project resource. Example: `projects/myproject`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations {
    context: APIRequestContext;
    authorizeddomains: Resource$Projects$Locations$Authorizeddomains;
    configurations: Resource$Projects$Locations$Configurations;
    domainmappings: Resource$Projects$Locations$Domainmappings;
    jobs: Resource$Projects$Locations$Jobs;
    revisions: Resource$Projects$Locations$Revisions;
    routes: Resource$Projects$Locations$Routes;
    services: Resource$Projects$Locations$Services;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.authorizeddomains =
        new Resource$Projects$Locations$Authorizeddomains(this.context);
      this.configurations = new Resource$Projects$Locations$Configurations(
        this.context
      );
      this.domainmappings = new Resource$Projects$Locations$Domainmappings(
        this.context
      );
      this.jobs = new Resource$Projects$Locations$Jobs(this.context);
      this.revisions = new Resource$Projects$Locations$Revisions(this.context);
      this.routes = new Resource$Projects$Locations$Routes(this.context);
      this.services = new Resource$Projects$Locations$Services(this.context);
    }

    /**
     * Lists information about the supported locations for this service.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.list({
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
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
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
      | GaxiosPromise<Schema$ListLocationsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://run.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
        createAPIRequest<Schema$ListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Authorizeddomains {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List authorized domains.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.authorizeddomains.list({
     *     // Maximum results to return per page.
     *     pageSize: 'placeholder-value',
     *     // Continuation token for fetching the next page of results.
     *     pageToken: 'placeholder-value',
     *     // Name of the parent Project resource. Example: `projects/myproject`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "domains": [],
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
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAuthorizedDomainsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Authorizeddomains$List,
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Authorizeddomains$List
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAuthorizedDomainsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAuthorizedDomainsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Authorizeddomains$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Authorizeddomains$List;
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
            url: (rootUrl + '/v1/{+parent}/authorizeddomains').replace(
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
        createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAuthorizedDomainsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Authorizeddomains$List
    extends StandardParameters {
    /**
     * Maximum results to return per page.
     */
    pageSize?: number;
    /**
     * Continuation token for fetching the next page of results.
     */
    pageToken?: string;
    /**
     * Name of the parent Project resource. Example: `projects/myproject`.
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Configurations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about a configuration.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.configurations.get({
     *     // The name of the configuration to retrieve. For Cloud Run, replace {namespace_id\} with the project ID or number.
     *     name: 'projects/my-project/locations/my-location/configurations/my-configuration',
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
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Configurations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Configuration>;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Configuration>,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Configurations$Get,
      callback: BodyResponseCallback<Schema$Configuration>
    ): void;
    get(callback: BodyResponseCallback<Schema$Configuration>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$Get
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Configuration>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Configuration> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$Get;
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
        createAPIRequest<Schema$Configuration>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Configuration>(parameters);
      }
    }

    /**
     * List configurations.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.configurations.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Not supported by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not supported by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of the records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id\} with the project ID or number.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Not supported by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Not supported by Cloud Run.
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
      params: Params$Resource$Projects$Locations$Configurations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Configurations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListConfigurationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Configurations$List,
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConfigurationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Configurations$List
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConfigurationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListConfigurationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Configurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Configurations$List;
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
            url: (rootUrl + '/v1/{+parent}/configurations').replace(
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
        createAPIRequest<Schema$ListConfigurationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConfigurationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Configurations$Get
    extends StandardParameters {
    /**
     * The name of the configuration to retrieve. For Cloud Run, replace {namespace_id\} with the project ID or number.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Configurations$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Not supported by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not supported by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of the records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the configurations should be listed. For Cloud Run, replace {namespace_id\} with the project ID or number.
     */
    parent?: string;
    /**
     * Not supported by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Not supported by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Domainmappings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new domain mapping.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.domainmappings.create({
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Domainmappings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Domainmappings$Create,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    create(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Create
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Create;
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
            url: (rootUrl + '/v1/{+parent}/domainmappings').replace(
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
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * Delete a domain mapping.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.domainmappings.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'projects/my-project/locations/my-location/domainmappings/my-domainmapping',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Domainmappings$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Delete;
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Get information about a domain mapping.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.domainmappings.get({
     *     // The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'projects/my-project/locations/my-location/domainmappings/my-domainmapping',
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
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Domainmappings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$DomainMapping>;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$DomainMapping>,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Domainmappings$Get,
      callback: BodyResponseCallback<Schema$DomainMapping>
    ): void;
    get(callback: BodyResponseCallback<Schema$DomainMapping>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$Get
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$DomainMapping>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$DomainMapping> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$Get;
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
        createAPIRequest<Schema$DomainMapping>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$DomainMapping>(parameters);
      }
    }

    /**
     * List all domain mappings.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.domainmappings.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Domainmappings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListDomainMappingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Domainmappings$List,
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListDomainMappingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Domainmappings$List
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListDomainMappingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListDomainMappingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Domainmappings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Domainmappings$List;
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
            url: (rootUrl + '/v1/{+parent}/domainmappings').replace(
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
        createAPIRequest<Schema$ListDomainMappingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListDomainMappingsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Domainmappings$Create
    extends StandardParameters {
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * The namespace in which the domain mapping should be created. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$DomainMapping;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the domain mapping to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$Get
    extends StandardParameters {
    /**
     * The name of the domain mapping to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Domainmappings$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the domain mappings should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Jobs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get the IAM Access Control policy currently in effect for the given job. This result does not include any inherited policies.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.jobs.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/jobs/my-job',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Getiampolicy;
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Sets the IAM Access control policy for the specified job. Overwrites any existing policy.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.jobs.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Jobs$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Jobs$Setiampolicy;
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified job. There are no permissions required for making this API call.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.jobs.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/jobs/my-job',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Jobs$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Jobs$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Jobs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Jobs$Testiampermissions;
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Jobs$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Jobs$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Revisions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete a revision.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.revisions.delete({
     *     // Cloud Run currently ignores this parameter.
     *     apiVersion: 'placeholder-value',
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Cloud Run currently ignores this parameter.
     *     kind: 'placeholder-value',
     *     // The name of the revision to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'projects/my-project/locations/my-location/revisions/my-revision',
     *     // Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see https://kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Revisions$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Revisions$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$Delete;
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Get information about a revision.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.revisions.get({
     *     // The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'projects/my-project/locations/my-location/revisions/my-revision',
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
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Revisions$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Revision>;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Revision>,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Revisions$Get,
      callback: BodyResponseCallback<Schema$Revision>
    ): void;
    get(callback: BodyResponseCallback<Schema$Revision>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$Get
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Revision>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Revision> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$Get;
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
        createAPIRequest<Schema$Revision>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Revision>(parameters);
      }
    }

    /**
     * List revisions.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.revisions.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
      params: Params$Resource$Projects$Locations$Revisions$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Revisions$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRevisionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Revisions$List,
      callback: BodyResponseCallback<Schema$ListRevisionsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRevisionsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Revisions$List
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRevisionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRevisionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Revisions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Revisions$List;
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
            url: (rootUrl + '/v1/{+parent}/revisions').replace(
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
        createAPIRequest<Schema$ListRevisionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRevisionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Revisions$Delete
    extends StandardParameters {
    /**
     * Cloud Run currently ignores this parameter.
     */
    apiVersion?: string;
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Cloud Run currently ignores this parameter.
     */
    kind?: string;
    /**
     * The name of the revision to delete. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
    /**
     * Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see https://kubernetes.io/docs/concepts/architecture/garbage-collection/ for more information.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Revisions$Get
    extends StandardParameters {
    /**
     * The name of the revision to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Revisions$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the revisions should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Routes {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get information about a route.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.routes.get({
     *     // The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     name: 'projects/my-project/locations/my-location/routes/my-route',
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
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Routes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Route>;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Route>,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Routes$Get,
      callback: BodyResponseCallback<Schema$Route>
    ): void;
    get(callback: BodyResponseCallback<Schema$Route>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$Get
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Route>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Route> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$Get;
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
        createAPIRequest<Schema$Route>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Route>(parameters);
      }
    }

    /**
     * List routes.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.routes.list({
     *     // Optional. Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not currently used by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // Optional. The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     *     parent: 'projects/my-project/locations/my-location',
     *     // The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
      params: Params$Resource$Projects$Locations$Routes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Routes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRoutesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListRoutesResponse>,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Routes$List,
      callback: BodyResponseCallback<Schema$ListRoutesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRoutesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Routes$List
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRoutesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRoutesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Routes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Routes$List;
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
            url: (rootUrl + '/v1/{+parent}/routes').replace(
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
        createAPIRequest<Schema$ListRoutesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRoutesResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Routes$Get
    extends StandardParameters {
    /**
     * The name of the route to retrieve. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Routes$List
    extends StandardParameters {
    /**
     * Optional. Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not currently used by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * Optional. The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * The namespace from which the routes should be listed. For Cloud Run (fully managed), replace {namespace\} with the project ID or number. It takes the form namespaces/{namespace\}. For example: namespaces/PROJECT_ID
     */
    parent?: string;
    /**
     * The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
     */
    watch?: boolean;
  }

  export class Resource$Projects$Locations$Services {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new Service. Service creation will trigger a new deployment. Use GetService, and check service.status to determine if the Service is ready.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.create({
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     *     parent: 'projects/my-project/locations/my-location',
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
      params: Params$Resource$Projects$Locations$Services$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Services$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Services$Create,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    create(callback: BodyResponseCallback<Schema$Service>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Create
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Create;
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
            url: (rootUrl + '/v1/{+parent}/services').replace(
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
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Deletes the provided service. This will cause the Service to stop serving traffic and will delete all associated Revisions.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.delete({
     *     // Not supported, and ignored by Cloud Run.
     *     apiVersion: 'placeholder-value',
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
     *     kind: 'placeholder-value',
     *     // Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     *     name: 'projects/my-project/locations/my-location/services/my-service',
     *     // Not supported, and ignored by Cloud Run.
     *     propagationPolicy: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "code": 0,
     *   //   "details": {},
     *   //   "message": "my_message",
     *   //   "metadata": {},
     *   //   "reason": "my_reason",
     *   //   "status": "my_status"
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
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Services$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Status>;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Status>,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Services$Delete,
      callback: BodyResponseCallback<Schema$Status>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Status>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Delete
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Status>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Status> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Delete;
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
        createAPIRequest<Schema$Status>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Status>(parameters);
      }
    }

    /**
     * Gets information about a service.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.get({
     *     // Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     *     name: 'projects/my-project/locations/my-location/services/my-service',
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
      params: Params$Resource$Projects$Locations$Services$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Services$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Services$Get,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    get(callback: BodyResponseCallback<Schema$Service>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Get
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Get;
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
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.getIamPolicy({
     *     // Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     *     'options.requestedPolicyVersion': 'placeholder-value',
     *     // REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Getiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Getiampolicy;
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Lists services for the given project and region.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.list({
     *     // Encoded string to continue paging.
     *     continue: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
     *     fieldSelector: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
     *     includeUninitialized: 'placeholder-value',
     *     // Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     *     labelSelector: 'placeholder-value',
     *     // The maximum number of records that should be returned.
     *     limit: 'placeholder-value',
     *     // Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Not supported, and ignored by Cloud Run.
     *     resourceVersion: 'placeholder-value',
     *     // Not supported, and ignored by Cloud Run.
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
      params: Params$Resource$Projects$Locations$Services$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Services$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListServicesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Services$List,
      callback: BodyResponseCallback<Schema$ListServicesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListServicesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$List
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListServicesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListServicesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$List;
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
            url: (rootUrl + '/v1/{+parent}/services').replace(
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
        createAPIRequest<Schema$ListServicesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListServicesResponse>(parameters);
      }
    }

    /**
     * Replaces a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.replaceService({
     *     // Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     *     dryRun: 'placeholder-value',
     *     // Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     *     name: 'projects/my-project/locations/my-location/services/my-service',
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
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    replaceService(
      params?: Params$Resource$Projects$Locations$Services$Replaceservice,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Service>;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      options: MethodOptions | BodyResponseCallback<Schema$Service>,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(
      params: Params$Resource$Projects$Locations$Services$Replaceservice,
      callback: BodyResponseCallback<Schema$Service>
    ): void;
    replaceService(callback: BodyResponseCallback<Schema$Service>): void;
    replaceService(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Replaceservice
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Service>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Service> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Replaceservice;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Replaceservice;
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
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PUT',
          },
          options
        ),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Service>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Service>(parameters);
      }
    }

    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.setIamPolicy({
     *     // REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "policy": {},
     *       //   "updateMask": "my_updateMask"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "auditConfigs": [],
     *   //   "bindings": [],
     *   //   "etag": "my_etag",
     *   //   "version": 0
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
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Services$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Setiampolicy
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Policy>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Policy> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Services$Setiampolicy;
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
        createAPIRequest<Schema$Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
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
     * const run = google.run('v1');
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
     *   const res = await run.projects.locations.services.testIamPermissions({
     *     // REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     *     resource: 'projects/my-project/locations/my-location/services/my-service',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "permissions": []
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "permissions": []
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
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Services$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Services$Testiampermissions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Services$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Services$Testiampermissions;
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
        createAPIRequest<Schema$TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Services$Create
    extends StandardParameters {
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Required. The resource's parent. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Delete
    extends StandardParameters {
    /**
     * Not supported, and ignored by Cloud Run.
     */
    apiVersion?: string;
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    kind?: string;
    /**
     * Required. The fully qualified name of the service to delete. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     */
    name?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    propagationPolicy?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Get
    extends StandardParameters {
    /**
     * Required. The fully qualified name of the service to retrieve. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$Getiampolicy
    extends StandardParameters {
    /**
     * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    'options.requestedPolicyVersion'?: number;
    /**
     * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Locations$Services$List
    extends StandardParameters {
    /**
     * Encoded string to continue paging.
     */
    continue?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    fieldSelector?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    includeUninitialized?: boolean;
    /**
     * Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
     */
    labelSelector?: string;
    /**
     * The maximum number of records that should be returned.
     */
    limit?: number;
    /**
     * Required. The parent from where the resources should be listed. In Cloud Run, it may be one of the following: * `{project_id_or_number\}` * `namespaces/{project_id_or_number\}` * `namespaces/{project_id_or_number\}/services` * `projects/{project_id_or_number\}/locations/{region\}` * `projects/{project_id_or_number\}/regions/{region\}`
     */
    parent?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    resourceVersion?: string;
    /**
     * Not supported, and ignored by Cloud Run.
     */
    watch?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Services$Replaceservice
    extends StandardParameters {
    /**
     * Indicates that the server should validate the request and populate default values without persisting the request. Supported values: `all`
     */
    dryRun?: string;
    /**
     * Required. The fully qualified name of the service to replace. It can be any of the following forms: * `namespaces/{project_id_or_number\}/services/{service_name\}` (only when the `endpoint` is regional) * `projects/{project_id_or_number\}/locations/{region\}/services/{service_name\}` * `projects/{project_id_or_number\}/regions/{region\}/services/{service_name\}`
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Service;
  }
  export interface Params$Resource$Projects$Locations$Services$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Services$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}
