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

export namespace file_v1 {
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
   * Cloud Filestore API
   *
   * The Cloud Filestore API is used for creating and managing cloud file servers.
   *
   * @example
   * const {google} = require('googleapis');
   * const file = google.file('v1');
   *
   * @namespace file
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for File
   */
  export class File {
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
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:      service Foo {       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * File share configuration for the instance.
   */
  export interface Schema$FileShareConfig {
    /**
     * File share capacity in gigabytes (GB). Cloud Filestore defines 1 GB as 1024^3 bytes.
     */
    capacityGb?: string | null;
    /**
     * The name of the file share (must be 16 characters or less).
     */
    name?: string | null;
  }
  /**
   * Instance represents the interface for SLM services to actuate the state of control plane resources.  Example Instance in JSON, where   consumer-project=snapchat,   producer-project=cloud-sql:  ```json Instance: {   &quot;name&quot;:   &quot;projects/snapchat/locations/us-east1/instances/prod-instance&quot;,   &quot;create_time&quot;: {     &quot;seconds&quot;: 1526406431,   },   &quot;labels&quot;: {     &quot;env&quot;: &quot;prod&quot;,     &quot;foo&quot;: &quot;bar&quot;   },   &quot;state&quot;: READY,   &quot;software_versions&quot;: {     &quot;software_update&quot;: &quot;cloud-sql-09-28-2018&quot;,   },   &quot;maintenance_policy_names&quot;: {     &quot;UpdatePolicy&quot;:     &quot;projects/snapchat/locations/us-east1/maintenancePolicies/prod-update-policy&quot;,   }   &quot;rollout_metadata&quot;: {     &quot;projects/cloud-sql/locations/global/rolloutTypes/software_update&quot;: {       &quot;release&quot;:       &quot;projects/cloud-sql/locations/global/releases/cloud-sql-09-28-2018&quot;,       &quot;rollout&quot;:       &quot;projects/cloud-sql/locations/us-east1/rollouts/cloud-sql-09-28-2018-canary&quot;,     },     &quot;projects/cloud-sql/locations/global/rolloutTypes/instance_restart&quot;: {       &quot;release&quot;:       &quot;projects/cloud-sql/locations/global/releases/cloud-sql-09-20-repair&quot;,       &quot;rollout&quot;:       &quot;projects/cloud-sql/locations/us-east1/rollouts/cloud-sql-09-20-repair-100-percent&quot;,     }   }   &quot;tenant_project_id&quot;: &quot;cloud-sql-test-tenant&quot;,   &quot;producer_metadata&quot;: {     &quot;cloud-sql-tier&quot;: &quot;basic&quot;,     &quot;cloud-sql-instance-size&quot;: &quot;1G&quot;,   },   &quot;provisioned_resources&quot;: [     {       &quot;resource-type&quot;: &quot;compute-instance&quot;,       &quot;resource-url&quot;:       &quot;https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1&quot;,     }   ],   &quot;maintenance_schedules&quot;: {     &quot;csa_rollout&quot;: {        &quot;start_time&quot;: {           &quot;seconds&quot;: 1526406431,        },        &quot;end_time&quot;: {           &quot;seconds&quot;: 1535406431,        },     },     &quot;ncsa_rollout&quot;: {        &quot;start_time&quot;: {           &quot;seconds&quot;: 1526406431,        },        &quot;end_time&quot;: {           &quot;seconds&quot;: 1535406431,        },     }   },   &quot;consumer_defined_name&quot;: &quot;my-sql-instance1&quot;, } ```
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1Instance {
    /**
     * consumer_defined_name is the name that is set by the consumer. On the other hand Name field represents system-assigned id of an instance so consumers are not necessarily aware of it. consumer_defined_name is used for notification/UI purposes for consumer to recognize their instances.
     */
    consumerDefinedName?: string | null;
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user.
     */
    labels?: {[key: string]: string} | null;
    /**
     * The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For complete details of MaintenancePolicy, please refer to go/cloud-saas-mw-ug.
     */
    maintenancePolicyNames?: {[key: string]: string} | null;
    /**
     * The MaintenanceSchedule contains the scheduling information of published maintenance schedule.
     */
    maintenanceSchedules?: {
      [key: string]: Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule;
    } | null;
    /**
     * Unique name of the resource. It uses the form:  `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
     */
    name?: string | null;
    /**
     * Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata.
     */
    producerMetadata?: {[key: string]: string} | null;
    /**
     * Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata.
     */
    provisionedResources?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource[];
    /**
     * The map between RolloutType and the corresponding RolloutMetadata. This is only mutated by rollout service. For actuation implementation, this information is pass-through for Rollout management. Producer shall not modify by itself. For update of a single entry in this map, the update field mask shall follow this sementics: go/advanced-field-masks
     */
    rolloutMetadata?: {
      [key: string]: Schema$GoogleCloudSaasacceleratorManagementProvidersV1RolloutMetadata;
    } | null;
    /**
     * Output only. SLO metadata for instance classification in the Standardized dataplane SLO platform. See go/cloud-ssa-standard-slo for feature description.
     */
    sloMetadata?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata;
    /**
     * Software versions that are used to deploy this instance. This can be mutated by rollout services.
     */
    softwareVersions?: {[key: string]: string} | null;
    /**
     * Output only. Current lifecycle state of the resource (e.g. if it&#39;s being created or ready to use).
     */
    state?: string | null;
    /**
     * Output only. ID of the associated GCP tenant project. See go/get-instance-metadata.
     */
    tenantProjectId?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1MaintenanceSchedule {
    /**
     * Can this scheduled update be rescheduled? By default, it&#39;s true and API needs to do explicitly check whether it&#39;s set, if it&#39;s set as false explicitly, it&#39;s false
     */
    canReschedule?: boolean | null;
    /**
     * The scheduled end time for the maintenance.
     */
    endTime?: string | null;
    /**
     * The scheduled start time for the maintenance.
     */
    startTime?: string | null;
  }
  /**
   * Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata {
    /**
     * By default node is eligible if instance is eligible. But individual node might be excluded from SLO by adding entry here. For semantic see SloMetadata.exclusions. If both instance and node level exclusions are present for time period, the node level&#39;s reason will be reported by Eligibility Exporter.
     */
    exclusions?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion[];
    /**
     * The location of the node, if different from instance location.
     */
    location?: string | null;
    /**
     * The id of the node. This should be equal to SaasInstanceNode.node_id.
     */
    nodeId?: string | null;
  }
  /**
   * NotificationMetadata is the notification state for an instance.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1NotificationMetadata {
    /**
     * Whether the instance update has been rescheduled.
     */
    rescheduled?: boolean | null;
    /**
     * The scheduled end time for the maintenance window during which update can be performed on the instance.
     */
    scheduledEndTime?: string | null;
    /**
     * The scheduled start time for the maintenance window during which update can be performed on the instance.
     */
    scheduledStartTime?: string | null;
    /**
     * The target release to be applied to the instance.
     */
    targetRelease?: string | null;
  }
  /**
   * Describes provisioned dataplane resources.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1ProvisionedResource {
    /**
     * Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider&#39;s VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with &#39;compute-&#39;, for example: &#39;compute-instance&#39;, &#39;compute-disk&#39;, &#39;compute-autoscaler&#39;.
     */
    resourceType?: string | null;
    /**
     * URL identifying the resource, e.g. &quot;https://www.googleapis.com/compute/v1/projects/...)&quot;.
     */
    resourceUrl?: string | null;
  }
  /**
   * RolloutMetadata for an actuation instance. It maps to a single RolloutType.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1RolloutMetadata {
    /**
     * Instance level notification metadata.
     */
    notification?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1NotificationMetadata;
    /**
     * The last Release that has been applied to the instance.
     */
    releaseName?: string | null;
    /**
     * The last rollout that has been applied to the instance.
     */
    rolloutName?: string | null;
  }
  /**
   * SloExclusion represents an excusion in SLI calculation applies to all SLOs.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion {
    /**
     * Exclusion duration. No restrictions on the possible values.  When an ongoing operation is taking longer than initially expected, an existing entry in the exclusion list can be updated by extending the duration. This is supported by the subsystem exporting eligibility data as long as such extension is committed at least 10 minutes before the original exclusion expiration - otherwise it is possible that there will be &quot;gaps&quot; in the exclusion application in the exported timeseries.
     */
    exclusionDuration?: string | null;
    /**
     * Start time of the exclusion. No alignment (e.g. to a full minute) needed.
     */
    exclusionStartTime?: string | null;
    /**
     * Human-readable reason for the exclusion. This should be a static string (e.g. &quot;Disruptive update in progress&quot;) and should not contain dynamically generated data (e.g. instance name). Can be left empty.
     */
    reason?: string | null;
    /**
     * Name of an SLI that this exclusion applies to. Can be left empty, signaling that the instance should be excluded from all SLIs defined in the service SLO configuration.
     */
    sliName?: string | null;
  }
  /**
   * SloMetadata contains resources required for proper SLO classification of the instance.
   */
  export interface Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloMetadata {
    /**
     * List of SLO exclusion windows. When multiple entries in the list match (matching the exclusion time-window against current time point) the exclusion reason used in the first matching entry will be published.  It is not needed to include expired exclusion in this list, as only the currently applicable exclusions are taken into account by the eligibility exporting subsystem (the historical state of exclusions will be reflected in the historically produced timeseries regardless of the current state).  This field can be used to mark the instance as temporary ineligible for the purpose of SLO calculation. For permanent instance SLO exclusion, a dedicated tier name can be used that does not have targets specified in the service SLO configuration.
     */
    exclusions?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1SloExclusion[];
    /**
     * Optional: list of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch.
     */
    nodes?: Schema$GoogleCloudSaasacceleratorManagementProvidersV1NodeSloMetadata[];
    /**
     * Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration.  Field is mandatory and must not be empty.
     */
    tier?: string | null;
  }
  /**
   * A Cloud Filestore instance.
   */
  export interface Schema$Instance {
    /**
     * Output only. The time when the instance was created.
     */
    createTime?: string | null;
    /**
     * Optional. A description of the instance (2048 characters or less).
     */
    description?: string | null;
    /**
     * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
     */
    etag?: string | null;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    fileShares?: Schema$FileShareConfig[];
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     */
    name?: string | null;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: Schema$NetworkConfig[];
    /**
     * Output only. The instance state.
     */
    state?: string | null;
    /**
     * Output only. Additional information about the instance state, if available.
     */
    statusMessage?: string | null;
    /**
     * The service tier of the instance.
     */
    tier?: string | null;
  }
  /**
   * ListInstancesResponse is the result of ListInstancesRequest.
   */
  export interface Schema$ListInstancesResponse {
    /**
     * A list of instances in the project for the specified location.  If the {location} value in the request is &quot;-&quot;, the response contains a list of instances from all locations. If any location is unreachable, the response will only return instances in reachable locations and the &quot;unreachable&quot; field will be populated with a list of unreachable locations.
     */
    instances?: Schema$Instance[];
    /**
     * The token you can use to retrieve the next page of results. Not returned if there are no more results in the list.
     */
    nextPageToken?: string | null;
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
   * A resource that represents Google Cloud Platform location.
   */
  export interface Schema$Location {
    /**
     * The friendly name for this location, typically a nearby city name. For example, &quot;Tokyo&quot;.
     */
    displayName?: string | null;
    /**
     * Cross-service attributes for the location. For example      {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
     */
    labels?: {[key: string]: string} | null;
    /**
     * The canonical id for this location. For example: `&quot;us-east1&quot;`.
     */
    locationId?: string | null;
    /**
     * Service-specific metadata. For example the available capacity at the given location.
     */
    metadata?: {[key: string]: any} | null;
    /**
     * Resource name for the location, which may vary between implementations. For example: `&quot;projects/example-project/locations/us-east1&quot;`
     */
    name?: string | null;
  }
  /**
   * Network configuration for the instance.
   */
  export interface Schema$NetworkConfig {
    /**
     * Output only. IPv4 addresses in the format {octet 1}.{octet 2}.{octet 3}.{octet 4} or IPv6 addresses in the format {block 1}:{block 2}:{block 3}:{block 4}:{block 5}:{block 6}:{block 7}:{block 8}.
     */
    ipAddresses?: string[] | null;
    /**
     * Internet protocol versions for which the instance has IP addresses assigned. For this version, only MODE_IPV4 is supported.
     */
    modes?: string[] | null;
    /**
     * The name of the Google Compute Engine [VPC network](/compute/docs/networks-and-firewalls#networks) to which the instance is connected.
     */
    network?: string | null;
    /**
     * A /29 CIDR block in one of the [internal IP address ranges](https://www.arin.net/knowledge/address_filters.html) that identifies the range of IP addresses reserved for this instance. For example, 10.0.0.0/29 or 192.168.0.0/29. The range you specify can&#39;t overlap with either existing subnets or assigned IP address ranges for other Cloud Filestore instances in the selected VPC network.
     */
    reservedIpRange?: string | null;
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
    error?: Schema$Status;
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$OperationMetadata {
    /**
     * [Output only] API version used to start the operation.
     */
    apiVersion?: string | null;
    /**
     * [Output only] Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    cancelRequested?: boolean | null;
    /**
     * [Output only] The time the operation was created.
     */
    createTime?: string | null;
    /**
     * [Output only] The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * [Output only] Human-readable status of the operation, if any.
     */
    statusDetail?: string | null;
    /**
     * [Output only] Server-defined resource path for the target of the operation.
     */
    target?: string | null;
    /**
     * [Output only] Name of the verb executed by the operation.
     */
    verb?: string | null;
  }
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details.  You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
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
    instances: Resource$Projects$Locations$Instances;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.instances = new Resource$Projects$Locations$Instances(this.context);
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
    }

    /**
     * file.projects.locations.get
     * @desc Gets information about a location.
     * @alias file.projects.locations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Resource name for the location.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Location>;
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
        | BodyResponseCallback<Schema$Location>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Location>,
      callback?: BodyResponseCallback<Schema$Location>
    ): void | GaxiosPromise<Schema$Location> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Location>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Location>(parameters);
      }
    }

    /**
     * file.projects.locations.list
     * @desc Lists information about the supported locations for this service.
     * @alias file.projects.locations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter The standard list filter.
     * @param {string} params.name The resource that owns the locations collection, if applicable.
     * @param {integer=} params.pageSize The standard list page size.
     * @param {string=} params.pageToken The standard list page token.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListLocationsResponse>;
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
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListLocationsResponse>,
      callback?: BodyResponseCallback<Schema$ListLocationsResponse>
    ): void | GaxiosPromise<Schema$ListLocationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$ListLocationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLocationsResponse>(parameters);
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
     * Resource name for the location.
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
     * The standard list filter.
     */
    filter?: string;
    /**
     * The resource that owns the locations collection, if applicable.
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

  export class Resource$Projects$Locations$Instances {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * file.projects.locations.instances.create
     * @desc Creates an instance.
     * @alias file.projects.locations.instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.instanceId The name of the instance to create. The name must be unique for the specified project and location.
     * @param {string} params.parent The instance's project and location, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**.
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
      params?: Params$Resource$Projects$Locations$Instances$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Instances$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Create
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.delete
     * @desc Deletes an instance.
     * @alias file.projects.locations.instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Instances$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Instances$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Delete
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.get
     * @desc Gets the details of a specific instance.
     * @alias file.projects.locations.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Instances$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Instance>;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Instances$Get,
      callback: BodyResponseCallback<Schema$Instance>
    ): void;
    get(callback: BodyResponseCallback<Schema$Instance>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Get
        | BodyResponseCallback<Schema$Instance>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Instance>,
      callback?: BodyResponseCallback<Schema$Instance>
    ): void | GaxiosPromise<Schema$Instance> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Instance>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Instance>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.list
     * @desc Lists all instances in a project for either a specified location or for all locations.
     * @alias file.projects.locations.instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter List filter.
     * @param {string=} params.orderBy Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer=} params.pageSize The maximum number of items to return.
     * @param {string=} params.pageToken The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent The project and location for which to retrieve instance information, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the {location} value.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Projects$Locations$Instances$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListInstancesResponse>;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Instances$List,
      callback: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListInstancesResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$List
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListInstancesResponse>,
      callback?: BodyResponseCallback<Schema$ListInstancesResponse>
    ): void | GaxiosPromise<Schema$ListInstancesResponse> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/instances').replace(
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
        createAPIRequest<Schema$ListInstancesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListInstancesResponse>(parameters);
      }
    }

    /**
     * file.projects.locations.instances.patch
     * @desc Updates the settings of a specific instance.
     * @alias file.projects.locations.instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     * @param {string=} params.updateMask Mask of fields to update.  At least one path must be supplied in this field.  The elements of the repeated paths field may only include these fields: "description"
     * @param {().Instance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
      params?: Params$Resource$Projects$Locations$Instances$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Instances$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Instances$Patch
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Instances$Create
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the instance to create. The name must be unique for the specified project and location.
     */
    instanceId?: string;
    /**
     * The instance's project and location, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }
  export interface Params$Resource$Projects$Locations$Instances$Delete
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Get
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The instance resource name, in the format projects/{project_id}/locations/{location}/instances/{instance_id}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$List
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * List filter.
     */
    filter?: string;
    /**
     * Sort results. Supported values are "name", "name desc" or "" (unsorted).
     */
    orderBy?: string;
    /**
     * The maximum number of items to return.
     */
    pageSize?: number;
    /**
     * The next_page_token value to use if there are additional results to retrieve for this list request.
     */
    pageToken?: string;
    /**
     * The project and location for which to retrieve instance information, in the format projects/{project_id}/locations/{location}. In Cloud Filestore, locations map to GCP zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the {location} value.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Instances$Patch
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Output only. The resource name of the instance, in the format projects/{project_id}/locations/{location_id}/instances/{instance_id}.
     */
    name?: string;
    /**
     * Mask of fields to update.  At least one path must be supplied in this field.  The elements of the repeated paths field may only include these fields: "description"
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Instance;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * file.projects.locations.operations.cancel
     * @desc Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.  Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     * @alias file.projects.locations.operations.cancel
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
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * file.projects.locations.operations.delete
     * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @alias file.projects.locations.operations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource to be deleted.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
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
        | BodyResponseCallback<Schema$Empty>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback?: BodyResponseCallback<Schema$Empty>
    ): void | GaxiosPromise<Schema$Empty> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }

    /**
     * file.projects.locations.operations.get
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @alias file.projects.locations.operations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Operation>;
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
        | BodyResponseCallback<Schema$Operation>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$Operation>,
      callback?: BodyResponseCallback<Schema$Operation>
    ): void | GaxiosPromise<Schema$Operation> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * file.projects.locations.operations.list
     * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/x/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/x}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
     * @alias file.projects.locations.operations.list
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
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListOperationsResponse>;
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
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ListOperationsResponse>,
      callback?: BodyResponseCallback<Schema$ListOperationsResponse>
    ): void | GaxiosPromise<Schema$ListOperationsResponse> {
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

      const rootUrl = options.rootUrl || 'https://file.googleapis.com/';
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
        createAPIRequest<Schema$ListOperationsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListOperationsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

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
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get
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
  export interface Params$Resource$Projects$Locations$Operations$List
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
