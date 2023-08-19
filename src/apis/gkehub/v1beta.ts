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

export namespace gkehub_v1beta {
  export interface Options extends GlobalOptions {
    version: 'v1beta';
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
   * GKE Hub API
   *
   *
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const gkehub = google.gkehub('v1beta');
   * ```
   */
  export class Gkehub {
    context: APIRequestContext;
    organizations: Resource$Organizations;
    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.organizations = new Resource$Organizations(this.context);
      this.projects = new Resource$Projects(this.context);
    }
  }

  /**
   * **Anthos Observability**: Spec
   */
  export interface Schema$AnthosObservabilityFeatureSpec {
    /**
     * Default membership spec for unconfigured memberships
     */
    defaultMembershipSpec?: Schema$AnthosObservabilityMembershipSpec;
  }
  /**
   * **Anthosobservability**: Per-Membership Feature spec.
   */
  export interface Schema$AnthosObservabilityMembershipSpec {
    /**
     * Use full of metrics rather than optimized metrics. See https://cloud.google.com/anthos/clusters/docs/on-prem/1.8/concepts/logging-and-monitoring#optimized_metrics_default_metrics
     */
    doNotOptimizeMetrics?: boolean | null;
    /**
     * Enable collecting and reporting metrics and logs from user apps.
     */
    enableStackdriverOnApplications?: boolean | null;
    /**
     * the version of stackdriver operator used by this feature
     */
    version?: string | null;
  }
  /**
   * Spec for App Dev Experience Feature.
   */
  export interface Schema$AppDevExperienceFeatureSpec {}
  /**
   * State for App Dev Exp Feature.
   */
  export interface Schema$AppDevExperienceFeatureState {
    /**
     * Status of subcomponent that detects configured Service Mesh resources.
     */
    networkingInstallSucceeded?: Schema$Status;
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * CommonFeatureSpec contains Hub-wide configuration information
   */
  export interface Schema$CommonFeatureSpec {
    /**
     * Anthos Observability spec
     */
    anthosobservability?: Schema$AnthosObservabilityFeatureSpec;
    /**
     * Appdevexperience specific spec.
     */
    appdevexperience?: Schema$AppDevExperienceFeatureSpec;
    /**
     * FleetObservability feature spec.
     */
    fleetobservability?: Schema$FleetObservabilityFeatureSpec;
    /**
     * Multicluster Ingress-specific spec.
     */
    multiclusteringress?: Schema$MultiClusterIngressFeatureSpec;
  }
  /**
   * CommonFeatureState contains Hub-wide Feature status information.
   */
  export interface Schema$CommonFeatureState {
    /**
     * Appdevexperience specific state.
     */
    appdevexperience?: Schema$AppDevExperienceFeatureState;
    /**
     * FleetObservability feature state.
     */
    fleetobservability?: Schema$FleetObservabilityFeatureState;
    /**
     * Output only. The "running state" of the Feature in this Hub.
     */
    state?: Schema$FeatureState;
  }
  /**
   * CommonFleetDefaultMemberConfigSpec contains default configuration information for memberships of a fleet
   */
  export interface Schema$CommonFleetDefaultMemberConfigSpec {
    /**
     * Identity Service-specific spec.
     */
    identityservice?: Schema$IdentityServiceMembershipSpec;
  }
  /**
   * Configuration for Binauthz
   */
  export interface Schema$ConfigManagementBinauthzConfig {
    /**
     * Whether binauthz is enabled in this cluster.
     */
    enabled?: boolean | null;
  }
  /**
   * State for Binauthz
   */
  export interface Schema$ConfigManagementBinauthzState {
    /**
     * The version of binauthz that is installed.
     */
    version?: Schema$ConfigManagementBinauthzVersion;
    /**
     * The state of the binauthz webhook.
     */
    webhook?: string | null;
  }
  /**
   * The version of binauthz.
   */
  export interface Schema$ConfigManagementBinauthzVersion {
    /**
     * The version of the binauthz webhook.
     */
    webhookVersion?: string | null;
  }
  /**
   * Configuration for Config Sync
   */
  export interface Schema$ConfigManagementConfigSync {
    /**
     * Set to true to allow the vertical scaling. Defaults to false which disallows vertical scaling. This field is deprecated.
     */
    allowVerticalScale?: boolean | null;
    /**
     * Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field.
     */
    enabled?: boolean | null;
    /**
     * Git repo configuration for the cluster.
     */
    git?: Schema$ConfigManagementGitConfig;
    /**
     * The Email of the Google Cloud Service Account (GSA) used for exporting Config Sync metrics to Cloud Monitoring and Cloud Monarch when Workload Identity is enabled. The GSA should have the Monitoring Metric Writer (roles/monitoring.metricWriter) IAM role. The Kubernetes ServiceAccount `default` in the namespace `config-management-monitoring` should be bound to the GSA. This field is required when automatic Feature management is enabled.
     */
    metricsGcpServiceAccountEmail?: string | null;
    /**
     * OCI repo configuration for the cluster
     */
    oci?: Schema$ConfigManagementOciConfig;
    /**
     * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
     */
    preventDrift?: boolean | null;
    /**
     * Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
     */
    sourceFormat?: string | null;
    /**
     * Set to true to stop syncing configs for a single cluster when automatic Feature management is enabled. Default to false. The field will be ignored when automatic Feature management is disabled.
     */
    stopSyncing?: boolean | null;
  }
  /**
   * The state of ConfigSync's deployment on a cluster
   */
  export interface Schema$ConfigManagementConfigSyncDeploymentState {
    /**
     * Deployment state of admission-webhook
     */
    admissionWebhook?: string | null;
    /**
     * Deployment state of the git-sync pod
     */
    gitSync?: string | null;
    /**
     * Deployment state of the importer pod
     */
    importer?: string | null;
    /**
     * Deployment state of the monitor pod
     */
    monitor?: string | null;
    /**
     * Deployment state of reconciler-manager pod
     */
    reconcilerManager?: string | null;
    /**
     * Deployment state of root-reconciler
     */
    rootReconciler?: string | null;
    /**
     * Deployment state of the syncer pod
     */
    syncer?: string | null;
  }
  /**
   * Errors pertaining to the installation of Config Sync
   */
  export interface Schema$ConfigManagementConfigSyncError {
    /**
     * A string representing the user facing error message
     */
    errorMessage?: string | null;
  }
  /**
   * State information for ConfigSync
   */
  export interface Schema$ConfigManagementConfigSyncState {
    /**
     * Information about the deployment of ConfigSync, including the version of the various Pods deployed
     */
    deploymentState?: Schema$ConfigManagementConfigSyncDeploymentState;
    /**
     * Errors pertaining to the installation of Config Sync.
     */
    errors?: Schema$ConfigManagementConfigSyncError[];
    /**
     * The state of ConfigSync's process to sync configs to a cluster
     */
    syncState?: Schema$ConfigManagementSyncState;
    /**
     * The version of ConfigSync deployed
     */
    version?: Schema$ConfigManagementConfigSyncVersion;
  }
  /**
   * Specific versioning information pertaining to ConfigSync's Pods
   */
  export interface Schema$ConfigManagementConfigSyncVersion {
    /**
     * Version of the deployed admission_webhook pod
     */
    admissionWebhook?: string | null;
    /**
     * Version of the deployed git-sync pod
     */
    gitSync?: string | null;
    /**
     * Version of the deployed importer pod
     */
    importer?: string | null;
    /**
     * Version of the deployed monitor pod
     */
    monitor?: string | null;
    /**
     * Version of the deployed reconciler-manager pod
     */
    reconcilerManager?: string | null;
    /**
     * Version of the deployed reconciler container in root-reconciler pod
     */
    rootReconciler?: string | null;
    /**
     * Version of the deployed syncer pod
     */
    syncer?: string | null;
  }
  /**
   * Model for a config file in the git repo with an associated Sync error
   */
  export interface Schema$ConfigManagementErrorResource {
    /**
     * Group/version/kind of the resource that is causing an error
     */
    resourceGvk?: Schema$ConfigManagementGroupVersionKind;
    /**
     * Metadata name of the resource that is causing an error
     */
    resourceName?: string | null;
    /**
     * Namespace of the resource that is causing an error
     */
    resourceNamespace?: string | null;
    /**
     * Path in the git repo of the erroneous config
     */
    sourcePath?: string | null;
  }
  /**
   * State of Policy Controller installation.
   */
  export interface Schema$ConfigManagementGatekeeperDeploymentState {
    /**
     * Status of gatekeeper-audit deployment.
     */
    gatekeeperAudit?: string | null;
    /**
     * Status of gatekeeper-controller-manager pod.
     */
    gatekeeperControllerManagerState?: string | null;
    /**
     * Status of the pod serving the mutation webhook.
     */
    gatekeeperMutation?: string | null;
  }
  /**
   * Git repo configuration for a single cluster.
   */
  export interface Schema$ConfigManagementGitConfig {
    /**
     * The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount.
     */
    gcpServiceAccountEmail?: string | null;
    /**
     * URL for the HTTPS proxy to be used when communicating with the Git repo.
     */
    httpsProxy?: string | null;
    /**
     * The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
     */
    policyDir?: string | null;
    /**
     * Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive. Required.
     */
    secretType?: string | null;
    /**
     * The branch of the repository to sync from. Default: master.
     */
    syncBranch?: string | null;
    /**
     * The URL of the Git repository to use as the source of truth.
     */
    syncRepo?: string | null;
    /**
     * Git revision (tag or hash) to check out. Default HEAD.
     */
    syncRev?: string | null;
    /**
     * Period in seconds between consecutive syncs. Default: 15.
     */
    syncWaitSecs?: string | null;
  }
  /**
   * A Kubernetes object's GVK
   */
  export interface Schema$ConfigManagementGroupVersionKind {
    /**
     * Kubernetes Group
     */
    group?: string | null;
    /**
     * Kubernetes Kind
     */
    kind?: string | null;
    /**
     * Kubernetes Version
     */
    version?: string | null;
  }
  /**
   * Configuration for Hierarchy Controller
   */
  export interface Schema$ConfigManagementHierarchyControllerConfig {
    /**
     * Whether Hierarchy Controller is enabled in this cluster.
     */
    enabled?: boolean | null;
    /**
     * Whether hierarchical resource quota is enabled in this cluster.
     */
    enableHierarchicalResourceQuota?: boolean | null;
    /**
     * Whether pod tree labels are enabled in this cluster.
     */
    enablePodTreeLabels?: boolean | null;
  }
  /**
   * Deployment state for Hierarchy Controller
   */
  export interface Schema$ConfigManagementHierarchyControllerDeploymentState {
    /**
     * The deployment state for Hierarchy Controller extension (e.g. v0.7.0-hc.1)
     */
    extension?: string | null;
    /**
     * The deployment state for open source HNC (e.g. v0.7.0-hc.0)
     */
    hnc?: string | null;
  }
  /**
   * State for Hierarchy Controller
   */
  export interface Schema$ConfigManagementHierarchyControllerState {
    /**
     * The deployment state for Hierarchy Controller
     */
    state?: Schema$ConfigManagementHierarchyControllerDeploymentState;
    /**
     * The version for Hierarchy Controller
     */
    version?: Schema$ConfigManagementHierarchyControllerVersion;
  }
  /**
   * Version for Hierarchy Controller
   */
  export interface Schema$ConfigManagementHierarchyControllerVersion {
    /**
     * Version for Hierarchy Controller extension
     */
    extension?: string | null;
    /**
     * Version for open source HNC
     */
    hnc?: string | null;
  }
  /**
   * Errors pertaining to the installation of ACM
   */
  export interface Schema$ConfigManagementInstallError {
    /**
     * A string representing the user facing error message
     */
    errorMessage?: string | null;
  }
  /**
   * **Anthos Config Management**: Configuration for a single cluster. Intended to parallel the ConfigManagement CR.
   */
  export interface Schema$ConfigManagementMembershipSpec {
    /**
     * Binauthz conifguration for the cluster.
     */
    binauthz?: Schema$ConfigManagementBinauthzConfig;
    /**
     * The user-specified cluster name used by Config Sync cluster-name-selector annotation or ClusterSelector, for applying configs to only a subset of clusters. Omit this field if the cluster's fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector. Set this field if a name different from the cluster's fleet membership name is used by Config Sync cluster-name-selector annotation or ClusterSelector.
     */
    cluster?: string | null;
    /**
     * Config Sync configuration for the cluster.
     */
    configSync?: Schema$ConfigManagementConfigSync;
    /**
     * Hierarchy Controller configuration for the cluster.
     */
    hierarchyController?: Schema$ConfigManagementHierarchyControllerConfig;
    /**
     * Enables automatic Feature management.
     */
    management?: string | null;
    /**
     * Policy Controller configuration for the cluster.
     */
    policyController?: Schema$ConfigManagementPolicyController;
    /**
     * Version of ACM installed.
     */
    version?: string | null;
  }
  /**
   * **Anthos Config Management**: State for a single cluster.
   */
  export interface Schema$ConfigManagementMembershipState {
    /**
     * Binauthz status
     */
    binauthzState?: Schema$ConfigManagementBinauthzState;
    /**
     * This field is set to the `cluster_name` field of the Membership Spec if it is not empty. Otherwise, it is set to the cluster's fleet membership name.
     */
    clusterName?: string | null;
    /**
     * Current sync status
     */
    configSyncState?: Schema$ConfigManagementConfigSyncState;
    /**
     * Hierarchy Controller status
     */
    hierarchyControllerState?: Schema$ConfigManagementHierarchyControllerState;
    /**
     * Membership configuration in the cluster. This represents the actual state in the cluster, while the MembershipSpec in the FeatureSpec represents the intended state
     */
    membershipSpec?: Schema$ConfigManagementMembershipSpec;
    /**
     * Current install status of ACM's Operator
     */
    operatorState?: Schema$ConfigManagementOperatorState;
    /**
     * PolicyController status
     */
    policyControllerState?: Schema$ConfigManagementPolicyControllerState;
  }
  /**
   * OCI repo configuration for a single cluster
   */
  export interface Schema$ConfigManagementOciConfig {
    /**
     * The Google Cloud Service Account Email used for auth when secret_type is gcpServiceAccount.
     */
    gcpServiceAccountEmail?: string | null;
    /**
     * The absolute path of the directory that contains the local resources. Default: the root directory of the image.
     */
    policyDir?: string | null;
    /**
     * Type of secret configured for access to the Git repo.
     */
    secretType?: string | null;
    /**
     * The OCI image repository URL for the package to sync from. e.g. `LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME`.
     */
    syncRepo?: string | null;
    /**
     * Period in seconds between consecutive syncs. Default: 15.
     */
    syncWaitSecs?: string | null;
  }
  /**
   * State information for an ACM's Operator
   */
  export interface Schema$ConfigManagementOperatorState {
    /**
     * The state of the Operator's deployment
     */
    deploymentState?: string | null;
    /**
     * Install errors.
     */
    errors?: Schema$ConfigManagementInstallError[];
    /**
     * The semenatic version number of the operator
     */
    version?: string | null;
  }
  /**
   * Configuration for Policy Controller
   */
  export interface Schema$ConfigManagementPolicyController {
    /**
     * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
     */
    auditIntervalSeconds?: string | null;
    /**
     * Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
     */
    enabled?: boolean | null;
    /**
     * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
     */
    exemptableNamespaces?: string[] | null;
    /**
     * Logs all denies and dry run failures.
     */
    logDeniesEnabled?: boolean | null;
    /**
     * Monitoring specifies the configuration of monitoring.
     */
    monitoring?: Schema$ConfigManagementPolicyControllerMonitoring;
    /**
     * Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.
     */
    mutationEnabled?: boolean | null;
    /**
     * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
     */
    referentialRulesEnabled?: boolean | null;
    /**
     * Installs the default template library along with Policy Controller.
     */
    templateLibraryInstalled?: boolean | null;
    /**
     * Output only. Last time this membership spec was updated.
     */
    updateTime?: string | null;
  }
  /**
   * State for the migration of PolicyController from ACM -\> PoCo Hub.
   */
  export interface Schema$ConfigManagementPolicyControllerMigration {
    /**
     * Last time this membership spec was copied to PoCo feature.
     */
    copyTime?: string | null;
    /**
     * Stage of the migration.
     */
    stage?: string | null;
  }
  /**
   * PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
   */
  export interface Schema$ConfigManagementPolicyControllerMonitoring {
    /**
     * Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export.
     */
    backends?: string[] | null;
  }
  /**
   * State for PolicyControllerState.
   */
  export interface Schema$ConfigManagementPolicyControllerState {
    /**
     * The state about the policy controller installation.
     */
    deploymentState?: Schema$ConfigManagementGatekeeperDeploymentState;
    /**
     * Record state of ACM -\> PoCo Hub migration for this feature.
     */
    migration?: Schema$ConfigManagementPolicyControllerMigration;
    /**
     * The version of Gatekeeper Policy Controller deployed.
     */
    version?: Schema$ConfigManagementPolicyControllerVersion;
  }
  /**
   * The build version of Gatekeeper Policy Controller is using.
   */
  export interface Schema$ConfigManagementPolicyControllerVersion {
    /**
     * The gatekeeper image tag that is composed of ACM version, git tag, build number.
     */
    version?: string | null;
  }
  /**
   * An ACM created error representing a problem syncing configurations
   */
  export interface Schema$ConfigManagementSyncError {
    /**
     * An ACM defined error code
     */
    code?: string | null;
    /**
     * A description of the error
     */
    errorMessage?: string | null;
    /**
     * A list of config(s) associated with the error, if any
     */
    errorResources?: Schema$ConfigManagementErrorResource[];
  }
  /**
   * State indicating an ACM's progress syncing configurations to a cluster
   */
  export interface Schema$ConfigManagementSyncState {
    /**
     * Sync status code
     */
    code?: string | null;
    /**
     * A list of errors resulting from problematic configs. This list will be truncated after 100 errors, although it is unlikely for that many errors to simultaneously exist.
     */
    errors?: Schema$ConfigManagementSyncError[];
    /**
     * Token indicating the state of the importer.
     */
    importToken?: string | null;
    /**
     * Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo The time format is specified in https://golang.org/pkg/time/#Time.String
     */
    lastSync?: string | null;
    /**
     * Timestamp type of when ACM last successfully synced the repo
     */
    lastSyncTime?: string | null;
    /**
     * Token indicating the state of the repo.
     */
    sourceToken?: string | null;
    /**
     * Token indicating the state of the syncer.
     */
    syncToken?: string | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
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
   * Feature represents the settings and status of any Hub Feature.
   */
  export interface Schema$Feature {
    /**
     * Output only. When the Feature resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the Feature resource was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Feature configuration applicable to all memberships of the fleet.
     */
    fleetDefaultMemberConfig?: Schema$CommonFleetDefaultMemberConfigSpec;
    /**
     * Labels for this Feature.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused. The keys indicate which Membership the configuration is for, in the form: `projects/{p\}/locations/{l\}/memberships/{m\}` Where {p\} is the project, {l\} is a valid location and {m\} is a valid Membership in this project at that location. {p\} WILL match the Feature's project. {p\} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.
     */
    membershipSpecs?: {[key: string]: Schema$MembershipFeatureSpec} | null;
    /**
     * Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused. The keys indicate which Membership the state is for, in the form: `projects/{p\}/locations/{l\}/memberships/{m\}` Where {p\} is the project number, {l\} is a valid location and {m\} is a valid Membership in this project at that location. {p\} MUST match the Feature's project number.
     */
    membershipStates?: {[key: string]: Schema$MembershipFeatureState} | null;
    /**
     * Output only. The full, unique name of this Feature resource in the format `projects/x/locations/x/features/x`.
     */
    name?: string | null;
    /**
     * Output only. State of the Feature resource itself.
     */
    resourceState?: Schema$FeatureResourceState;
    /**
     * Optional. Scope-specific configuration for this Feature. If this Feature does not support any per-Scope configuration, this field may be unused. The keys indicate which Scope the configuration is for, in the form: `projects/{p\}/locations/global/scopes/{s\}` Where {p\} is the project, {s\} is a valid Scope in this project. {p\} WILL match the Feature's project. {p\} will always be returned as the project number, but the project ID is also accepted during input. If the same Scope is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.
     */
    scopeSpecs?: {[key: string]: Schema$ScopeFeatureSpec} | null;
    /**
     * Output only. Scope-specific Feature status. If this Feature does report any per-Scope status, this field may be unused. The keys indicate which Scope the state is for, in the form: `projects/{p\}/locations/global/scopes/{s\}` Where {p\} is the project, {s\} is a valid Scope in this project. {p\} WILL match the Feature's project.
     */
    scopeStates?: {[key: string]: Schema$ScopeFeatureState} | null;
    /**
     * Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.
     */
    spec?: Schema$CommonFeatureSpec;
    /**
     * Output only. The Hub-wide Feature state.
     */
    state?: Schema$CommonFeatureState;
    /**
     * Output only. When the Feature resource was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * FeatureResourceState describes the state of a Feature *resource* in the GkeHub API. See `FeatureState` for the "running state" of the Feature in the Hub and across Memberships.
   */
  export interface Schema$FeatureResourceState {
    /**
     * The current state of the Feature resource in the Hub API.
     */
    state?: string | null;
  }
  /**
   * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
   */
  export interface Schema$FeatureState {
    /**
     * The high-level, machine-readable status of this Feature.
     */
    code?: string | null;
    /**
     * A human-readable description of the current status.
     */
    description?: string | null;
    /**
     * The time this status and any related Feature-specific details were updated.
     */
    updateTime?: string | null;
  }
  /**
   * Fleet contains the Fleet-wide metadata and configuration.
   */
  export interface Schema$Fleet {
    /**
     * Output only. When the Fleet was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the Fleet was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. A user-assigned display name of the Fleet. When present, it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point. Example: `Production Fleet`
     */
    displayName?: string | null;
    /**
     * Optional. Labels for this Fleet.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The full, unique resource name of this fleet in the format of `projects/{project\}/locations/{location\}/fleets/{fleet\}`. Each Google Cloud project can have at most one fleet resource, named "default".
     */
    name?: string | null;
    /**
     * Output only. State of the namespace resource.
     */
    state?: Schema$FleetLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all Fleet resources. If a Fleet resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string | null;
    /**
     * Output only. When the Fleet was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * FleetLifecycleState describes the state of a Fleet resource.
   */
  export interface Schema$FleetLifecycleState {
    /**
     * Output only. The current state of the Fleet resource.
     */
    code?: string | null;
  }
  /**
   * All error details of the fleet observability feature.
   */
  export interface Schema$FleetObservabilityFeatureError {
    /**
     * The code of the error.
     */
    code?: string | null;
    /**
     * A human-readable description of the current status.
     */
    description?: string | null;
  }
  /**
   * **Fleet Observability**: The Hub-wide input for the FleetObservability feature.
   */
  export interface Schema$FleetObservabilityFeatureSpec {
    /**
     * Specified if fleet logging feature is enabled for the entire fleet. If UNSPECIFIED, fleet logging feature is disabled for the entire fleet.
     */
    loggingConfig?: Schema$FleetObservabilityLoggingConfig;
  }
  /**
   * **FleetObservability**: Hub-wide Feature for FleetObservability feature. state.
   */
  export interface Schema$FleetObservabilityFeatureState {
    /**
     * The feature state of default logging.
     */
    logging?: Schema$FleetObservabilityFleetObservabilityLoggingState;
    /**
     * The feature state of fleet monitoring.
     */
    monitoring?: Schema$FleetObservabilityFleetObservabilityMonitoringState;
  }
  /**
   * Base state for fleet observability feature.
   */
  export interface Schema$FleetObservabilityFleetObservabilityBaseFeatureState {
    /**
     * The high-level, machine-readable status of this Feature.
     */
    code?: string | null;
    /**
     * Errors after reconciling the monitoring and logging feature if the code is not OK.
     */
    errors?: Schema$FleetObservabilityFeatureError[];
  }
  /**
   * Feature state for logging feature.
   */
  export interface Schema$FleetObservabilityFleetObservabilityLoggingState {
    /**
     * The base feature state of fleet default log.
     */
    defaultLog?: Schema$FleetObservabilityFleetObservabilityBaseFeatureState;
    /**
     * The base feature state of fleet scope log.
     */
    scopeLog?: Schema$FleetObservabilityFleetObservabilityBaseFeatureState;
  }
  /**
   * Feature state for monitoring feature.
   */
  export interface Schema$FleetObservabilityFleetObservabilityMonitoringState {
    /**
     * The base feature state of fleet monitoring feature.
     */
    state?: Schema$FleetObservabilityFleetObservabilityBaseFeatureState;
  }
  /**
   * LoggingConfig defines the configuration for different types of logs.
   */
  export interface Schema$FleetObservabilityLoggingConfig {
    /**
     * Specified if applying the default routing config to logs not specified in other configs.
     */
    defaultConfig?: Schema$FleetObservabilityRoutingConfig;
    /**
     * Specified if applying the routing config to all logs for all fleet scopes.
     */
    fleetScopeLogsConfig?: Schema$FleetObservabilityRoutingConfig;
  }
  /**
   * **FleetObservability**: The membership-specific input for FleetObservability feature.
   */
  export interface Schema$FleetObservabilityMembershipSpec {}
  /**
   * **FleetObservability**: Membership-specific Feature state for fleetobservability.
   */
  export interface Schema$FleetObservabilityMembershipState {}
  /**
   * RoutingConfig configures the behaviour of fleet logging feature.
   */
  export interface Schema$FleetObservabilityRoutingConfig {
    /**
     * mode configures the logs routing mode.
     */
    mode?: string | null;
  }
  /**
   * Response for GenerateRBACRoleBindingYAML.
   */
  export interface Schema$GenerateMembershipRBACRoleBindingYAMLResponse {
    /**
     * a yaml text blob including the RBAC policies.
     */
    roleBindingsYaml?: string | null;
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
   * Configuration of an auth method for a member/cluster. Only one authentication method (e.g., OIDC and LDAP) can be set per AuthMethod.
   */
  export interface Schema$IdentityServiceAuthMethod {
    /**
     * AzureAD specific Configuration.
     */
    azureadConfig?: Schema$IdentityServiceAzureADConfig;
    /**
     * GoogleConfig specific configuration.
     */
    googleConfig?: Schema$IdentityServiceGoogleConfig;
    /**
     * Identifier for auth config.
     */
    name?: string | null;
    /**
     * OIDC specific configuration.
     */
    oidcConfig?: Schema$IdentityServiceOidcConfig;
    /**
     * Proxy server address to use for auth method.
     */
    proxy?: string | null;
  }
  /**
   * Configuration for the AzureAD Auth flow.
   */
  export interface Schema$IdentityServiceAzureADConfig {
    /**
     * ID for the registered client application that makes authentication requests to the Azure AD identity provider.
     */
    clientId?: string | null;
    /**
     * Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH.
     */
    clientSecret?: string | null;
    /**
     * Output only. Encrypted AzureAD client secret.
     */
    encryptedClientSecret?: string | null;
    /**
     * The redirect URL that kubectl uses for authorization.
     */
    kubectlRedirectUri?: string | null;
    /**
     * Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant.
     */
    tenant?: string | null;
    /**
     * Optional. Claim in the AzureAD ID Token that holds the user details.
     */
    userClaim?: string | null;
  }
  /**
   * Configuration for the Google Plugin Auth flow.
   */
  export interface Schema$IdentityServiceGoogleConfig {
    /**
     * Disable automatic configuration of Google Plugin on supported platforms.
     */
    disable?: boolean | null;
  }
  /**
   * **Anthos Identity Service**: Configuration for a single Membership.
   */
  export interface Schema$IdentityServiceMembershipSpec {
    /**
     * A member may support multiple auth methods.
     */
    authMethods?: Schema$IdentityServiceAuthMethod[];
  }
  /**
   * **Anthos Identity Service**: State for a single Membership.
   */
  export interface Schema$IdentityServiceMembershipState {
    /**
     * The reason of the failure.
     */
    failureReason?: string | null;
    /**
     * Installed AIS version. This is the AIS version installed on this member. The values makes sense iff state is OK.
     */
    installedVersion?: string | null;
    /**
     * Last reconciled membership configuration
     */
    memberConfig?: Schema$IdentityServiceMembershipSpec;
    /**
     * Deployment state on this member
     */
    state?: string | null;
  }
  /**
   * Configuration for OIDC Auth flow.
   */
  export interface Schema$IdentityServiceOidcConfig {
    /**
     * PEM-encoded CA for OIDC provider.
     */
    certificateAuthorityData?: string | null;
    /**
     * ID for OIDC client application.
     */
    clientId?: string | null;
    /**
     * Input only. Unencrypted OIDC client secret will be passed to the GKE Hub CLH.
     */
    clientSecret?: string | null;
    /**
     * Flag to denote if reverse proxy is used to connect to auth provider. This flag should be set to true when provider is not reachable by Google Cloud Console.
     */
    deployCloudConsoleProxy?: boolean | null;
    /**
     * Enable access token.
     */
    enableAccessToken?: boolean | null;
    /**
     * Output only. Encrypted OIDC Client secret
     */
    encryptedClientSecret?: string | null;
    /**
     * Comma-separated list of key-value pairs.
     */
    extraParams?: string | null;
    /**
     * Prefix to prepend to group name.
     */
    groupPrefix?: string | null;
    /**
     * Claim in OIDC ID token that holds group information.
     */
    groupsClaim?: string | null;
    /**
     * URI for the OIDC provider. This should point to the level below .well-known/openid-configuration.
     */
    issuerUri?: string | null;
    /**
     * Registered redirect uri to redirect users going through OAuth flow using kubectl plugin.
     */
    kubectlRedirectUri?: string | null;
    /**
     * Comma-separated list of identifiers.
     */
    scopes?: string | null;
    /**
     * Claim in OIDC ID token that holds username.
     */
    userClaim?: string | null;
    /**
     * Prefix to prepend to user name.
     */
    userPrefix?: string | null;
  }
  /**
   * Response message for the `GkeHub.ListFeatures` method.
   */
  export interface Schema$ListFeaturesResponse {
    /**
     * A token to request the next page of resources from the `ListFeatures` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
    /**
     * The list of matching Features
     */
    resources?: Schema$Feature[];
  }
  /**
   * Response message for the `GkeHub.ListFleetsResponse` method.
   */
  export interface Schema$ListFleetsResponse {
    /**
     * The list of matching fleets.
     */
    fleets?: Schema$Fleet[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. The token is only valid for 1h.
     */
    nextPageToken?: string | null;
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
   * List of MembershipBindings.
   */
  export interface Schema$ListMembershipBindingsResponse {
    /**
     * The list of membership_bindings
     */
    membershipBindings?: Schema$MembershipBinding[];
    /**
     * A token to request the next page of resources from the `ListMembershipBindings` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
  }
  /**
   * List of Membership RBACRoleBindings.
   */
  export interface Schema$ListMembershipRBACRoleBindingsResponse {
    /**
     * A token to request the next page of resources from the `ListMembershipRBACRoleBindings` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
    /**
     * The list of Membership RBACRoleBindings.
     */
    rbacrolebindings?: Schema$RBACRoleBinding[];
  }
  /**
   * List of fleet namespaces.
   */
  export interface Schema$ListNamespacesResponse {
    /**
     * The list of fleet namespaces
     */
    namespaces?: Schema$Namespace[];
    /**
     * A token to request the next page of resources from the `ListNamespaces` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$Operation[];
  }
  /**
   * List of RBACRoleBindings.
   */
  export interface Schema$ListRBACRoleBindingsResponse {
    /**
     * A token to request the next page of resources from the `ListRBACRoleBindings` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
    /**
     * The list of RBACRoleBindings
     */
    rbacrolebindings?: Schema$RBACRoleBinding[];
  }
  /**
   * List of fleet namespaces.
   */
  export interface Schema$ListScopeNamespacesResponse {
    /**
     * A token to request the next page of resources from the `ListNamespaces` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
    /**
     * The list of fleet namespaces
     */
    scopeNamespaces?: Schema$Namespace[];
  }
  /**
   * List of Scope RBACRoleBindings.
   */
  export interface Schema$ListScopeRBACRoleBindingsResponse {
    /**
     * A token to request the next page of resources from the `ListScopeRBACRoleBindings` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
    /**
     * The list of Scope RBACRoleBindings.
     */
    rbacrolebindings?: Schema$RBACRoleBinding[];
  }
  /**
   * List of Scopes.
   */
  export interface Schema$ListScopesResponse {
    /**
     * A token to request the next page of resources from the `ListScopes` method. The value of an empty string means that there are no more resources to return.
     */
    nextPageToken?: string | null;
    /**
     * The list of Scopes
     */
    scopes?: Schema$Scope[];
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
   * MembershipBinding is a subresource of a Membership, representing what Fleet Scopes (or other, future Fleet resources) a Membership is bound to.
   */
  export interface Schema$MembershipBinding {
    /**
     * Output only. When the membership binding was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the membership binding was deleted.
     */
    deleteTime?: string | null;
    /**
     * Whether the membershipbinding is Fleet-wide; true means that this Membership should be bound to all Namespaces in this entire Fleet.
     */
    fleet?: boolean | null;
    /**
     * Optional. Labels for this MembershipBinding.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name for the membershipbinding itself `projects/{project\}/locations/{location\}/memberships/{membership\}/bindings/{membershipbinding\}`
     */
    name?: string | null;
    /**
     * A Scope resource name in the format `projects/x/locations/x/scopes/x`.
     */
    scope?: string | null;
    /**
     * Output only. State of the membership binding resource.
     */
    state?: Schema$MembershipBindingLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all membershipbinding resources. If a membershipbinding resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string | null;
    /**
     * Output only. When the membership binding was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * MembershipBindingLifecycleState describes the state of a Binding resource.
   */
  export interface Schema$MembershipBindingLifecycleState {
    /**
     * Output only. The current state of the MembershipBinding resource.
     */
    code?: string | null;
  }
  /**
   * MembershipFeatureSpec contains configuration information for a single Membership. NOTE: Please use snake case in your feature name.
   */
  export interface Schema$MembershipFeatureSpec {
    /**
     * Anthos Observability-specific spec
     */
    anthosobservability?: Schema$AnthosObservabilityMembershipSpec;
    /**
     * Cloud Build-specific spec
     */
    cloudbuild?: Schema$MembershipSpec;
    /**
     * Config Management-specific spec.
     */
    configmanagement?: Schema$ConfigManagementMembershipSpec;
    /**
     * Fleet observability membership spec
     */
    fleetobservability?: Schema$FleetObservabilityMembershipSpec;
    /**
     * Identity Service-specific spec.
     */
    identityservice?: Schema$IdentityServiceMembershipSpec;
    /**
     * Anthos Service Mesh-specific spec
     */
    mesh?: Schema$ServiceMeshMembershipSpec;
    /**
     * Whether this per-Membership spec was inherited from a fleet-level default. This field can be updated by users by either overriding a Membership config (updated to USER implicitly) or setting to FLEET explicitly.
     */
    origin?: Schema$Origin;
    /**
     * Policy Controller spec.
     */
    policycontroller?: Schema$PolicyControllerMembershipSpec;
  }
  /**
   * MembershipFeatureState contains Feature status information for a single Membership.
   */
  export interface Schema$MembershipFeatureState {
    /**
     * Appdevexperience specific state.
     */
    appdevexperience?: Schema$AppDevExperienceFeatureState;
    /**
     * Config Management-specific state.
     */
    configmanagement?: Schema$ConfigManagementMembershipState;
    /**
     * Fleet observability membership state.
     */
    fleetobservability?: Schema$FleetObservabilityMembershipState;
    /**
     * Identity Service-specific state.
     */
    identityservice?: Schema$IdentityServiceMembershipState;
    /**
     * Metering-specific state.
     */
    metering?: Schema$MeteringMembershipState;
    /**
     * Policycontroller-specific state.
     */
    policycontroller?: Schema$PolicyControllerMembershipState;
    /**
     * Service Mesh-specific state.
     */
    servicemesh?: Schema$ServiceMeshMembershipState;
    /**
     * The high-level state of this Feature for a single membership.
     */
    state?: Schema$FeatureState;
  }
  /**
   * **Cloud Build**: Configurations for each Cloud Build enabled cluster.
   */
  export interface Schema$MembershipSpec {
    /**
     * Whether it is allowed to run the privileged builds on the cluster or not.
     */
    securityPolicy?: string | null;
    /**
     * Version of the cloud build software on the cluster.
     */
    version?: string | null;
  }
  /**
   * **Metering**: Per-Membership Feature State.
   */
  export interface Schema$MeteringMembershipState {
    /**
     * The time stamp of the most recent measurement of the number of vCPUs in the cluster.
     */
    lastMeasurementTime?: string | null;
    /**
     * The vCPUs capacity in the cluster according to the most recent measurement (1/1000 precision).
     */
    preciseLastMeasuredClusterVcpuCapacity?: number | null;
  }
  /**
   * **Multi-cluster Ingress**: The configuration for the MultiClusterIngress feature.
   */
  export interface Schema$MultiClusterIngressFeatureSpec {
    /**
     * Deprecated: This field will be ignored and should not be set. Customer's billing structure.
     */
    billing?: string | null;
    /**
     * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: `projects/foo-proj/locations/global/memberships/bar`
     */
    configMembership?: string | null;
  }
  /**
   * Namespace represents a namespace across the Fleet
   */
  export interface Schema$Namespace {
    /**
     * Output only. When the namespace was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the namespace was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Labels for this Namespace.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name for the namespace `projects/{project\}/locations/{location\}/namespaces/{namespace\}`
     */
    name?: string | null;
    /**
     * Optional. Namespace-level cluster namespace labels. These labels are applied to the related namespace of the member clusters bound to the parent Scope. Scope-level labels (`namespace_labels` in the Fleet Scope resource) take precedence over Namespace-level labels if they share a key. Keys and values must be Kubernetes-conformant.
     */
    namespaceLabels?: {[key: string]: string} | null;
    /**
     * Required. Scope associated with the namespace
     */
    scope?: string | null;
    /**
     * Output only. State of the namespace resource.
     */
    state?: Schema$NamespaceLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all namespace resources. If a namespace resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string | null;
    /**
     * Output only. When the namespace was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * NamespaceLifecycleState describes the state of a Namespace resource.
   */
  export interface Schema$NamespaceLifecycleState {
    /**
     * Output only. The current state of the Namespace resource.
     */
    code?: string | null;
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$Operation {
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * Output only. API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
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
   * Origin defines where this MembershipFeatureSpec originated from.
   */
  export interface Schema$Origin {
    /**
     * Type specifies which type of origin is set.
     */
    type?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
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
   * BundleInstallSpec is the specification configuration for a single managed bundle.
   */
  export interface Schema$PolicyControllerBundleInstallSpec {
    /**
     * The set of namespaces to be exempted from the bundle.
     */
    exemptedNamespaces?: string[] | null;
  }
  /**
   * Configuration for Policy Controller
   */
  export interface Schema$PolicyControllerHubConfig {
    /**
     * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
     */
    auditIntervalSeconds?: string | null;
    /**
     * The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used.
     */
    constraintViolationLimit?: string | null;
    /**
     * Map of deployment configs to deployments ("admission", "audit", "mutation').
     */
    deploymentConfigs?: {
      [key: string]: Schema$PolicyControllerPolicyControllerDeploymentConfig;
    } | null;
    /**
     * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
     */
    exemptableNamespaces?: string[] | null;
    /**
     * The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state.
     */
    installSpec?: string | null;
    /**
     * Logs all denies and dry run failures.
     */
    logDeniesEnabled?: boolean | null;
    /**
     * Monitoring specifies the configuration of monitoring.
     */
    monitoring?: Schema$PolicyControllerMonitoringConfig;
    /**
     * Enables the ability to mutate resources using Policy Controller.
     */
    mutationEnabled?: boolean | null;
    /**
     * Specifies the desired policy content on the cluster
     */
    policyContent?: Schema$PolicyControllerPolicyContentSpec;
    /**
     * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
     */
    referentialRulesEnabled?: boolean | null;
  }
  /**
   * **Policy Controller**: Configuration for a single cluster. Intended to parallel the PolicyController CR.
   */
  export interface Schema$PolicyControllerMembershipSpec {
    /**
     * Policy Controller configuration for the cluster.
     */
    policyControllerHubConfig?: Schema$PolicyControllerHubConfig;
    /**
     * Version of Policy Controller installed.
     */
    version?: string | null;
  }
  /**
   * **Policy Controller**: State for a single cluster.
   */
  export interface Schema$PolicyControllerMembershipState {
    /**
     * Currently these include (also serving as map keys): 1. "admission" 2. "audit" 3. "mutation"
     */
    componentStates?: {
      [key: string]: Schema$PolicyControllerOnClusterState;
    } | null;
    /**
     * The overall content state observed by the Hub Feature controller.
     */
    policyContentState?: Schema$PolicyControllerPolicyContentState;
    /**
     * The overall Policy Controller lifecycle state observed by the Hub Feature controller.
     */
    state?: string | null;
  }
  /**
   * MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
   */
  export interface Schema$PolicyControllerMonitoringConfig {
    /**
     * Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export.
     */
    backends?: string[] | null;
  }
  /**
   * OnClusterState represents the state of a sub-component of Policy Controller.
   */
  export interface Schema$PolicyControllerOnClusterState {
    /**
     * Surface potential errors or information logs.
     */
    details?: string | null;
    /**
     * The lifecycle state of this component.
     */
    state?: string | null;
  }
  /**
   * PolicyContentSpec defines the user's desired content configuration on the cluster.
   */
  export interface Schema$PolicyControllerPolicyContentSpec {
    /**
     * map of bundle name to BundleInstallSpec. The bundle name maps to the `bundleName` key in the `policycontroller.gke.io/constraintData` annotation on a constraint.
     */
    bundles?: {[key: string]: Schema$PolicyControllerBundleInstallSpec} | null;
    /**
     * Configures the installation of the Template Library.
     */
    templateLibrary?: Schema$PolicyControllerTemplateLibraryConfig;
  }
  /**
   * The state of the policy controller policy content
   */
  export interface Schema$PolicyControllerPolicyContentState {
    /**
     * The state of the any bundles included in the chosen version of the manifest
     */
    bundleStates?: {
      [key: string]: Schema$PolicyControllerOnClusterState;
    } | null;
    /**
     * The state of the referential data sync configuration. This could represent the state of either the syncSet object(s) or the config object, depending on the version of PoCo configured by the user.
     */
    referentialSyncConfigState?: Schema$PolicyControllerOnClusterState;
    /**
     * The state of the template library
     */
    templateLibraryState?: Schema$PolicyControllerOnClusterState;
  }
  /**
   * Deployment-specific configuration.
   */
  export interface Schema$PolicyControllerPolicyControllerDeploymentConfig {
    /**
     * Container resource requirements.
     */
    containerResources?: Schema$PolicyControllerResourceRequirements;
    /**
     * Pod affinity configuration.
     */
    podAffinity?: string | null;
    /**
     * Pod anti-affinity enablement.
     */
    podAntiAffinity?: boolean | null;
    /**
     * Pod tolerations of node taints.
     */
    podTolerations?: Schema$PolicyControllerToleration[];
    /**
     * Pod replica count.
     */
    replicaCount?: string | null;
  }
  /**
   * ResourceList contains container resource requirements.
   */
  export interface Schema$PolicyControllerResourceList {
    /**
     * CPU requirement expressed in Kubernetes resource units.
     */
    cpu?: string | null;
    /**
     * Memory requirement expressed in Kubernetes resource units.
     */
    memory?: string | null;
  }
  /**
   * ResourceRequirements describes the compute resource requirements.
   */
  export interface Schema$PolicyControllerResourceRequirements {
    /**
     * Limits describes the maximum amount of compute resources allowed for use by the running container.
     */
    limits?: Schema$PolicyControllerResourceList;
    /**
     * Requests describes the amount of compute resources reserved for the container by the kube-scheduler.
     */
    requests?: Schema$PolicyControllerResourceList;
  }
  /**
   * The config specifying which default library templates to install.
   */
  export interface Schema$PolicyControllerTemplateLibraryConfig {
    /**
     * Configures the manner in which the template library is installed on the cluster.
     */
    installation?: string | null;
  }
  /**
   * Toleration of a node taint.
   */
  export interface Schema$PolicyControllerToleration {
    /**
     * Matches a taint effect.
     */
    effect?: string | null;
    /**
     * Matches a taint key (not necessarily unique).
     */
    key?: string | null;
    /**
     * Matches a taint operator.
     */
    operator?: string | null;
    /**
     * Matches a taint value.
     */
    value?: string | null;
  }
  /**
   * RBACRoleBinding represents a rbacrolebinding across the Fleet
   */
  export interface Schema$RBACRoleBinding {
    /**
     * Output only. When the rbacrolebinding was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the rbacrolebinding was deleted.
     */
    deleteTime?: string | null;
    /**
     * group is the group, as seen by the kubernetes cluster.
     */
    group?: string | null;
    /**
     * Optional. Labels for this RBACRolebinding.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name for the rbacrolebinding `projects/{project\}/locations/{location\}/namespaces/{namespace\}/rbacrolebindings/{rbacrolebinding\}` or `projects/{project\}/locations/{location\}/memberships/{membership\}/rbacrolebindings/{rbacrolebinding\}`
     */
    name?: string | null;
    /**
     * Required. Role to bind to the principal
     */
    role?: Schema$Role;
    /**
     * Output only. State of the rbacrolebinding resource.
     */
    state?: Schema$RBACRoleBindingLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all rbacrolebinding resources. If a rbacrolebinding resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string | null;
    /**
     * Output only. When the rbacrolebinding was last updated.
     */
    updateTime?: string | null;
    /**
     * user is the name of the user as seen by the kubernetes cluster, example "alice" or "alice@domain.tld"
     */
    user?: string | null;
  }
  /**
   * RBACRoleBindingLifecycleState describes the state of a RbacRoleBinding resource.
   */
  export interface Schema$RBACRoleBindingLifecycleState {
    /**
     * Output only. The current state of the rbacrolebinding resource.
     */
    code?: string | null;
  }
  /**
   * Role is the type for Kubernetes roles
   */
  export interface Schema$Role {
    /**
     * predefined_role is the Kubernetes default role to use
     */
    predefinedRole?: string | null;
  }
  /**
   * Scope represents a Scope in a Fleet.
   */
  export interface Schema$Scope {
    /**
     * If true, all Memberships in the Fleet bind to this Scope.
     */
    allMemberships?: boolean | null;
    /**
     * Output only. When the scope was created.
     */
    createTime?: string | null;
    /**
     * Output only. When the scope was deleted.
     */
    deleteTime?: string | null;
    /**
     * Optional. Labels for this Scope.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The resource name for the scope `projects/{project\}/locations/{location\}/scopes/{scope\}`
     */
    name?: string | null;
    /**
     * Optional. Scope-level cluster namespace labels. For the member clusters bound to the Scope, these labels are applied to each namespace under the Scope. Scope-level labels take precedence over Namespace-level labels (`namespace_labels` in the Fleet Namespace resource) if they share a key. Keys and values must be Kubernetes-conformant.
     */
    namespaceLabels?: {[key: string]: string} | null;
    /**
     * Output only. State of the scope resource.
     */
    state?: Schema$ScopeLifecycleState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all scope resources. If a scope resource is deleted and another resource with the same name is created, it gets a different uid.
     */
    uid?: string | null;
    /**
     * Output only. When the scope was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * ScopeFeatureSpec contains feature specs for a fleet scope.
   */
  export interface Schema$ScopeFeatureSpec {}
  /**
   * ScopeFeatureState contains Scope-wide Feature status information.
   */
  export interface Schema$ScopeFeatureState {
    /**
     * Output only. The "running state" of the Feature in this Scope.
     */
    state?: Schema$FeatureState;
  }
  /**
   * ScopeLifecycleState describes the state of a Scope resource.
   */
  export interface Schema$ScopeLifecycleState {
    /**
     * Output only. The current state of the scope resource.
     */
    code?: string | null;
  }
  /**
   * Status of control plane management.
   */
  export interface Schema$ServiceMeshControlPlaneManagement {
    /**
     * Explanation of state.
     */
    details?: Schema$ServiceMeshStatusDetails[];
    /**
     * LifecycleState of control plane management.
     */
    state?: string | null;
  }
  /**
   * Status of data plane management. Only reported per-member.
   */
  export interface Schema$ServiceMeshDataPlaneManagement {
    /**
     * Explanation of the status.
     */
    details?: Schema$ServiceMeshStatusDetails[];
    /**
     * Lifecycle status of data plane management.
     */
    state?: string | null;
  }
  /**
   * **Service Mesh**: Spec for a single Membership for the servicemesh feature
   */
  export interface Schema$ServiceMeshMembershipSpec {
    /**
     * Deprecated: use `management` instead Enables automatic control plane management.
     */
    controlPlane?: string | null;
    /**
     * Enables automatic Service Mesh management.
     */
    management?: string | null;
  }
  /**
   * **Service Mesh**: State for a single Membership, as analyzed by the Service Mesh Hub Controller.
   */
  export interface Schema$ServiceMeshMembershipState {
    /**
     * Output only. Status of control plane management
     */
    controlPlaneManagement?: Schema$ServiceMeshControlPlaneManagement;
    /**
     * Output only. Status of data plane management.
     */
    dataPlaneManagement?: Schema$ServiceMeshDataPlaneManagement;
  }
  /**
   * Structured and human-readable details for a status.
   */
  export interface Schema$ServiceMeshStatusDetails {
    /**
     * A machine-readable code that further describes a broad status.
     */
    code?: string | null;
    /**
     * Human-readable explanation of code.
     */
    details?: string | null;
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
   * Status specifies state for the subcomponent.
   */
  export interface Schema$Status {
    /**
     * Code specifies AppDevExperienceFeature's subcomponent ready state.
     */
    code?: string | null;
    /**
     * Description is populated if Code is Failed, explaining why it has failed.
     */
    description?: string | null;
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

  export class Resource$Organizations {
    context: APIRequestContext;
    locations: Resource$Organizations$Locations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.locations = new Resource$Organizations$Locations(this.context);
    }
  }

  export class Resource$Organizations$Locations {
    context: APIRequestContext;
    fleets: Resource$Organizations$Locations$Fleets;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.fleets = new Resource$Organizations$Locations$Fleets(this.context);
    }
  }

  export class Resource$Organizations$Locations$Fleets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Returns all fleets within an organization or a project that the caller has access to.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Organizations$Locations$Fleets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Fleets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFleetsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Fleets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Fleets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListFleetsResponse>,
      callback: BodyResponseCallback<Schema$ListFleetsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Fleets$List,
      callback: BodyResponseCallback<Schema$ListFleetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFleetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Fleets$List
        | BodyResponseCallback<Schema$ListFleetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFleetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFleetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFleetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Fleets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Fleets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/fleets').replace(
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
        createAPIRequest<Schema$ListFleetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFleetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Fleets$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The organization or project to list for Fleets under, in the format `organizations/x/locations/x` or `projects/x/locations/x`.
     */
    parent?: string;
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
    features: Resource$Projects$Locations$Features;
    fleets: Resource$Projects$Locations$Fleets;
    memberships: Resource$Projects$Locations$Memberships;
    namespaces: Resource$Projects$Locations$Namespaces;
    operations: Resource$Projects$Locations$Operations;
    scopes: Resource$Projects$Locations$Scopes;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.features = new Resource$Projects$Locations$Features(this.context);
      this.fleets = new Resource$Projects$Locations$Fleets(this.context);
      this.memberships = new Resource$Projects$Locations$Memberships(
        this.context
      );
      this.namespaces = new Resource$Projects$Locations$Namespaces(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.scopes = new Resource$Projects$Locations$Scopes(this.context);
    }

    /**
     * Gets information about a location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
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
        | BodyResponseCallback<Schema$Location>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Location> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Location>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
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

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/locations').replace(
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

  export interface Params$Resource$Projects$Locations$Get
    extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
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

  export class Resource$Projects$Locations$Features {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Adds a new Feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Features$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Features$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Features$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Features$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Features$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Features$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/features').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Removes a Feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Features$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Features$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Features$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Features$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Features$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Features$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Gets details of a single Feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Features$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Features$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Feature>;
    get(
      params: Params$Resource$Projects$Locations$Features$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Features$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Feature>,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Features$Get,
      callback: BodyResponseCallback<Schema$Feature>
    ): void;
    get(callback: BodyResponseCallback<Schema$Feature>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Get
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Feature>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Feature> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Features$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Feature>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Feature>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Features$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Features$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(
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
     * Lists Features in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Features$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Features$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFeaturesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Features$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Features$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListFeaturesResponse>,
      callback: BodyResponseCallback<Schema$ListFeaturesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Features$List,
      callback: BodyResponseCallback<Schema$ListFeaturesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFeaturesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$List
        | BodyResponseCallback<Schema$ListFeaturesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFeaturesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFeaturesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFeaturesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Features$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/features').replace(
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
        createAPIRequest<Schema$ListFeaturesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFeaturesResponse>(parameters);
      }
    }

    /**
     * Updates an existing Feature.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Features$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Features$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Features$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Features$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Features$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Features$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Features$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Features$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Features$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Features$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Features$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Features$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Features$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Features$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Features$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Features$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Features$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Features$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Features$Create
    extends StandardParameters {
    /**
     * The ID of the feature to create.
     */
    featureId?: string;
    /**
     * Required. The parent (project and location) where the Feature will be created. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Feature;
  }
  export interface Params$Resource$Projects$Locations$Features$Delete
    extends StandardParameters {
    /**
     * If set to true, the delete will ignore any outstanding resources for this Feature (that is, `FeatureState.has_resources` is set to true). These resources will NOT be cleaned up or modified in any way.
     */
    force?: boolean;
    /**
     * Required. The Feature resource name in the format `projects/x/locations/x/features/x`.
     */
    name?: string;
    /**
     * Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Features$Get
    extends StandardParameters {
    /**
     * Required. The Feature resource name in the format `projects/x/locations/x/features/x`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Features$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Features$List
    extends StandardParameters {
    /**
     * Lists Features that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "servicemesh" in project "foo-proj": name = "projects/foo-proj/locations/global/features/servicemesh" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar
     */
    filter?: string;
    /**
     * One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     */
    orderBy?: string;
    /**
     * When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Features$Patch
    extends StandardParameters {
    /**
     * Required. The Feature resource name in the format `projects/x/locations/x/features/x`.
     */
    name?: string;
    /**
     * A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Mask of fields to update.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Feature;
  }
  export interface Params$Resource$Projects$Locations$Features$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Features$Testiampermissions
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

  export class Resource$Projects$Locations$Fleets {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a fleet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Fleets$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Fleets$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Fleets$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Fleets$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Fleets$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fleets$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fleets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fleets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/fleets').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Removes a Fleet. There must be no memberships remaining in the Fleet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Fleets$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Fleets$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Fleets$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Fleets$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Fleets$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fleets$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fleets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fleets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a fleet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Fleets$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Fleets$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Fleet>;
    get(
      params: Params$Resource$Projects$Locations$Fleets$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Fleets$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Fleet>,
      callback: BodyResponseCallback<Schema$Fleet>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Fleets$Get,
      callback: BodyResponseCallback<Schema$Fleet>
    ): void;
    get(callback: BodyResponseCallback<Schema$Fleet>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fleets$Get
        | BodyResponseCallback<Schema$Fleet>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Fleet>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Fleet>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Fleet> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fleets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fleets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Fleet>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Fleet>(parameters);
      }
    }

    /**
     * Returns all fleets within an organization or a project that the caller has access to.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Fleets$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Fleets$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListFleetsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Fleets$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Fleets$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListFleetsResponse>,
      callback: BodyResponseCallback<Schema$ListFleetsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Fleets$List,
      callback: BodyResponseCallback<Schema$ListFleetsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListFleetsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fleets$List
        | BodyResponseCallback<Schema$ListFleetsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListFleetsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListFleetsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListFleetsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fleets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fleets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/fleets').replace(
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
        createAPIRequest<Schema$ListFleetsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListFleetsResponse>(parameters);
      }
    }

    /**
     * Updates a fleet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Fleets$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Fleets$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Fleets$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Fleets$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Fleets$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Fleets$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Fleets$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Fleets$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Fleets$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the Fleet will be created. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Fleet;
  }
  export interface Params$Resource$Projects$Locations$Fleets$Delete
    extends StandardParameters {
    /**
     * Required. The Fleet resource name in the format `projects/x/locations/x/fleets/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Fleets$Get
    extends StandardParameters {
    /**
     * Required. The Fleet resource name in the format `projects/x/locations/x/fleets/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Fleets$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of fleets to return. The service may return fewer than this value. If unspecified, at most 200 fleets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListFleets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFleets` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The organization or project to list for Fleets under, in the format `organizations/x/locations/x` or `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Fleets$Patch
    extends StandardParameters {
    /**
     * Output only. The full, unique resource name of this fleet in the format of `projects/{project\}/locations/{location\}/fleets/{fleet\}`. Each Google Cloud project can have at most one fleet resource, named "default".
     */
    name?: string;
    /**
     * Required. The fields to be updated;
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Fleet;
  }

  export class Resource$Projects$Locations$Memberships {
    context: APIRequestContext;
    bindings: Resource$Projects$Locations$Memberships$Bindings;
    rbacrolebindings: Resource$Projects$Locations$Memberships$Rbacrolebindings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.bindings = new Resource$Projects$Locations$Memberships$Bindings(
        this.context
      );
      this.rbacrolebindings =
        new Resource$Projects$Locations$Memberships$Rbacrolebindings(
          this.context
        );
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Memberships$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Memberships$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(
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
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Memberships$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Memberships$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Memberships$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Memberships$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Memberships$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Memberships$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Memberships$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Memberships$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Memberships$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Memberships$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Memberships$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Memberships$Testiampermissions
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

  export class Resource$Projects$Locations$Memberships$Bindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a MembershipBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Memberships$Bindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Bindings$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Bindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Bindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/bindings').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a MembershipBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Memberships$Bindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Bindings$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Bindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Bindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a MembershipBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Memberships$Bindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$MembershipBinding>;
    get(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$MembershipBinding>,
      callback: BodyResponseCallback<Schema$MembershipBinding>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Get,
      callback: BodyResponseCallback<Schema$MembershipBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$MembershipBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Bindings$Get
        | BodyResponseCallback<Schema$MembershipBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$MembershipBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$MembershipBinding>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$MembershipBinding>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Bindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Bindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$MembershipBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$MembershipBinding>(parameters);
      }
    }

    /**
     * Lists MembershipBindings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Memberships$Bindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMembershipBindingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListMembershipBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$List,
      callback: BodyResponseCallback<Schema$ListMembershipBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMembershipBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Bindings$List
        | BodyResponseCallback<Schema$ListMembershipBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMembershipBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMembershipBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMembershipBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Bindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Bindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/bindings').replace(
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
        createAPIRequest<Schema$ListMembershipBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMembershipBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a MembershipBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Memberships$Bindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Bindings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Bindings$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Bindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Bindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Memberships$Bindings$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the MembershipBinding.
     */
    membershipBindingId?: string;
    /**
     * Required. The parent (project and location) where the MembershipBinding will be created. Specified in the format `projects/x/locations/x/memberships/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MembershipBinding;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Bindings$Delete
    extends StandardParameters {
    /**
     * Required. The MembershipBinding resource name in the format `projects/x/locations/x/memberships/x/bindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Bindings$Get
    extends StandardParameters {
    /**
     * Required. The MembershipBinding resource name in the format `projects/x/locations/x/memberships/x/bindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Bindings$List
    extends StandardParameters {
    /**
     * Optional. Lists MembershipBindings that match the filter expression, following the syntax outlined in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListMembershipBindings` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent Membership for which the MembershipBindings will be listed. Specified in the format `projects/x/locations/x/memberships/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Bindings$Patch
    extends StandardParameters {
    /**
     * The resource name for the membershipbinding itself `projects/{project\}/locations/{location\}/memberships/{membership\}/bindings/{membershipbinding\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$MembershipBinding;
  }

  export class Resource$Projects$Locations$Memberships$Rbacrolebindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Membership RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/rbacrolebindings').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a Membership RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Generates a YAML of the RBAC policies for the specified RoleBinding and its associated impersonation resources.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    generateMembershipRBACRoleBindingYAML(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    generateMembershipRBACRoleBindingYAML(
      params?: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>;
    generateMembershipRBACRoleBindingYAML(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    generateMembershipRBACRoleBindingYAML(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>,
      callback: BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
    ): void;
    generateMembershipRBACRoleBindingYAML(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml,
      callback: BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
    ): void;
    generateMembershipRBACRoleBindingYAML(
      callback: BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
    ): void;
    generateMembershipRBACRoleBindingYAML(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml
        | BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/v1beta/{+parent}/rbacrolebindings:generateMembershipRBACRoleBindingYAML'
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
        createAPIRequest<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GenerateMembershipRBACRoleBindingYAMLResponse>(
          parameters
        );
      }
    }

    /**
     * Returns the details of a Membership RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RBACRoleBinding>;
    get(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RBACRoleBinding>,
      callback: BodyResponseCallback<Schema$RBACRoleBinding>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get,
      callback: BodyResponseCallback<Schema$RBACRoleBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$RBACRoleBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RBACRoleBinding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RBACRoleBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RBACRoleBinding>(parameters);
      }
    }

    /**
     * Lists all Membership RBACRoleBindings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListMembershipRBACRoleBindingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List,
      callback: BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List
        | BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListMembershipRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListMembershipRBACRoleBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/rbacrolebindings').replace(
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
        createAPIRequest<Schema$ListMembershipRBACRoleBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListMembershipRBACRoleBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Membership RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/x/locations/x/memberships/x`.
     */
    parent?: string;
    /**
     * Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    rbacrolebindingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Delete
    extends StandardParameters {
    /**
     * Required. The RBACRoleBinding resource name in the format `projects/x/locations/x/memberships/x/rbacrolebindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Generatemembershiprbacrolebindingyaml
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/x/locations/x/memberships/x`.
     */
    parent?: string;
    /**
     * Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    rbacrolebindingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Get
    extends StandardParameters {
    /**
     * Required. The RBACRoleBinding resource name in the format `projects/x/locations/x/memberships/x/rbacrolebindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$List
    extends StandardParameters {
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListMembershipRBACRoleBindings` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/x/locations/x/memberships/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Memberships$Rbacrolebindings$Patch
    extends StandardParameters {
    /**
     * The resource name for the rbacrolebinding `projects/{project\}/locations/{location\}/namespaces/{namespace\}/rbacrolebindings/{rbacrolebinding\}` or `projects/{project\}/locations/{location\}/memberships/{membership\}/rbacrolebindings/{rbacrolebinding\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }

  export class Resource$Projects$Locations$Namespaces {
    context: APIRequestContext;
    rbacrolebindings: Resource$Projects$Locations$Namespaces$Rbacrolebindings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.rbacrolebindings =
        new Resource$Projects$Locations$Namespaces$Rbacrolebindings(
          this.context
        );
    }

    /**
     * Creates a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Namespaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/namespaces').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Namespaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Namespaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Namespace>;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Namespace>,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Get,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Namespace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Get
        | BodyResponseCallback<Schema$Namespace>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Namespace>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Namespace>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Namespace> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Namespace>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Namespace>(parameters);
      }
    }

    /**
     * Lists fleet namespaces.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Namespaces$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Namespaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListNamespacesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListNamespacesResponse>,
      callback: BodyResponseCallback<Schema$ListNamespacesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$List,
      callback: BodyResponseCallback<Schema$ListNamespacesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListNamespacesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$List
        | BodyResponseCallback<Schema$ListNamespacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListNamespacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListNamespacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListNamespacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/namespaces').replace(
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
        createAPIRequest<Schema$ListNamespacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListNamespacesResponse>(parameters);
      }
    }

    /**
     * Updates a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Namespaces$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Namespaces$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Namespaces$Create
    extends StandardParameters {
    /**
     * Required. Client chosen ID for the Namespace. `namespace_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    namespaceId?: string;
    /**
     * Required. The parent (project and location) where the Namespace will be created. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Namespace;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Delete
    extends StandardParameters {
    /**
     * Required. The Namespace resource name in the format `projects/x/locations/x/namespaces/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Get
    extends StandardParameters {
    /**
     * Required. The Namespace resource name in the format `projects/x/locations/x/namespaces/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$List
    extends StandardParameters {
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Patch
    extends StandardParameters {
    /**
     * The resource name for the namespace `projects/{project\}/locations/{location\}/namespaces/{namespace\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Namespace;
  }

  export class Resource$Projects$Locations$Namespaces$Rbacrolebindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/rbacrolebindings').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RBACRoleBinding>;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RBACRoleBinding>,
      callback: BodyResponseCallback<Schema$RBACRoleBinding>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get,
      callback: BodyResponseCallback<Schema$RBACRoleBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$RBACRoleBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RBACRoleBinding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RBACRoleBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RBACRoleBinding>(parameters);
      }
    }

    /**
     * Lists RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListRBACRoleBindingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List,
      callback: BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List
        | BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListRBACRoleBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/rbacrolebindings').replace(
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
        createAPIRequest<Schema$ListRBACRoleBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRBACRoleBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/x/locations/x/namespaces/x`.
     */
    parent?: string;
    /**
     * Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    rbacrolebindingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Delete
    extends StandardParameters {
    /**
     * Required. The RBACRoleBinding resource name in the format `projects/x/locations/x/namespaces/x/rbacrolebindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Get
    extends StandardParameters {
    /**
     * Required. The RBACRoleBinding resource name in the format `projects/x/locations/x/namespaces/x/rbacrolebindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$List
    extends StandardParameters {
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListRBACRoleBindings` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/x/locations/x/namespaces/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Namespaces$Rbacrolebindings$Patch
    extends StandardParameters {
    /**
     * The resource name for the rbacrolebinding `projects/{project\}/locations/{location\}/namespaces/{namespace\}/rbacrolebindings/{rbacrolebinding\}` or `projects/{project\}/locations/{location\}/memberships/{membership\}/rbacrolebindings/{rbacrolebinding\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}:cancel').replace(
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
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Empty> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListOperationsResponse>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}/operations').replace(
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
        createAPIRequest<Schema$ListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List
    extends StandardParameters {
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

  export class Resource$Projects$Locations$Scopes {
    context: APIRequestContext;
    namespaces: Resource$Projects$Locations$Scopes$Namespaces;
    rbacrolebindings: Resource$Projects$Locations$Scopes$Rbacrolebindings;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.namespaces = new Resource$Projects$Locations$Scopes$Namespaces(
        this.context
      );
      this.rbacrolebindings =
        new Resource$Projects$Locations$Scopes$Rbacrolebindings(this.context);
    }

    /**
     * Creates a Scope.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Scopes$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Scopes$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/scopes').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a Scope.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Scopes$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a Scope.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Scopes$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Scopes$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Scope>;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Scope>,
      callback: BodyResponseCallback<Schema$Scope>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Get,
      callback: BodyResponseCallback<Schema$Scope>
    ): void;
    get(callback: BodyResponseCallback<Schema$Scope>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Get
        | BodyResponseCallback<Schema$Scope>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Scope>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Scope>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Scope> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Scope>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Scope>(parameters);
      }
    }

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Scopes$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Getiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Getiampolicy
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
        {}) as Params$Resource$Projects$Locations$Scopes$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:getIamPolicy').replace(
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
     * Lists Scopes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Scopes$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Scopes$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScopesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Scopes$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scopes$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListScopesResponse>,
      callback: BodyResponseCallback<Schema$ListScopesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scopes$List,
      callback: BodyResponseCallback<Schema$ListScopesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListScopesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$List
        | BodyResponseCallback<Schema$ListScopesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScopesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScopesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListScopesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/scopes').replace(
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
        createAPIRequest<Schema$ListScopesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScopesResponse>(parameters);
      }
    }

    /**
     * Updates a scopes.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Scopes$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Scopes$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$Policy>,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Scopes$Setiampolicy,
      callback: BodyResponseCallback<Schema$Policy>
    ): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Setiampolicy
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
        {}) as Params$Resource$Projects$Locations$Scopes$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:setIamPolicy').replace(
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
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Scopes$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Scopes$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Scopes$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Scopes$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Scopes$Testiampermissions,
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Testiampermissions
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
        {}) as Params$Resource$Projects$Locations$Scopes$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+resource}:testIamPermissions').replace(
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

  export interface Params$Resource$Projects$Locations$Scopes$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the Scope will be created. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;
    /**
     * Required. Client chosen ID for the Scope. `scope_id` must be a ????
     */
    scopeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Scope;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Delete
    extends StandardParameters {
    /**
     * Required. The Scope resource name in the format `projects/x/locations/x/scopes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Get
    extends StandardParameters {
    /**
     * Required. The Scope resource name in the format `projects/x/locations/x/scopes/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Scopes$List
    extends StandardParameters {
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListScopes` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Scope will be listed. Specified in the format `projects/x/locations/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Patch
    extends StandardParameters {
    /**
     * The resource name for the scope `projects/{project\}/locations/{location\}/scopes/{scope\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Scope;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Setiampolicy
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
  export interface Params$Resource$Projects$Locations$Scopes$Testiampermissions
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

  export class Resource$Projects$Locations$Scopes$Namespaces {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Scopes$Namespaces$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Namespaces$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Namespaces$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Namespaces$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/namespaces').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Scopes$Namespaces$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Namespaces$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Namespaces$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Namespaces$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Scopes$Namespaces$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Namespace>;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Namespace>,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Get,
      callback: BodyResponseCallback<Schema$Namespace>
    ): void;
    get(callback: BodyResponseCallback<Schema$Namespace>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Namespaces$Get
        | BodyResponseCallback<Schema$Namespace>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Namespace>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Namespace>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Namespace> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Namespaces$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Scopes$Namespaces$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Namespace>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Namespace>(parameters);
      }
    }

    /**
     * Lists fleet namespaces.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Scopes$Namespaces$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScopeNamespacesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScopeNamespacesResponse>,
      callback: BodyResponseCallback<Schema$ListScopeNamespacesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$List,
      callback: BodyResponseCallback<Schema$ListScopeNamespacesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListScopeNamespacesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Namespaces$List
        | BodyResponseCallback<Schema$ListScopeNamespacesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScopeNamespacesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScopeNamespacesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListScopeNamespacesResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Namespaces$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Namespaces$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/namespaces').replace(
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
        createAPIRequest<Schema$ListScopeNamespacesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScopeNamespacesResponse>(parameters);
      }
    }

    /**
     * Updates a fleet namespace.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Scopes$Namespaces$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Namespaces$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Namespaces$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Namespaces$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Namespaces$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Scopes$Namespaces$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the Namespace will be created. Specified in the format `projects/x/locations/x/scopes/x`.
     */
    parent?: string;
    /**
     * Required. Client chosen ID for the Namespace. `namespace_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    scopeNamespaceId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Namespace;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Namespaces$Delete
    extends StandardParameters {
    /**
     * Required. The Namespace resource name in the format `projects/x/locations/x/scopes/x/namespaces/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Namespaces$Get
    extends StandardParameters {
    /**
     * Required. The Namespace resource name in the format `projects/x/locations/x/scopes/x/namespaces/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Namespaces$List
    extends StandardParameters {
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/x/locations/x/scopes/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Namespaces$Patch
    extends StandardParameters {
    /**
     * The resource name for the namespace `projects/{project\}/locations/{location\}/namespaces/{namespace\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Namespace;
  }

  export class Resource$Projects$Locations$Scopes$Rbacrolebindings {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a Scope RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/rbacrolebindings').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a Scope RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the details of a Scope RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$RBACRoleBinding>;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RBACRoleBinding>,
      callback: BodyResponseCallback<Schema$RBACRoleBinding>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get,
      callback: BodyResponseCallback<Schema$RBACRoleBinding>
    ): void;
    get(callback: BodyResponseCallback<Schema$RBACRoleBinding>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RBACRoleBinding>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$RBACRoleBinding> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RBACRoleBinding>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RBACRoleBinding>(parameters);
      }
    }

    /**
     * Lists all Scope RBACRoleBindings.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListScopeRBACRoleBindingsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>,
      callback: BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List,
      callback: BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List
        | BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListScopeRBACRoleBindingsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListScopeRBACRoleBindingsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+parent}/rbacrolebindings').replace(
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
        createAPIRequest<Schema$ListScopeRBACRoleBindingsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListScopeRBACRoleBindingsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates a Scope RBACRoleBinding.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Operation>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$Operation> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://gkehub.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Create
    extends StandardParameters {
    /**
     * Required. The parent (project and location) where the RBACRoleBinding will be created. Specified in the format `projects/x/locations/x/scopes/x`.
     */
    parent?: string;
    /**
     * Required. Client chosen ID for the RBACRoleBinding. `rbacrolebinding_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    rbacrolebindingId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Delete
    extends StandardParameters {
    /**
     * Required. The RBACRoleBinding resource name in the format `projects/x/locations/x/scopes/x/rbacrolebindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Get
    extends StandardParameters {
    /**
     * Required. The RBACRoleBinding resource name in the format `projects/x/locations/x/scopes/x/rbacrolebindings/x`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$List
    extends StandardParameters {
    /**
     * Optional. When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     */
    pageSize?: number;
    /**
     * Optional. Token returned by previous call to `ListScopeRBACRoleBindings` which specifies the position in the list from where to continue listing the resources.
     */
    pageToken?: string;
    /**
     * Required. The parent (project and location) where the Features will be listed. Specified in the format `projects/x/locations/x/scopes/x`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Scopes$Rbacrolebindings$Patch
    extends StandardParameters {
    /**
     * The resource name for the rbacrolebinding `projects/{project\}/locations/{location\}/namespaces/{namespace\}/rbacrolebindings/{rbacrolebinding\}` or `projects/{project\}/locations/{location\}/memberships/{membership\}/rbacrolebindings/{rbacrolebinding\}`
     */
    name?: string;
    /**
     * Required. The fields to be updated.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RBACRoleBinding;
  }
}
