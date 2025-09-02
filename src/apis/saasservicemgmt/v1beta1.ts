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

export namespace saasservicemgmt_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
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
   * SaaS Runtime API
   *
   * Model, deploy, and operate your SaaS at scale.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const saasservicemgmt = google.saasservicemgmt('v1beta1');
   * ```
   */
  export class Saasservicemgmt {
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
   * Represents the aggregation of a set of population of like records by a certain group. For example, a collection of unit counts can be aggregated and grouped by their state.
   */
  export interface Schema$Aggregate {
    /**
     * Required. Number of records in the group.
     */
    count?: number | null;
    /**
     * Required. Group by which to aggregate.
     */
    group?: string | null;
  }
  /**
   * Blueprints are OCI Images that contain all of the artifacts needed to provision a unit. Metadata such as, type of the engine used to actuate the blueprint (e.g. terraform, helm etc) and version will come from the image manifest. If the hostname is omitted, it will be assumed to be the regional path to Artifact Registry (eg. us-east1-docker.pkg.dev).
   */
  export interface Schema$Blueprint {
    /**
     * Output only. Type of the engine used to actuate the blueprint. e.g. terraform, helm etc.
     */
    engine?: string | null;
    /**
     * Optional. Immutable. URI to a blueprint used by the Unit (required unless unitKind or release is set).
     */
    package?: string | null;
    /**
     * Output only. Version metadata if present on the blueprint.
     */
    version?: string | null;
  }
  /**
   * Dependency represent a single dependency with another unit kind by alias.
   */
  export interface Schema$Dependency {
    /**
     * Required. An alias for the dependency. Used for input variable mapping.
     */
    alias?: string | null;
    /**
     * Required. Immutable. The unit kind of the dependency.
     */
    unitKind?: string | null;
  }
  /**
   * Deprovision is the unit operation that deprovision the underlying resources represented by a Unit. Can only execute if the Unit is currently provisioned.
   */
  export interface Schema$Deprovision {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * The configuration for error budget. If the number of failed units exceeds max(allowed_count, allowed_ratio * total_units), the rollout will be paused.
   */
  export interface Schema$ErrorBudget {
    /**
     * Optional. The maximum number of failed units allowed in a location without pausing the rollout.
     */
    allowedCount?: number | null;
    /**
     * Optional. The maximum percentage of units allowed to fail (0, 100] within a location without pausing the rollout.
     */
    allowedPercentage?: number | null;
  }
  /**
   * Output variables whose values will be passed on to dependencies
   */
  export interface Schema$FromMapping {
    /**
     * Required. Alias of the dependency that the outputVariable will pass its value to
     */
    dependency?: string | null;
    /**
     * Required. Name of the outputVariable on the dependency
     */
    outputVariable?: string | null;
  }
  /**
   * A resource that represents a Google Cloud location.
   */
  export interface Schema$GoogleCloudLocationLocation {
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
   * The response message for Locations.ListLocations.
   */
  export interface Schema$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Schema$GoogleCloudLocationLocation[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
  }
  /**
   * The response structure for the ListReleases method.
   */
  export interface Schema$ListReleasesResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListReleases call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting releases.
     */
    releases?: Schema$Release[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListRolloutKinds method.
   */
  export interface Schema$ListRolloutKindsResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListRolloutKinds call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting rollout kinds.
     */
    rolloutKinds?: Schema$RolloutKind[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListRollouts method.
   */
  export interface Schema$ListRolloutsResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListRollouts call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting rollouts.
     */
    rollouts?: Schema$Rollout[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListSaas method.
   */
  export interface Schema$ListSaasResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListSaas call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting saas.
     */
    saas?: Schema$Saas[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListTenants method.
   */
  export interface Schema$ListTenantsResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListTenants call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting tenants.
     */
    tenants?: Schema$Tenant[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListUnitKinds method.
   */
  export interface Schema$ListUnitKindsResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListUnitKinds call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting unit kinds.
     */
    unitKinds?: Schema$UnitKind[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListUnitOperations method.
   */
  export interface Schema$ListUnitOperationsResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListUnitOperations call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting unit operations.
     */
    unitOperations?: Schema$UnitOperation[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * The response structure for the ListUnits method.
   */
  export interface Schema$ListUnitsResponse {
    /**
     * If present, the next page token can be provided to a subsequent ListUnits call to list the next page. If empty, there are no more pages.
     */
    nextPageToken?: string | null;
    /**
     * The resulting units.
     */
    units?: Schema$Unit[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Location information that the service is available in.
   */
  export interface Schema$Location {
    /**
     * Optional. Name of location.
     */
    name?: string | null;
  }
  /**
   * Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future.
   */
  export interface Schema$MaintenanceSettings {
    /**
     * Optional. If present, it fixes the release on the unit until the given time; i.e. changes to the release field will be rejected. Rollouts should and will also respect this by not requesting an upgrade in the first place.
     */
    pinnedUntilTime?: string | null;
  }
  /**
   * Provision is the unit operation that provision the underlying resources represented by a Unit. Can only execute if the Unit is not currently provisioned.
   */
  export interface Schema$Provision {
    /**
     * Optional. Set of input variables. Maximum 100. (optional)
     */
    inputVariables?: Schema$UnitVariable[];
    /**
     * Optional. Reference to the Release object to use for the Unit. (optional).
     */
    release?: string | null;
  }
  /**
   * A new version to be propagated and deployed to units. This includes pointers to packaged blueprints for actuation (e.g Helm or Terraform configuration packages) via artifact registry.
   */
  export interface Schema$Release {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Blueprints are OCI Images that contain all of the artifacts needed to provision a unit.
     */
    blueprint?: Schema$Blueprint;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. Mapping of input variables to default values. Maximum 100
     */
    inputVariableDefaults?: Schema$UnitVariable[];
    /**
     * Optional. Output only. List of input variables declared on the blueprint and can be present with their values on the unit spec
     */
    inputVariables?: Schema$UnitVariable[];
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/releases/{release\}"
     */
    name?: string | null;
    /**
     * Optional. Output only. List of output variables declared on the blueprint and can be present with their values on the unit status
     */
    outputVariables?: Schema$UnitVariable[];
    /**
     * Optional. Set of requirements to be fulfilled on the Unit when using this Release.
     */
    releaseRequirements?: Schema$ReleaseRequirements;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Required. Immutable. Reference to the UnitKind this Release corresponds to (required and immutable once created).
     */
    unitKind?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * Set of requirements to be fulfilled on the Unit when using this Release.
   */
  export interface Schema$ReleaseRequirements {
    /**
     * Optional. A list of releases from which a unit can be upgraded to this one (optional). If left empty no constraints will be applied. When provided, unit upgrade requests to this release will check and enforce this constraint.
     */
    upgradeableFromReleases?: string[] | null;
  }
  /**
   * Represents a single rollout execution and its results
   */
  export interface Schema$Rollout {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Requested change to the execution of this rollout. Default RolloutControl.action is ROLLOUT_ACTION_RUN meaning the rollout will be executed to completion while progressing through all natural Rollout States (such as RUNNING -\> SUCCEEDED or RUNNING -\> FAILED). Requests can only be made when the Rollout is in a non-terminal state.
     */
    control?: Schema$RolloutControl;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Output only. The time when the rollout finished execution (regardless of success, failure, or cancellation). Will be empty if the rollout hasn't finished yet. Once set, the rollout is in terminal state and all the results are final.
     */
    endTime?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rollout/{rollout_id\}"
     */
    name?: string | null;
    /**
     * Optional. Output only. The direct parent rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rollouts/{rollout_id\}"
     */
    parentRollout?: string | null;
    /**
     * Optional. Immutable. Name of the Release that gets rolled out to target Units. Required if no other type of release is specified.
     */
    release?: string | null;
    /**
     * Optional. Immutable. Name of the RolloutKind this rollout is stemming from and adhering to.
     */
    rolloutKind?: string | null;
    /**
     * Optional. The strategy used for executing this Rollout. This strategy will override whatever strategy is specified in the RolloutType. If not specified on creation, the strategy from RolloutType will be used. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the targeted UnitKind's Saas Locations.
     */
    rolloutOrchestrationStrategy?: string | null;
    /**
     * Optional. Output only. The root rollout that this rollout is stemming from. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rollouts/{rollout_id\}"
     */
    rootRollout?: string | null;
    /**
     * Optional. Output only. The time when the rollout started executing. Will be empty if the rollout hasn't started yet.
     */
    startTime?: string | null;
    /**
     * Output only. Current state of the rollout.
     */
    state?: string | null;
    /**
     * Output only. Human readable message indicating details about the last state transition.
     */
    stateMessage?: string | null;
    /**
     * Optional. Output only. The time when the rollout transitioned into its current state.
     */
    stateTransitionTime?: string | null;
    /**
     * Optional. Output only. Details about the progress of the rollout.
     */
    stats?: Schema$RolloutStats;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout. If not provided, the unit_filter from the RolloutType will be used.
     */
    unitFilter?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * RolloutControl provides a way to request a change to the execution of a Rollout by pausing or canceling it.
   */
  export interface Schema$RolloutControl {
    /**
     * Required. Action to be performed on the Rollout. The default behavior is to run the rollout until it naturally reaches a terminal state.
     */
    action?: string | null;
    /**
     * Optional. Parameters for the RUN action. It is an error to specify this if the RolloutAction is not set to RUN. By default, the rollout will retry failed operations when resumed.
     */
    runParams?: Schema$RunRolloutActionParams;
  }
  /**
   * An object that describes various settings of Rollout execution. Includes built-in policies across GCP and GDC, and customizable policies.
   */
  export interface Schema$RolloutKind {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. The configuration for error budget. If the number of failed units exceeds max(allowed_count, allowed_ratio * total_units), the rollout will be paused. If not set, all units will be attempted to be updated regardless of the number of failures encountered.
     */
    errorBudget?: Schema$ErrorBudget;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rolloutKinds/{rollout_kind_id\}"
     */
    name?: string | null;
    /**
     * Optional. The strategy used for executing a Rollout. This is a required field. There are two supported values strategies which are used to control - "Google.Cloud.Simple.AllAtOnce" - "Google.Cloud.Simple.OneLocationAtATime" A rollout with one of these simple strategies will rollout across all locations defined in the associated UnitKind's Saas Locations.
     */
    rolloutOrchestrationStrategy?: string | null;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Optional. CEL(https://github.com/google/cel-spec) formatted filter string against Unit. The filter will be applied to determine the eligible unit population. This filter can only reduce, but not expand the scope of the rollout.
     */
    unitFilter?: string | null;
    /**
     * Required. Immutable. UnitKind that this rollout kind corresponds to. Rollouts stemming from this rollout kind will target the units of this unit kind. In other words, this defines the population of target units to be upgraded by rollouts.
     */
    unitKind?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
    /**
     * Optional. The config for updating the unit kind. By default, the unit kind will be updated on the rollout start.
     */
    updateUnitKindStrategy?: string | null;
  }
  /**
   * RolloutStats contains information about the progress of a rollout.
   */
  export interface Schema$RolloutStats {
    /**
     * Output only. A breakdown of the progress of operations triggered by the rollout. Provides a count of Operations by their state. This can be used to determine the number of units which have been updated, or are scheduled to be updated. There will be at most one entry per group. Possible values for operation groups are: - "SCHEDULED" - "PENDING" - "RUNNING" - "SUCCEEDED" - "FAILED" - "CANCELLED"
     */
    operationsByState?: Schema$Aggregate[];
  }
  /**
   * Parameters for the RUN action controlling the behavior of the rollout when it is resumed from a PAUSED state.
   */
  export interface Schema$RunRolloutActionParams {
    /**
     * Required. If true, the rollout will retry failed operations when resumed. This is applicable only the current state of the Rollout is PAUSED and the requested action is RUN.
     */
    retryFailedOperations?: boolean | null;
  }
  /**
   * Saas is a representation of a SaaS service managed by the Producer.
   */
  export interface Schema$Saas {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. List of locations that the service is available in. Rollout refers to the list to generate a rollout plan.
     */
    locations?: Schema$Location[];
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/saas/{saas\}"
     */
    name?: string | null;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * A time specification to schedule the maintenance.
   */
  export interface Schema$Schedule {
    /**
     * Optional. Start of operation. If not set, will be set to the start of the next window. (optional)
     */
    startTime?: string | null;
  }
  /**
   * Tenant represents the service producer side of an instance of the service created based on a request from a consumer. In a typical scenario a Tenant has a one-to-one mapping with a resource given out to a service consumer. Example: tenant: name: "projects/svc1/locations/loc/tenants/inst-068afff8" consumer_resource: "projects/gshoe/locations/loc/shoes/black-shoe"
   */
  export interface Schema$Tenant {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Immutable. A reference to the consumer resource this SaaS Tenant is representing. The relationship with a consumer resource can be used by SaaS Runtime for retrieving consumer-defined settings and policies such as maintenance policies (using Unified Maintenance Policy API).
     */
    consumerResource?: string | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/tenants/{tenant\}"
     */
    name?: string | null;
    /**
     * Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with SaaS Runtime. Part of the SaaS Runtime common data model.
     */
    saas?: string | null;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * Input variables whose values will be passed on to dependencies
   */
  export interface Schema$ToMapping {
    /**
     * Required. Alias of the dependency that the inputVariable will pass its value to
     */
    dependency?: string | null;
    /**
     * Optional. Tells SaaS Runtime if this mapping should be used during lookup or not
     */
    ignoreForLookup?: boolean | null;
    /**
     * Required. Name of the inputVariable on the dependency
     */
    inputVariable?: string | null;
  }
  /**
   * A unit of deployment that has its lifecycle via a CRUD API using an actuation engine under the hood (e.g. based on Terraform, Helm or a custom implementation provided by a service producer). A building block of a SaaS Tenant.
   */
  export interface Schema$Unit {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. Output only. A set of conditions which indicate the various conditions this resource can have.
     */
    conditions?: Schema$UnitCondition[];
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Output only. Set of dependencies for this unit. Maximum 10.
     */
    dependencies?: Schema$UnitDependency[];
    /**
     * Optional. Output only. List of Units that depend on this unit. Unit can only be deprovisioned if this list is empty. Maximum 1000.
     */
    dependents?: Schema$UnitDependency[];
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. Output only. Indicates the current input variables deployed by the unit
     */
    inputVariables?: Schema$UnitVariable[];
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Optional. Captures requested directives for performing future maintenance on the unit. This includes a request for the unit to skip maintenance for a period of time and remain pinned to its current release as well as controls for postponing maintenance scheduled in future.
     */
    maintenance?: Schema$MaintenanceSettings;
    /**
     * Optional. Immutable. Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created.
     */
    managementMode?: string | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/units/{unit\}"
     */
    name?: string | null;
    /**
     * Optional. Output only. List of concurrent UnitOperations that are operating on this Unit.
     */
    ongoingOperations?: string[] | null;
    /**
     * Optional. Output only. Set of key/value pairs corresponding to output variables from execution of actuation templates. The variables are declared in actuation configs (e.g in helm chart or terraform) and the values are fetched and returned by the actuation engine upon completion of execution.
     */
    outputVariables?: Schema$UnitVariable[];
    /**
     * Optional. Output only. List of pending (wait to be executed) UnitOperations for this unit.
     */
    pendingOperations?: string[] | null;
    /**
     * Optional. Output only. The current Release object for this Unit.
     */
    release?: string | null;
    /**
     * Optional. Output only. List of scheduled UnitOperations for this unit.
     */
    scheduledOperations?: string[] | null;
    /**
     * Optional. Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use).
     */
    state?: string | null;
    /**
     * Optional. Output only. If set, indicates the time when the system will start removing the unit.
     */
    systemCleanupAt?: string | null;
    /**
     * Optional. Output only. Indicates the system managed state of the unit.
     */
    systemManagedState?: string | null;
    /**
     * Optional. Reference to the Saas Tenant resource this unit belongs to. This for example informs the maintenance policies to use for scheduling future updates on a unit. (optional and immutable once created)
     */
    tenant?: string | null;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Optional. Reference to the UnitKind this Unit belongs to. Immutable once set.
     */
    unitKind?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * UnitCondition describes the status of an Unit. UnitCondition is individual components that contribute to an overall state.
   */
  export interface Schema$UnitCondition {
    /**
     * Required. Last time the condition transited from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Required. Human readable message indicating details about the last transition.
     */
    message?: string | null;
    /**
     * Required. Brief reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Required. Status of the condition.
     */
    status?: string | null;
    /**
     * Required. Type of the condition.
     */
    type?: string | null;
  }
  /**
   * Set of dependencies for this unit. Maximum 10.
   */
  export interface Schema$UnitDependency {
    /**
     * Output only. Alias for the name of the dependency.
     */
    alias?: string | null;
    /**
     * Output only. A reference to the Unit object.
     */
    unit?: string | null;
  }
  /**
   * Definition of a Unit. Units belonging to the same UnitKind are managed together; for example they follow the same release model (blueprints, versions etc.) and are typically rolled out together.
   */
  export interface Schema$UnitKind {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. A reference to the Release object to use as default for creating new units of this UnitKind (optional). If not specified, a new unit must explicitly reference which release to use for its creation.
     */
    defaultRelease?: string | null;
    /**
     * Optional. Immutable. List of other unit kinds that this release will depend on. Dependencies will be automatically provisioned if not found. Maximum 10.
     */
    dependencies?: Schema$Dependency[];
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. List of inputVariables for this release that will either be retrieved from a dependency’s outputVariables, or will be passed on to a dependency’s inputVariables. Maximum 100.
     */
    inputVariableMappings?: Schema$VariableMapping[];
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/unitKinds/{unitKind\}"
     */
    name?: string | null;
    /**
     * Optional. List of outputVariables for this unit kind will be passed to this unit's outputVariables. Maximum 100.
     */
    outputVariableMappings?: Schema$VariableMapping[];
    /**
     * Required. Immutable. A reference to the Saas that defines the product (managed service) that the producer wants to manage with SaaS Runtime. Part of the SaaS Runtime common data model. Immutable once set.
     */
    saas?: string | null;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
  }
  /**
   * UnitOperation encapsulates the intent of changing/interacting with the service component represented by the specific Unit. Multiple UnitOperations can be created (requested) and scheduled in the future, however only one will be allowed to execute at a time (that can change in the future for non-mutating operations). UnitOperations allow different actors interacting with the same unit to focus only on the change they have requested. This is a base object that contains the common fields in all unit operations. Next: 19
   */
  export interface Schema$UnitOperation {
    /**
     * Optional. Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/user-guide/annotations
     */
    annotations?: {[key: string]: string} | null;
    /**
     * Optional. When true, attempt to cancel the operation. Cancellation may fail if the operation is already executing. (Optional)
     */
    cancel?: boolean | null;
    /**
     * Optional. Output only. A set of conditions which indicate the various conditions this resource can have.
     */
    conditions?: Schema$UnitOperationCondition[];
    /**
     * Output only. The timestamp when the resource was created.
     */
    createTime?: string | null;
    deprovision?: Schema$Deprovision;
    /**
     * Optional. Output only. The engine state for on-going deployment engine operation(s). This field is opaque for external usage.
     */
    engineState?: string | null;
    /**
     * Optional. Output only. UnitOperationErrorCategory describe the error category.
     */
    errorCategory?: string | null;
    /**
     * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
     */
    etag?: string | null;
    /**
     * Optional. The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/unitOperations/{unitOperation\}"
     */
    name?: string | null;
    /**
     * Optional. Reference to parent resource: UnitOperation. If an operation needs to create other operations as part of its workflow, each of the child operations should have this field set to the parent. This can be used for tracing. (Optional)
     */
    parentUnitOperation?: string | null;
    provision?: Schema$Provision;
    /**
     * Optional. Specifies which rollout created this Unit Operation. This cannot be modified and is used for filtering purposes only. If a dependent unit and unit operation are created as part of another unit operation, they will use the same rolloutId.
     */
    rollout?: string | null;
    /**
     * Optional. When to schedule this operation.
     */
    schedule?: Schema$Schedule;
    /**
     * Optional. Output only. UnitOperationState describes the current state of the unit operation.
     */
    state?: string | null;
    /**
     * Output only. The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
     */
    uid?: string | null;
    /**
     * Required. Immutable. The Unit a given UnitOperation will act upon.
     */
    unit?: string | null;
    /**
     * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.
     */
    updateTime?: string | null;
    upgrade?: Schema$Upgrade;
  }
  /**
   * UnitOperationCondition describes the status of an Unit Operation. UnitOperationCondition is individual components that contribute to an overall state.
   */
  export interface Schema$UnitOperationCondition {
    /**
     * Required. Last time the condition transited from one status to another.
     */
    lastTransitionTime?: string | null;
    /**
     * Required. Human readable message indicating details about the last transition.
     */
    message?: string | null;
    /**
     * Required. Brief reason for the condition's last transition.
     */
    reason?: string | null;
    /**
     * Required. Status of the condition.
     */
    status?: string | null;
    /**
     * Required. Type of the condition.
     */
    type?: string | null;
  }
  /**
   * UnitVariable describes a parameter for a Unit.
   */
  export interface Schema$UnitVariable {
    /**
     * Optional. Immutable. Name of a supported variable type. Supported types are string, int, bool.
     */
    type?: string | null;
    /**
     * Optional. String encoded value for the variable.
     */
    value?: string | null;
    /**
     * Required. Immutable. Name of the variable from actuation configs.
     */
    variable?: string | null;
  }
  /**
   * Upgrade is the unit operation that upgrades a provisioned unit, which may also include the underlying resources represented by a Unit. Can only execute if the Unit is currently provisioned.
   */
  export interface Schema$Upgrade {
    /**
     * Optional. Set of input variables. Maximum 100. (optional)
     */
    inputVariables?: Schema$UnitVariable[];
    /**
     * Optional. Reference to the Release object to use for the Unit. (optional).
     */
    release?: string | null;
  }
  /**
   * Mapping of input variables to their respective output variable for depedenencies
   */
  export interface Schema$VariableMapping {
    /**
     * Optional. Output variables which will get their values from dependencies
     */
    from?: Schema$FromMapping;
    /**
     * Optional. Input variables whose values will be passed on to dependencies.
     */
    to?: Schema$ToMapping;
    /**
     * Required. name of the variable
     */
    variable?: string | null;
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
    releases: Resource$Projects$Locations$Releases;
    rolloutKinds: Resource$Projects$Locations$Rolloutkinds;
    rollouts: Resource$Projects$Locations$Rollouts;
    saas: Resource$Projects$Locations$Saas;
    tenants: Resource$Projects$Locations$Tenants;
    unitKinds: Resource$Projects$Locations$Unitkinds;
    unitOperations: Resource$Projects$Locations$Unitoperations;
    units: Resource$Projects$Locations$Units;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.releases = new Resource$Projects$Locations$Releases(this.context);
      this.rolloutKinds = new Resource$Projects$Locations$Rolloutkinds(
        this.context
      );
      this.rollouts = new Resource$Projects$Locations$Rollouts(this.context);
      this.saas = new Resource$Projects$Locations$Saas(this.context);
      this.tenants = new Resource$Projects$Locations$Tenants(this.context);
      this.unitKinds = new Resource$Projects$Locations$Unitkinds(this.context);
      this.unitOperations = new Resource$Projects$Locations$Unitoperations(
        this.context
      );
      this.units = new Resource$Projects$Locations$Units(this.context);
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.get({
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
    ): Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationLocation>>;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationLocation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Get
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationLocation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$GoogleCloudLocationLocation>>
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

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$GoogleCloudLocationLocation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationLocation>(parameters);
      }
    }

    /**
     * Lists information about the supported locations for this service.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.list({
     *     // Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
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

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}/locations').replace(
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
     * Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
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

  export class Resource$Projects$Locations$Releases {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.releases.create({
     *     // Required. The parent of the release.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Required. The ID value for the new release.
     *     releaseId: 'placeholder-value',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "blueprint": {},
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "inputVariableDefaults": [],
     *       //   "inputVariables": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "outputVariables": [],
     *       //   "releaseRequirements": {},
     *       //   "uid": "my_uid",
     *       //   "unitKind": "my_unitKind",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "blueprint": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "inputVariableDefaults": [],
     *   //   "inputVariables": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "outputVariables": [],
     *   //   "releaseRequirements": {},
     *   //   "uid": "my_uid",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Releases$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Releases$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    create(
      params: Params$Resource$Projects$Locations$Releases$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Releases$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Releases$Create,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    create(callback: BodyResponseCallback<Schema$Release>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Releases$Create
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Release>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Releases$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Releases$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Delete a single release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.releases.delete({
     *     // The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/releases/my-release',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Releases$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Releases$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Releases$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Releases$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Releases$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Releases$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Releases$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Releases$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.releases.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/releases/my-release',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "blueprint": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "inputVariableDefaults": [],
     *   //   "inputVariables": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "outputVariables": [],
     *   //   "releaseRequirements": {},
     *   //   "uid": "my_uid",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Releases$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Releases$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    get(
      params: Params$Resource$Projects$Locations$Releases$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Releases$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Releases$Get,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    get(callback: BodyResponseCallback<Schema$Release>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Releases$Get
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Release>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Releases$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Releases$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }

    /**
     * Retrieve a collection of releases.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.releases.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of releases to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the release.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "releases": [],
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
      params: Params$Resource$Projects$Locations$Releases$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Releases$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Releases$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Releases$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Releases$List,
      callback: BodyResponseCallback<Schema$ListReleasesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListReleasesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Releases$List
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListReleasesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListReleasesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Releases$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Releases$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/releases').replace(
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
        createAPIRequest<Schema$ListReleasesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListReleasesResponse>(parameters);
      }
    }

    /**
     * Update a single release.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.releases.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/releases/{release\}"
     *     name: 'projects/my-project/locations/my-location/releases/my-release',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "blueprint": {},
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "inputVariableDefaults": [],
     *       //   "inputVariables": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "outputVariables": [],
     *       //   "releaseRequirements": {},
     *       //   "uid": "my_uid",
     *       //   "unitKind": "my_unitKind",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "blueprint": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "inputVariableDefaults": [],
     *   //   "inputVariables": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "outputVariables": [],
     *   //   "releaseRequirements": {},
     *   //   "uid": "my_uid",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Releases$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Releases$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Release>>;
    patch(
      params: Params$Resource$Projects$Locations$Releases$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Releases$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Release>,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Releases$Patch,
      callback: BodyResponseCallback<Schema$Release>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Release>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Releases$Patch
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Release>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Release>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Releases$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Releases$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Release>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Release>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Releases$Create
    extends StandardParameters {
    /**
     * Required. The parent of the release.
     */
    parent?: string;
    /**
     * Required. The ID value for the new release.
     */
    releaseId?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }
  export interface Params$Resource$Projects$Locations$Releases$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Releases$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Releases$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of releases to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the release.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Releases$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/releases/{release\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Release;
  }

  export class Resource$Projects$Locations$Rolloutkinds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new rollout kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rolloutKinds.create({
     *     // Required. The parent of the rollout kind.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new rollout kind.
     *     rolloutKindId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "errorBudget": {},
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *       //   "uid": "my_uid",
     *       //   "unitFilter": "my_unitFilter",
     *       //   "unitKind": "my_unitKind",
     *       //   "updateTime": "my_updateTime",
     *       //   "updateUnitKindStrategy": "my_updateUnitKindStrategy"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "errorBudget": {},
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *   //   "uid": "my_uid",
     *   //   "unitFilter": "my_unitFilter",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime",
     *   //   "updateUnitKindStrategy": "my_updateUnitKindStrategy"
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
      params: Params$Resource$Projects$Locations$Rolloutkinds$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Rolloutkinds$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RolloutKind>>;
    create(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$RolloutKind>,
      callback: BodyResponseCallback<Schema$RolloutKind>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Create,
      callback: BodyResponseCallback<Schema$RolloutKind>
    ): void;
    create(callback: BodyResponseCallback<Schema$RolloutKind>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rolloutkinds$Create
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RolloutKind>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rolloutkinds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rolloutkinds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/rolloutKinds').replace(
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
        createAPIRequest<Schema$RolloutKind>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RolloutKind>(parameters);
      }
    }

    /**
     * Delete a single rollout kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rolloutKinds.delete({
     *     // The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/rolloutKinds/my-rolloutKind',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Rolloutkinds$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Rolloutkinds$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rolloutkinds$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rolloutkinds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rolloutkinds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single rollout kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rolloutKinds.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/rolloutKinds/my-rolloutKind',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "errorBudget": {},
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *   //   "uid": "my_uid",
     *   //   "unitFilter": "my_unitFilter",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime",
     *   //   "updateUnitKindStrategy": "my_updateUnitKindStrategy"
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
      params: Params$Resource$Projects$Locations$Rolloutkinds$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Rolloutkinds$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RolloutKind>>;
    get(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$RolloutKind>,
      callback: BodyResponseCallback<Schema$RolloutKind>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Get,
      callback: BodyResponseCallback<Schema$RolloutKind>
    ): void;
    get(callback: BodyResponseCallback<Schema$RolloutKind>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rolloutkinds$Get
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RolloutKind>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rolloutkinds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rolloutkinds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$RolloutKind>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RolloutKind>(parameters);
      }
    }

    /**
     * Retrieve a collection of rollout kinds.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rolloutKinds.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of rollout kinds to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the rollout kind.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rolloutKinds": [],
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
      params: Params$Resource$Projects$Locations$Rolloutkinds$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Rolloutkinds$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutKindsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Rolloutkinds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Rolloutkinds$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRolloutKindsResponse>,
      callback: BodyResponseCallback<Schema$ListRolloutKindsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Rolloutkinds$List,
      callback: BodyResponseCallback<Schema$ListRolloutKindsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolloutKindsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rolloutkinds$List
        | BodyResponseCallback<Schema$ListRolloutKindsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolloutKindsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolloutKindsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutKindsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rolloutkinds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rolloutkinds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/rolloutKinds').replace(
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
        createAPIRequest<Schema$ListRolloutKindsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolloutKindsResponse>(parameters);
      }
    }

    /**
     * Update a single rollout kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rolloutKinds.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rolloutKinds/{rollout_kind_id\}"
     *     name: 'projects/my-project/locations/my-location/rolloutKinds/my-rolloutKind',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "errorBudget": {},
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *       //   "uid": "my_uid",
     *       //   "unitFilter": "my_unitFilter",
     *       //   "unitKind": "my_unitKind",
     *       //   "updateTime": "my_updateTime",
     *       //   "updateUnitKindStrategy": "my_updateUnitKindStrategy"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "errorBudget": {},
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *   //   "uid": "my_uid",
     *   //   "unitFilter": "my_unitFilter",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime",
     *   //   "updateUnitKindStrategy": "my_updateUnitKindStrategy"
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
    patch(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Rolloutkinds$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RolloutKind>>;
    patch(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$RolloutKind>,
      callback: BodyResponseCallback<Schema$RolloutKind>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Rolloutkinds$Patch,
      callback: BodyResponseCallback<Schema$RolloutKind>
    ): void;
    patch(callback: BodyResponseCallback<Schema$RolloutKind>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rolloutkinds$Patch
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RolloutKind>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RolloutKind>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rolloutkinds$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rolloutkinds$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$RolloutKind>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RolloutKind>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Rolloutkinds$Create
    extends StandardParameters {
    /**
     * Required. The parent of the rollout kind.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new rollout kind.
     */
    rolloutKindId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RolloutKind;
  }
  export interface Params$Resource$Projects$Locations$Rolloutkinds$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Rolloutkinds$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Rolloutkinds$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of rollout kinds to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the rollout kind.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Rolloutkinds$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rolloutKinds/{rollout_kind_id\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RolloutKind;
  }

  export class Resource$Projects$Locations$Rollouts {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rollouts.create({
     *     // Required. The parent of the rollout.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new rollout.
     *     rolloutId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "control": {},
     *       //   "createTime": "my_createTime",
     *       //   "endTime": "my_endTime",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parentRollout": "my_parentRollout",
     *       //   "release": "my_release",
     *       //   "rolloutKind": "my_rolloutKind",
     *       //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *       //   "rootRollout": "my_rootRollout",
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state",
     *       //   "stateMessage": "my_stateMessage",
     *       //   "stateTransitionTime": "my_stateTransitionTime",
     *       //   "stats": {},
     *       //   "uid": "my_uid",
     *       //   "unitFilter": "my_unitFilter",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "control": {},
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parentRollout": "my_parentRollout",
     *   //   "release": "my_release",
     *   //   "rolloutKind": "my_rolloutKind",
     *   //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *   //   "rootRollout": "my_rootRollout",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateMessage": "my_stateMessage",
     *   //   "stateTransitionTime": "my_stateTransitionTime",
     *   //   "stats": {},
     *   //   "uid": "my_uid",
     *   //   "unitFilter": "my_unitFilter",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Rollouts$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Rollouts$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>;
    create(
      params: Params$Resource$Projects$Locations$Rollouts$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Rollouts$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Rollout>,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Rollouts$Create,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    create(callback: BodyResponseCallback<Schema$Rollout>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rollouts$Create
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rollouts$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rollouts$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/rollouts').replace(
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
        createAPIRequest<Schema$Rollout>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Rollout>(parameters);
      }
    }

    /**
     * Delete a single rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rollouts.delete({
     *     // The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/rollouts/my-rollout',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Rollouts$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Rollouts$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Rollouts$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Rollouts$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Rollouts$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rollouts$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rollouts$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rollouts$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rollouts.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/rollouts/my-rollout',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "control": {},
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parentRollout": "my_parentRollout",
     *   //   "release": "my_release",
     *   //   "rolloutKind": "my_rolloutKind",
     *   //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *   //   "rootRollout": "my_rootRollout",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateMessage": "my_stateMessage",
     *   //   "stateTransitionTime": "my_stateTransitionTime",
     *   //   "stats": {},
     *   //   "uid": "my_uid",
     *   //   "unitFilter": "my_unitFilter",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Rollouts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Rollouts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>;
    get(
      params: Params$Resource$Projects$Locations$Rollouts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Rollouts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Rollout>,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Rollouts$Get,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    get(callback: BodyResponseCallback<Schema$Rollout>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rollouts$Get
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rollouts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rollouts$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Rollout>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Rollout>(parameters);
      }
    }

    /**
     * Retrieve a collection of rollouts.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rollouts.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of rollouts to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the rollout.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "rollouts": [],
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
      params: Params$Resource$Projects$Locations$Rollouts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Rollouts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Rollouts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Rollouts$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListRolloutsResponse>,
      callback: BodyResponseCallback<Schema$ListRolloutsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Rollouts$List,
      callback: BodyResponseCallback<Schema$ListRolloutsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListRolloutsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rollouts$List
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListRolloutsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListRolloutsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rollouts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rollouts$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/rollouts').replace(
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
        createAPIRequest<Schema$ListRolloutsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListRolloutsResponse>(parameters);
      }
    }

    /**
     * Update a single rollout.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.rollouts.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rollout/{rollout_id\}"
     *     name: 'projects/my-project/locations/my-location/rollouts/my-rollout',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "control": {},
     *       //   "createTime": "my_createTime",
     *       //   "endTime": "my_endTime",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parentRollout": "my_parentRollout",
     *       //   "release": "my_release",
     *       //   "rolloutKind": "my_rolloutKind",
     *       //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *       //   "rootRollout": "my_rootRollout",
     *       //   "startTime": "my_startTime",
     *       //   "state": "my_state",
     *       //   "stateMessage": "my_stateMessage",
     *       //   "stateTransitionTime": "my_stateTransitionTime",
     *       //   "stats": {},
     *       //   "uid": "my_uid",
     *       //   "unitFilter": "my_unitFilter",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "control": {},
     *   //   "createTime": "my_createTime",
     *   //   "endTime": "my_endTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parentRollout": "my_parentRollout",
     *   //   "release": "my_release",
     *   //   "rolloutKind": "my_rolloutKind",
     *   //   "rolloutOrchestrationStrategy": "my_rolloutOrchestrationStrategy",
     *   //   "rootRollout": "my_rootRollout",
     *   //   "startTime": "my_startTime",
     *   //   "state": "my_state",
     *   //   "stateMessage": "my_stateMessage",
     *   //   "stateTransitionTime": "my_stateTransitionTime",
     *   //   "stats": {},
     *   //   "uid": "my_uid",
     *   //   "unitFilter": "my_unitFilter",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Rollouts$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Rollouts$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>;
    patch(
      params: Params$Resource$Projects$Locations$Rollouts$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Rollouts$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Rollout>,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Rollouts$Patch,
      callback: BodyResponseCallback<Schema$Rollout>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Rollout>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Rollouts$Patch
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Rollout>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Rollout>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Rollouts$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Rollouts$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Rollout>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Rollout>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Rollouts$Create
    extends StandardParameters {
    /**
     * Required. The parent of the rollout.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new rollout.
     */
    rolloutId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Rollout;
  }
  export interface Params$Resource$Projects$Locations$Rollouts$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Rollouts$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Rollouts$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of rollouts to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the rollout.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Rollouts$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/rollout/{rollout_id\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Rollout;
  }

  export class Resource$Projects$Locations$Saas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new saas.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.saas.create({
     *     // Required. The parent of the saas.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new saas.
     *     saasId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "locations": [],
     *       //   "name": "my_name",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "locations": [],
     *   //   "name": "my_name",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Saas$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Saas$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Saas>>;
    create(
      params: Params$Resource$Projects$Locations$Saas$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Saas$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Saas>,
      callback: BodyResponseCallback<Schema$Saas>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Saas$Create,
      callback: BodyResponseCallback<Schema$Saas>
    ): void;
    create(callback: BodyResponseCallback<Schema$Saas>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Saas$Create
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Saas>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Saas$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Saas$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/saas').replace(
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
        createAPIRequest<Schema$Saas>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Saas>(parameters);
      }
    }

    /**
     * Delete a single saas.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.saas.delete({
     *     // The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/saas/my-saa',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Saas$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Saas$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Saas$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Saas$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Saas$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Saas$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Saas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Saas$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single saas.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.saas.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/saas/my-saa',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "locations": [],
     *   //   "name": "my_name",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Saas$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Saas$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Saas>>;
    get(
      params: Params$Resource$Projects$Locations$Saas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Saas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Saas>,
      callback: BodyResponseCallback<Schema$Saas>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Saas$Get,
      callback: BodyResponseCallback<Schema$Saas>
    ): void;
    get(callback: BodyResponseCallback<Schema$Saas>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Saas$Get
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Saas>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Saas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Saas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Saas>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Saas>(parameters);
      }
    }

    /**
     * Retrieve a collection of saas.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.saas.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of saas to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the saas.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "saas": [],
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
      params: Params$Resource$Projects$Locations$Saas$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Saas$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSaasResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Saas$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Saas$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListSaasResponse>,
      callback: BodyResponseCallback<Schema$ListSaasResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Saas$List,
      callback: BodyResponseCallback<Schema$ListSaasResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListSaasResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Saas$List
        | BodyResponseCallback<Schema$ListSaasResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSaasResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSaasResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSaasResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Saas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Saas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/saas').replace(
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
        createAPIRequest<Schema$ListSaasResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSaasResponse>(parameters);
      }
    }

    /**
     * Update a single saas.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.saas.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/saas/{saas\}"
     *     name: 'projects/my-project/locations/my-location/saas/my-saa',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "locations": [],
     *       //   "name": "my_name",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "locations": [],
     *   //   "name": "my_name",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Saas$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Saas$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Saas>>;
    patch(
      params: Params$Resource$Projects$Locations$Saas$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Saas$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Saas>,
      callback: BodyResponseCallback<Schema$Saas>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Saas$Patch,
      callback: BodyResponseCallback<Schema$Saas>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Saas>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Saas$Patch
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Saas>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Saas>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Saas$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Saas$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Saas>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Saas>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Saas$Create
    extends StandardParameters {
    /**
     * Required. The parent of the saas.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new saas.
     */
    saasId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Saas;
  }
  export interface Params$Resource$Projects$Locations$Saas$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Saas$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Saas$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of saas to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the saas.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Saas$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/saas/{saas\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Saas;
  }

  export class Resource$Projects$Locations$Tenants {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.tenants.create({
     *     // Required. The parent of the tenant.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new tenant.
     *     tenantId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "consumerResource": "my_consumerResource",
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "saas": "my_saas",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "consumerResource": "my_consumerResource",
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "saas": "my_saas",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Tenants$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Tenants$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>;
    create(
      params: Params$Resource$Projects$Locations$Tenants$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tenants$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Tenant>,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Tenants$Create,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    create(callback: BodyResponseCallback<Schema$Tenant>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tenants$Create
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tenants$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tenants$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tenants').replace(
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
        createAPIRequest<Schema$Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tenant>(parameters);
      }
    }

    /**
     * Delete a single tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.tenants.delete({
     *     // The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/tenants/my-tenant',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Tenants$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Tenants$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Tenants$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tenants$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Tenants$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tenants$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tenants$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tenants$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.tenants.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/tenants/my-tenant',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "consumerResource": "my_consumerResource",
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "saas": "my_saas",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Tenants$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Tenants$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>;
    get(
      params: Params$Resource$Projects$Locations$Tenants$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tenants$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Tenant>,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Tenants$Get,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    get(callback: BodyResponseCallback<Schema$Tenant>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tenants$Get
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tenants$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tenants$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tenant>(parameters);
      }
    }

    /**
     * Retrieve a collection of tenants.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.tenants.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of tenants to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the tenant.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "tenants": [],
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
      params: Params$Resource$Projects$Locations$Tenants$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Tenants$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTenantsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Tenants$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Tenants$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTenantsResponse>,
      callback: BodyResponseCallback<Schema$ListTenantsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Tenants$List,
      callback: BodyResponseCallback<Schema$ListTenantsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTenantsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tenants$List
        | BodyResponseCallback<Schema$ListTenantsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTenantsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTenantsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTenantsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tenants$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tenants$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/tenants').replace(
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
        createAPIRequest<Schema$ListTenantsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTenantsResponse>(parameters);
      }
    }

    /**
     * Update a single tenant.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.tenants.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/tenants/{tenant\}"
     *     name: 'projects/my-project/locations/my-location/tenants/my-tenant',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "consumerResource": "my_consumerResource",
     *       //   "createTime": "my_createTime",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "saas": "my_saas",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "consumerResource": "my_consumerResource",
     *   //   "createTime": "my_createTime",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "saas": "my_saas",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Tenants$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Tenants$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>;
    patch(
      params: Params$Resource$Projects$Locations$Tenants$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tenants$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Tenant>,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Tenants$Patch,
      callback: BodyResponseCallback<Schema$Tenant>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Tenant>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Tenants$Patch
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Tenant>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Tenant>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Tenants$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Tenants$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Tenant>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Tenant>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Tenants$Create
    extends StandardParameters {
    /**
     * Required. The parent of the tenant.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new tenant.
     */
    tenantId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tenant;
  }
  export interface Params$Resource$Projects$Locations$Tenants$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Tenants$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Tenants$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of tenants to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the tenant.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Tenants$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/tenants/{tenant\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Tenant;
  }

  export class Resource$Projects$Locations$Unitkinds {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new unit kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitKinds.create({
     *     // Required. The parent of the unit kind.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new unit kind.
     *     unitKindId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "defaultRelease": "my_defaultRelease",
     *       //   "dependencies": [],
     *       //   "etag": "my_etag",
     *       //   "inputVariableMappings": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "outputVariableMappings": [],
     *       //   "saas": "my_saas",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "defaultRelease": "my_defaultRelease",
     *   //   "dependencies": [],
     *   //   "etag": "my_etag",
     *   //   "inputVariableMappings": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "outputVariableMappings": [],
     *   //   "saas": "my_saas",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Unitkinds$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Unitkinds$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UnitKind>>;
    create(
      params: Params$Resource$Projects$Locations$Unitkinds$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Unitkinds$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UnitKind>,
      callback: BodyResponseCallback<Schema$UnitKind>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Unitkinds$Create,
      callback: BodyResponseCallback<Schema$UnitKind>
    ): void;
    create(callback: BodyResponseCallback<Schema$UnitKind>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitkinds$Create
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UnitKind>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitkinds$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitkinds$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/unitKinds').replace(
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
        createAPIRequest<Schema$UnitKind>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnitKind>(parameters);
      }
    }

    /**
     * Delete a single unit kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitKinds.delete({
     *     // The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/unitKinds/my-unitKind',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Unitkinds$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Unitkinds$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Unitkinds$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Unitkinds$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Unitkinds$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitkinds$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitkinds$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitkinds$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single unit kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitKinds.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/unitKinds/my-unitKind',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "defaultRelease": "my_defaultRelease",
     *   //   "dependencies": [],
     *   //   "etag": "my_etag",
     *   //   "inputVariableMappings": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "outputVariableMappings": [],
     *   //   "saas": "my_saas",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Unitkinds$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Unitkinds$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UnitKind>>;
    get(
      params: Params$Resource$Projects$Locations$Unitkinds$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Unitkinds$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UnitKind>,
      callback: BodyResponseCallback<Schema$UnitKind>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Unitkinds$Get,
      callback: BodyResponseCallback<Schema$UnitKind>
    ): void;
    get(callback: BodyResponseCallback<Schema$UnitKind>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitkinds$Get
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UnitKind>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitkinds$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitkinds$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UnitKind>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnitKind>(parameters);
      }
    }

    /**
     * Retrieve a collection of unit kinds.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitKinds.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of unit kinds to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the unit kind.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unitKinds": [],
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
      params: Params$Resource$Projects$Locations$Unitkinds$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Unitkinds$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUnitKindsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Unitkinds$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Unitkinds$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUnitKindsResponse>,
      callback: BodyResponseCallback<Schema$ListUnitKindsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Unitkinds$List,
      callback: BodyResponseCallback<Schema$ListUnitKindsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUnitKindsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitkinds$List
        | BodyResponseCallback<Schema$ListUnitKindsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnitKindsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnitKindsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUnitKindsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitkinds$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitkinds$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/unitKinds').replace(
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
        createAPIRequest<Schema$ListUnitKindsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnitKindsResponse>(parameters);
      }
    }

    /**
     * Update a single unit kind.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitKinds.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/unitKinds/{unitKind\}"
     *     name: 'projects/my-project/locations/my-location/unitKinds/my-unitKind',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "createTime": "my_createTime",
     *       //   "defaultRelease": "my_defaultRelease",
     *       //   "dependencies": [],
     *       //   "etag": "my_etag",
     *       //   "inputVariableMappings": [],
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "outputVariableMappings": [],
     *       //   "saas": "my_saas",
     *       //   "uid": "my_uid",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "createTime": "my_createTime",
     *   //   "defaultRelease": "my_defaultRelease",
     *   //   "dependencies": [],
     *   //   "etag": "my_etag",
     *   //   "inputVariableMappings": [],
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "outputVariableMappings": [],
     *   //   "saas": "my_saas",
     *   //   "uid": "my_uid",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Unitkinds$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Unitkinds$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UnitKind>>;
    patch(
      params: Params$Resource$Projects$Locations$Unitkinds$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Unitkinds$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UnitKind>,
      callback: BodyResponseCallback<Schema$UnitKind>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Unitkinds$Patch,
      callback: BodyResponseCallback<Schema$UnitKind>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UnitKind>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitkinds$Patch
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnitKind>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UnitKind>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitkinds$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitkinds$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$UnitKind>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnitKind>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Unitkinds$Create
    extends StandardParameters {
    /**
     * Required. The parent of the unit kind.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new unit kind.
     */
    unitKindId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnitKind;
  }
  export interface Params$Resource$Projects$Locations$Unitkinds$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Unitkinds$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Unitkinds$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of unit kinds to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the unit kind.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Unitkinds$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/unitKinds/{unitKind\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnitKind;
  }

  export class Resource$Projects$Locations$Unitoperations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new unit operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitOperations.create({
     *     // Required. The parent of the unit operation.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new unit operation.
     *     unitOperationId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "cancel": false,
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "deprovision": {},
     *       //   "engineState": "my_engineState",
     *       //   "errorCategory": "my_errorCategory",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parentUnitOperation": "my_parentUnitOperation",
     *       //   "provision": {},
     *       //   "rollout": "my_rollout",
     *       //   "schedule": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "unit": "my_unit",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "cancel": false,
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "deprovision": {},
     *   //   "engineState": "my_engineState",
     *   //   "errorCategory": "my_errorCategory",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parentUnitOperation": "my_parentUnitOperation",
     *   //   "provision": {},
     *   //   "rollout": "my_rollout",
     *   //   "schedule": {},
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "unit": "my_unit",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {}
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
      params: Params$Resource$Projects$Locations$Unitoperations$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Unitoperations$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UnitOperation>>;
    create(
      params: Params$Resource$Projects$Locations$Unitoperations$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Unitoperations$Create,
      options: MethodOptions | BodyResponseCallback<Schema$UnitOperation>,
      callback: BodyResponseCallback<Schema$UnitOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Unitoperations$Create,
      callback: BodyResponseCallback<Schema$UnitOperation>
    ): void;
    create(callback: BodyResponseCallback<Schema$UnitOperation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitoperations$Create
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UnitOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitoperations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitoperations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/unitOperations').replace(
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
        createAPIRequest<Schema$UnitOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnitOperation>(parameters);
      }
    }

    /**
     * Delete a single unit operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitOperations.delete({
     *     // The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/unitOperations/my-unitOperation',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Unitoperations$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Unitoperations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Unitoperations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Unitoperations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Unitoperations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitoperations$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitoperations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitoperations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single unit operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitOperations.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/unitOperations/my-unitOperation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "cancel": false,
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "deprovision": {},
     *   //   "engineState": "my_engineState",
     *   //   "errorCategory": "my_errorCategory",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parentUnitOperation": "my_parentUnitOperation",
     *   //   "provision": {},
     *   //   "rollout": "my_rollout",
     *   //   "schedule": {},
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "unit": "my_unit",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {}
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
      params: Params$Resource$Projects$Locations$Unitoperations$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Unitoperations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UnitOperation>>;
    get(
      params: Params$Resource$Projects$Locations$Unitoperations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Unitoperations$Get,
      options: MethodOptions | BodyResponseCallback<Schema$UnitOperation>,
      callback: BodyResponseCallback<Schema$UnitOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Unitoperations$Get,
      callback: BodyResponseCallback<Schema$UnitOperation>
    ): void;
    get(callback: BodyResponseCallback<Schema$UnitOperation>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitoperations$Get
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UnitOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitoperations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitoperations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$UnitOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnitOperation>(parameters);
      }
    }

    /**
     * Retrieve a collection of unit operations.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitOperations.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of unit operations to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the unit operation.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "unitOperations": [],
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
      params: Params$Resource$Projects$Locations$Unitoperations$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Unitoperations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUnitOperationsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Unitoperations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Unitoperations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListUnitOperationsResponse>,
      callback: BodyResponseCallback<Schema$ListUnitOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Unitoperations$List,
      callback: BodyResponseCallback<Schema$ListUnitOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListUnitOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitoperations$List
        | BodyResponseCallback<Schema$ListUnitOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnitOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnitOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUnitOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitoperations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitoperations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/unitOperations').replace(
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
        createAPIRequest<Schema$ListUnitOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnitOperationsResponse>(parameters);
      }
    }

    /**
     * Update a single unit operation.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.unitOperations.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/unitOperations/{unitOperation\}"
     *     name: 'projects/my-project/locations/my-location/unitOperations/my-unitOperation',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "cancel": false,
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "deprovision": {},
     *       //   "engineState": "my_engineState",
     *       //   "errorCategory": "my_errorCategory",
     *       //   "etag": "my_etag",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "parentUnitOperation": "my_parentUnitOperation",
     *       //   "provision": {},
     *       //   "rollout": "my_rollout",
     *       //   "schedule": {},
     *       //   "state": "my_state",
     *       //   "uid": "my_uid",
     *       //   "unit": "my_unit",
     *       //   "updateTime": "my_updateTime",
     *       //   "upgrade": {}
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "cancel": false,
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "deprovision": {},
     *   //   "engineState": "my_engineState",
     *   //   "errorCategory": "my_errorCategory",
     *   //   "etag": "my_etag",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "parentUnitOperation": "my_parentUnitOperation",
     *   //   "provision": {},
     *   //   "rollout": "my_rollout",
     *   //   "schedule": {},
     *   //   "state": "my_state",
     *   //   "uid": "my_uid",
     *   //   "unit": "my_unit",
     *   //   "updateTime": "my_updateTime",
     *   //   "upgrade": {}
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
    patch(
      params: Params$Resource$Projects$Locations$Unitoperations$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Unitoperations$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$UnitOperation>>;
    patch(
      params: Params$Resource$Projects$Locations$Unitoperations$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Unitoperations$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$UnitOperation>,
      callback: BodyResponseCallback<Schema$UnitOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Unitoperations$Patch,
      callback: BodyResponseCallback<Schema$UnitOperation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$UnitOperation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Unitoperations$Patch
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$UnitOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$UnitOperation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Unitoperations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Unitoperations$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$UnitOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$UnitOperation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Unitoperations$Create
    extends StandardParameters {
    /**
     * Required. The parent of the unit operation.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new unit operation.
     */
    unitOperationId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnitOperation;
  }
  export interface Params$Resource$Projects$Locations$Unitoperations$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Unitoperations$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Unitoperations$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of unit operations to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the unit operation.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Unitoperations$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/unitOperations/{unitOperation\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UnitOperation;
  }

  export class Resource$Projects$Locations$Units {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Create a new unit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.units.create({
     *     // Required. The parent of the unit.
     *     parent: 'projects/my-project/locations/my-location',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. The ID value for the new unit.
     *     unitId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "dependencies": [],
     *       //   "dependents": [],
     *       //   "etag": "my_etag",
     *       //   "inputVariables": [],
     *       //   "labels": {},
     *       //   "maintenance": {},
     *       //   "managementMode": "my_managementMode",
     *       //   "name": "my_name",
     *       //   "ongoingOperations": [],
     *       //   "outputVariables": [],
     *       //   "pendingOperations": [],
     *       //   "release": "my_release",
     *       //   "scheduledOperations": [],
     *       //   "state": "my_state",
     *       //   "systemCleanupAt": "my_systemCleanupAt",
     *       //   "systemManagedState": "my_systemManagedState",
     *       //   "tenant": "my_tenant",
     *       //   "uid": "my_uid",
     *       //   "unitKind": "my_unitKind",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "dependencies": [],
     *   //   "dependents": [],
     *   //   "etag": "my_etag",
     *   //   "inputVariables": [],
     *   //   "labels": {},
     *   //   "maintenance": {},
     *   //   "managementMode": "my_managementMode",
     *   //   "name": "my_name",
     *   //   "ongoingOperations": [],
     *   //   "outputVariables": [],
     *   //   "pendingOperations": [],
     *   //   "release": "my_release",
     *   //   "scheduledOperations": [],
     *   //   "state": "my_state",
     *   //   "systemCleanupAt": "my_systemCleanupAt",
     *   //   "systemManagedState": "my_systemManagedState",
     *   //   "tenant": "my_tenant",
     *   //   "uid": "my_uid",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Units$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Units$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Unit>>;
    create(
      params: Params$Resource$Projects$Locations$Units$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Units$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Unit>,
      callback: BodyResponseCallback<Schema$Unit>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Units$Create,
      callback: BodyResponseCallback<Schema$Unit>
    ): void;
    create(callback: BodyResponseCallback<Schema$Unit>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Units$Create
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Unit>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Units$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Units$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/units').replace(
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
        createAPIRequest<Schema$Unit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Unit>(parameters);
      }
    }

    /**
     * Delete a single unit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.units.delete({
     *     // The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     *     etag: 'placeholder-value',
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/units/my-unit',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
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
      params: Params$Resource$Projects$Locations$Units$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Units$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Units$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Units$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Units$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Units$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Units$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Units$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Retrieve a single unit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.units.get({
     *     // Required. The resource name of the resource within a service.
     *     name: 'projects/my-project/locations/my-location/units/my-unit',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "dependencies": [],
     *   //   "dependents": [],
     *   //   "etag": "my_etag",
     *   //   "inputVariables": [],
     *   //   "labels": {},
     *   //   "maintenance": {},
     *   //   "managementMode": "my_managementMode",
     *   //   "name": "my_name",
     *   //   "ongoingOperations": [],
     *   //   "outputVariables": [],
     *   //   "pendingOperations": [],
     *   //   "release": "my_release",
     *   //   "scheduledOperations": [],
     *   //   "state": "my_state",
     *   //   "systemCleanupAt": "my_systemCleanupAt",
     *   //   "systemManagedState": "my_systemManagedState",
     *   //   "tenant": "my_tenant",
     *   //   "uid": "my_uid",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime"
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
      params: Params$Resource$Projects$Locations$Units$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Units$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Unit>>;
    get(
      params: Params$Resource$Projects$Locations$Units$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Units$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Unit>,
      callback: BodyResponseCallback<Schema$Unit>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Units$Get,
      callback: BodyResponseCallback<Schema$Unit>
    ): void;
    get(callback: BodyResponseCallback<Schema$Unit>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Units$Get
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Unit>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Units$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Units$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Unit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Unit>(parameters);
      }
    }

    /**
     * Retrieve a collection of units.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.units.list({
     *     // Filter the list as specified in https://google.aip.dev/160.
     *     filter: 'placeholder-value',
     *     // Order results as specified in https://google.aip.dev/132.
     *     orderBy: 'placeholder-value',
     *     // The maximum number of units to send per page.
     *     pageSize: 'placeholder-value',
     *     // The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent of the unit.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "units": [],
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
      params: Params$Resource$Projects$Locations$Units$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Units$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListUnitsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Units$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Units$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListUnitsResponse>,
      callback: BodyResponseCallback<Schema$ListUnitsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Units$List,
      callback: BodyResponseCallback<Schema$ListUnitsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListUnitsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Units$List
        | BodyResponseCallback<Schema$ListUnitsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListUnitsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListUnitsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListUnitsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Units$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Units$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+parent}/units').replace(
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
        createAPIRequest<Schema$ListUnitsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListUnitsResponse>(parameters);
      }
    }

    /**
     * Update a single unit.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/saasservicemgmt.googleapis.com
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
     * const saasservicemgmt = google.saasservicemgmt('v1beta1');
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
     *   const res = await saasservicemgmt.projects.locations.units.patch({
     *     // Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/units/{unit\}"
     *     name: 'projects/my-project/locations/my-location/units/my-unit',
     *     // An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten.
     *     updateMask: 'placeholder-value',
     *     // If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     *     validateOnly: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "annotations": {},
     *       //   "conditions": [],
     *       //   "createTime": "my_createTime",
     *       //   "dependencies": [],
     *       //   "dependents": [],
     *       //   "etag": "my_etag",
     *       //   "inputVariables": [],
     *       //   "labels": {},
     *       //   "maintenance": {},
     *       //   "managementMode": "my_managementMode",
     *       //   "name": "my_name",
     *       //   "ongoingOperations": [],
     *       //   "outputVariables": [],
     *       //   "pendingOperations": [],
     *       //   "release": "my_release",
     *       //   "scheduledOperations": [],
     *       //   "state": "my_state",
     *       //   "systemCleanupAt": "my_systemCleanupAt",
     *       //   "systemManagedState": "my_systemManagedState",
     *       //   "tenant": "my_tenant",
     *       //   "uid": "my_uid",
     *       //   "unitKind": "my_unitKind",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "annotations": {},
     *   //   "conditions": [],
     *   //   "createTime": "my_createTime",
     *   //   "dependencies": [],
     *   //   "dependents": [],
     *   //   "etag": "my_etag",
     *   //   "inputVariables": [],
     *   //   "labels": {},
     *   //   "maintenance": {},
     *   //   "managementMode": "my_managementMode",
     *   //   "name": "my_name",
     *   //   "ongoingOperations": [],
     *   //   "outputVariables": [],
     *   //   "pendingOperations": [],
     *   //   "release": "my_release",
     *   //   "scheduledOperations": [],
     *   //   "state": "my_state",
     *   //   "systemCleanupAt": "my_systemCleanupAt",
     *   //   "systemManagedState": "my_systemManagedState",
     *   //   "tenant": "my_tenant",
     *   //   "uid": "my_uid",
     *   //   "unitKind": "my_unitKind",
     *   //   "updateTime": "my_updateTime"
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
    patch(
      params: Params$Resource$Projects$Locations$Units$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Units$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Unit>>;
    patch(
      params: Params$Resource$Projects$Locations$Units$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Units$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Unit>,
      callback: BodyResponseCallback<Schema$Unit>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Units$Patch,
      callback: BodyResponseCallback<Schema$Unit>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Unit>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Units$Patch
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Unit>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Unit>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Units$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Units$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
        options.rootUrl || 'https://saasservicemgmt.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
            method: 'PATCH',
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
        createAPIRequest<Schema$Unit>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Unit>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Units$Create
    extends StandardParameters {
    /**
     * Required. The parent of the unit.
     */
    parent?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. The ID value for the new unit.
     */
    unitId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Unit;
  }
  export interface Params$Resource$Projects$Locations$Units$Delete
    extends StandardParameters {
    /**
     * The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not.
     */
    etag?: string;
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Units$Get
    extends StandardParameters {
    /**
     * Required. The resource name of the resource within a service.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Units$List
    extends StandardParameters {
    /**
     * Filter the list as specified in https://google.aip.dev/160.
     */
    filter?: string;
    /**
     * Order results as specified in https://google.aip.dev/132.
     */
    orderBy?: string;
    /**
     * The maximum number of units to send per page.
     */
    pageSize?: number;
    /**
     * The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page.
     */
    pageToken?: string;
    /**
     * Required. The parent of the unit.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Units$Patch
    extends StandardParameters {
    /**
     * Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project\}/locations/{location\}/units/{unit\}"
     */
    name?: string;
    /**
     * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten.
     */
    updateMask?: string;
    /**
     * If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Unit;
  }
}
