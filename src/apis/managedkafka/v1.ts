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

export namespace managedkafka_v1 {
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
   * Managed Service for Apache Kafka API
   *
   * Manage Apache Kafka clusters and resources.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const managedkafka = google.managedkafka('v1');
   * ```
   */
  export class Managedkafka {
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
   * The configuration of access to the Kafka cluster.
   */
  export interface Schema$AccessConfig {
    /**
     * Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka cluster. Minimum of 1 network is required. Maximum 10 networks can be specified.
     */
    networkConfigs?: Schema$NetworkConfig[];
  }
  /**
   * Represents the set of ACLs for a given Kafka Resource Pattern, which consists of resource_type, resource_name and pattern_type.
   */
  export interface Schema$Acl {
    /**
     * Required. The ACL entries that apply to the resource pattern. The maximum number of allowed entries 100.
     */
    aclEntries?: Schema$AclEntry[];
    /**
     * Optional. `etag` is used for concurrency control. An `etag` is returned in the response to `GetAcl` and `CreateAcl`. Callers are required to put that etag in the request to `UpdateAcl` to ensure that their change will be applied to the same version of the acl that exists in the Kafka Cluster. A terminal 'T' character in the etag indicates that the AclEntries were truncated; more entries for the Acl exist on the Kafka Cluster, but can't be returned in the Acl due to repeated field limits.
     */
    etag?: string | null;
    /**
     * Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name\}` `consumerGroup/{resource_name\}` `transactionalId/{resource_name\}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name\}` `consumerGroupPrefixed/{resource_name\}` `transactionalIdPrefixed/{resource_name\}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/x`) `allConsumerGroups` (represents `consumerGroup/x`) `allTransactionalIds` (represents `transactionalId/x`)
     */
    name?: string | null;
    /**
     * Output only. The ACL pattern type derived from the name. One of: LITERAL, PREFIXED.
     */
    patternType?: string | null;
    /**
     * Output only. The ACL resource name derived from the name. For cluster resource_type, this is always "kafka-cluster". Can be the wildcard literal "*".
     */
    resourceName?: string | null;
    /**
     * Output only. The ACL resource type derived from the name. One of: CLUSTER, TOPIC, GROUP, TRANSACTIONAL_ID.
     */
    resourceType?: string | null;
  }
  /**
   * Represents the access granted for a given Resource Pattern in an ACL.
   */
  export interface Schema$AclEntry {
    /**
     * Required. The host. Must be set to "*" for Managed Service for Apache Kafka.
     */
    host?: string | null;
    /**
     * Required. The operation type. Allowed values are (case insensitive): ALL, READ, WRITE, CREATE, DELETE, ALTER, DESCRIBE, CLUSTER_ACTION, DESCRIBE_CONFIGS, ALTER_CONFIGS, and IDEMPOTENT_WRITE. See https://kafka.apache.org/documentation/#operations_resources_and_protocols for valid combinations of resource_type and operation for different Kafka API requests.
     */
    operation?: string | null;
    /**
     * Required. The permission type. Accepted values are (case insensitive): ALLOW, DENY.
     */
    permissionType?: string | null;
    /**
     * Required. The principal. Specified as Google Cloud account, with the Kafka StandardAuthorizer prefix "User:". For example: "User:test-kafka-client@test-project.iam.gserviceaccount.com". Can be the wildcard "User:*" to refer to all users.
     */
    principal?: string | null;
  }
  /**
   * Response for AddAclEntry.
   */
  export interface Schema$AddAclEntryResponse {
    /**
     * The updated acl.
     */
    acl?: Schema$Acl;
    /**
     * Whether the acl was created as a result of adding the acl entry.
     */
    aclCreated?: boolean | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$CancelOperationRequest {}
  /**
   * A capacity configuration of a Kafka cluster.
   */
  export interface Schema$CapacityConfig {
    /**
     * Required. The memory to provision for the cluster in bytes. The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).
     */
    memoryBytes?: string | null;
    /**
     * Required. The number of vCPUs to provision for the cluster. Minimum: 3.
     */
    vcpuCount?: string | null;
  }
  /**
   * An Apache Kafka cluster deployed in a location.
   */
  export interface Schema$Cluster {
    /**
     * Required. Capacity configuration for the Kafka cluster.
     */
    capacityConfig?: Schema$CapacityConfig;
    /**
     * Output only. The time when the cluster was created.
     */
    createTime?: string | null;
    /**
     * Required. Configuration properties for a Kafka cluster deployed to Google Cloud Platform.
     */
    gcpConfig?: Schema$GcpConfig;
    /**
     * Optional. Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the cluster. Structured like: projects/{project_number\}/locations/{location\}/clusters/{cluster_id\}
     */
    name?: string | null;
    /**
     * Optional. Rebalance configuration for the Kafka cluster.
     */
    rebalanceConfig?: Schema$RebalanceConfig;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzi?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. The current state of the cluster.
     */
    state?: string | null;
    /**
     * Output only. The time when the cluster was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * The configuration of access to the Kafka Connect cluster.
   */
  export interface Schema$ConnectAccessConfig {
    /**
     * Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka Connect cluster. Minimum of 1 network is required. Maximum 10 networks can be specified.
     */
    networkConfigs?: Schema$ConnectNetworkConfig[];
  }
  /**
   * An Apache Kafka Connect cluster deployed in a location.
   */
  export interface Schema$ConnectCluster {
    /**
     * Required. Capacity configuration for the Kafka Connect cluster.
     */
    capacityConfig?: Schema$CapacityConfig;
    /**
     * Optional. Configurations for the worker that are overridden from the defaults. The key of the map is a Kafka Connect worker property name, for example: `exactly.once.source.support`.
     */
    config?: {[key: string]: string} | null;
    /**
     * Output only. The time when the cluster was created.
     */
    createTime?: string | null;
    /**
     * Required. Configuration properties for a Kafka Connect cluster deployed to Google Cloud Platform.
     */
    gcpConfig?: Schema$ConnectGcpConfig;
    /**
     * Required. Immutable. The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}
     */
    kafkaCluster?: string | null;
    /**
     * Optional. Labels as key value pairs.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number\}/locations/{location\}/connectClusters/{connect_cluster_id\}
     */
    name?: string | null;
    /**
     * Output only. The current state of the cluster.
     */
    state?: string | null;
    /**
     * Output only. The time when the cluster was last updated.
     */
    updateTime?: string | null;
  }
  /**
   * Configuration properties for a Kafka Connect cluster deployed to Google Cloud Platform.
   */
  export interface Schema$ConnectGcpConfig {
    /**
     * Required. Access configuration for the Kafka Connect cluster.
     */
    accessConfig?: Schema$ConnectAccessConfig;
    /**
     * Optional. Secrets to load into workers. Exact SecretVersions from Secret Manager must be provided -- aliases are not supported. Up to 32 secrets may be loaded into one cluster. Format: projects//secrets//versions/
     */
    secretPaths?: string[] | null;
  }
  /**
   * The configuration of a Virtual Private Cloud (VPC) network that can access the Kafka Connect cluster.
   */
  export interface Schema$ConnectNetworkConfig {
    /**
     * Optional. Additional subnets may be specified. They may be in another region, but must be in the same VPC network. The Connect workers can communicate with network endpoints in either the primary or additional subnets.
     */
    additionalSubnets?: string[] | null;
    /**
     * Optional. Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog
     */
    dnsDomainNames?: string[] | null;
    /**
     * Required. VPC subnet to make available to the Kafka Connect cluster. Structured like: projects/{project\}/regions/{region\}/subnetworks/{subnet_id\} It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster. The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).
     */
    primarySubnet?: string | null;
  }
  /**
   * A Kafka Connect connector in a given ConnectCluster.
   */
  export interface Schema$Connector {
    /**
     * Optional. Connector config as keys/values. The keys of the map are connector property names, for example: `connector.class`, `tasks.max`, `key.converter`.
     */
    configs?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the connector. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connect_cluster\}/connectors/{connector\}
     */
    name?: string | null;
    /**
     * Output only. The current state of the connector.
     */
    state?: string | null;
    /**
     * Optional. Restarts the individual tasks of a Connector.
     */
    taskRestartPolicy?: Schema$TaskRetryPolicy;
  }
  /**
   * A Kafka consumer group in a given cluster.
   */
  export interface Schema$ConsumerGroup {
    /**
     * Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumer_group\}
     */
    name?: string | null;
    /**
     * Optional. Metadata for this consumer group for all topics it has metadata for. The key of the map is a topic name, structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}
     */
    topics?: {[key: string]: Schema$ConsumerTopicMetadata} | null;
  }
  /**
   * Metadata for a consumer group corresponding to a specific partition.
   */
  export interface Schema$ConsumerPartitionMetadata {
    /**
     * Optional. The associated metadata for this partition, or empty if it does not exist.
     */
    metadata?: string | null;
    /**
     * Required. The current offset for this partition, or 0 if no offset has been committed.
     */
    offset?: string | null;
  }
  /**
   * Metadata for a consumer group corresponding to a specific topic.
   */
  export interface Schema$ConsumerTopicMetadata {
    /**
     * Optional. Metadata for this consumer group and topic for all partition indexes it has metadata for.
     */
    partitions?: {[key: string]: Schema$ConsumerPartitionMetadata} | null;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Configuration properties for a Kafka cluster deployed to Google Cloud Platform.
   */
  export interface Schema$GcpConfig {
    /**
     * Required. Access configuration for the Kafka cluster.
     */
    accessConfig?: Schema$AccessConfig;
    /**
     * Optional. Immutable. The Cloud KMS Key name to use for encryption. The key must be located in the same region as the cluster and cannot be changed. Structured like: projects/{project\}/locations/{location\}/keyRings/{key_ring\}/cryptoKeys/{crypto_key\}.
     */
    kmsKey?: string | null;
  }
  /**
   * Response for ListAcls.
   */
  export interface Schema$ListAclsResponse {
    /**
     * The list of acls in the requested parent. The order of the acls is unspecified.
     */
    acls?: Schema$Acl[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListClusters.
   */
  export interface Schema$ListClustersResponse {
    /**
     * The list of Clusters in the requested parent.
     */
    clusters?: Schema$Cluster[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for ListConnectClusters.
   */
  export interface Schema$ListConnectClustersResponse {
    /**
     * The list of Connect clusters in the requested parent.
     */
    connectClusters?: Schema$ConnectCluster[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response for ListConnectors.
   */
  export interface Schema$ListConnectorsResponse {
    /**
     * The list of connectors in the requested parent.
     */
    connectors?: Schema$Connector[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
  }
  /**
   * Response for ListConsumerGroups.
   */
  export interface Schema$ListConsumerGroupsResponse {
    /**
     * The list of consumer group in the requested parent. The order of the consumer groups is unspecified.
     */
    consumerGroups?: Schema$ConsumerGroup[];
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
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
   * Response for ListTopics.
   */
  export interface Schema$ListTopicsResponse {
    /**
     * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
     */
    nextPageToken?: string | null;
    /**
     * The list of topics in the requested parent. The order of the topics is unspecified.
     */
    topics?: Schema$Topic[];
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
   * The configuration of a Virtual Private Cloud (VPC) network that can access the Kafka cluster.
   */
  export interface Schema$NetworkConfig {
    /**
     * Required. Name of the VPC subnet in which to create Private Service Connect (PSC) endpoints for the Kafka brokers and bootstrap address. Structured like: projects/{project\}/regions/{region\}/subnetworks/{subnet_id\} The subnet must be located in the same region as the Kafka cluster. The project may differ. Multiple subnets from the same parent network must not be specified.
     */
    subnet?: string | null;
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
     * Output only. The time the operation was created.
     */
    createTime?: string | null;
    /**
     * Output only. The time the operation finished running.
     */
    endTime?: string | null;
    /**
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
     */
    requestedCancellation?: boolean | null;
    /**
     * Output only. Human-readable status of the operation, if any.
     */
    statusMessage?: string | null;
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
   * Request for PauseConnector.
   */
  export interface Schema$PauseConnectorRequest {}
  /**
   * Response for PauseConnector.
   */
  export interface Schema$PauseConnectorResponse {}
  /**
   * Defines rebalancing behavior of a Kafka cluster.
   */
  export interface Schema$RebalanceConfig {
    /**
     * Optional. The rebalance behavior for the cluster. When not specified, defaults to `NO_REBALANCE`.
     */
    mode?: string | null;
  }
  /**
   * Response for RemoveAclEntry.
   */
  export interface Schema$RemoveAclEntryResponse {
    /**
     * The updated acl. Returned if the removed acl entry was not the last entry in the acl.
     */
    acl?: Schema$Acl;
    /**
     * Returned with value true if the removed acl entry was the last entry in the acl, resulting in acl deletion.
     */
    aclDeleted?: boolean | null;
  }
  /**
   * Request for RestartConnector.
   */
  export interface Schema$RestartConnectorRequest {}
  /**
   * Response for RestartConnector.
   */
  export interface Schema$RestartConnectorResponse {}
  /**
   * Request for ResumeConnector.
   */
  export interface Schema$ResumeConnectorRequest {}
  /**
   * Response for ResumeConnector.
   */
  export interface Schema$ResumeConnectorResponse {}
  /**
   * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
   */
  export interface Schema$Status {
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
   * Request for StopConnector.
   */
  export interface Schema$StopConnectorRequest {}
  /**
   * Response for StopConnector.
   */
  export interface Schema$StopConnectorResponse {}
  /**
   * Task Retry Policy is implemented on a best-effort basis. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. Note that the delay between consecutive task restarts may not always precisely match the configured settings. This can happen when the ConnectCluster is in rebalancing state or if the ConnectCluster is unresponsive etc. The default values for minimum and maximum backoffs are 60 seconds and 30 minutes respectively.
   */
  export interface Schema$TaskRetryPolicy {
    /**
     * Optional. The maximum amount of time to wait before retrying a failed task. This sets an upper bound for the backoff delay.
     */
    maximumBackoff?: string | null;
    /**
     * Optional. The minimum amount of time to wait before retrying a failed task. This sets a lower bound for the backoff delay.
     */
    minimumBackoff?: string | null;
  }
  /**
   * A Kafka topic in a given cluster.
   */
  export interface Schema$Topic {
    /**
     * Optional. Configurations for the topic that are overridden from the cluster defaults. The key of the map is a Kafka topic property name, for example: `cleanup.policy`, `compression.type`.
     */
    configs?: {[key: string]: string} | null;
    /**
     * Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}
     */
    name?: string | null;
    /**
     * Required. The number of partitions this topic has. The partition count can only be increased, not decreased. Please note that if partitions are increased for a topic that has a key, the partitioning logic or the ordering of the messages will be affected.
     */
    partitionCount?: number | null;
    /**
     * Required. Immutable. The number of replicas of each partition. A replication factor of 3 is recommended for high availability.
     */
    replicationFactor?: number | null;
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
    clusters: Resource$Projects$Locations$Clusters;
    connectClusters: Resource$Projects$Locations$Connectclusters;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Clusters(this.context);
      this.connectClusters = new Resource$Projects$Locations$Connectclusters(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Location>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Location>>
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

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/locations').replace(
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
     * Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
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

  export class Resource$Projects$Locations$Clusters {
    context: APIRequestContext;
    acls: Resource$Projects$Locations$Clusters$Acls;
    consumerGroups: Resource$Projects$Locations$Clusters$Consumergroups;
    topics: Resource$Projects$Locations$Clusters$Topics;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.acls = new Resource$Projects$Locations$Clusters$Acls(this.context);
      this.consumerGroups =
        new Resource$Projects$Locations$Clusters$Consumergroups(this.context);
      this.topics = new Resource$Projects$Locations$Clusters$Topics(
        this.context
      );
    }

    /**
     * Creates a new cluster in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clusters').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the properties of a single cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Cluster>>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Cluster>,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Get,
      callback: BodyResponseCallback<Schema$Cluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$Cluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Get
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Cluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Cluster>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Cluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Cluster>(parameters);
      }
    }

    /**
     * Lists the clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListClustersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$List,
      callback: BodyResponseCallback<Schema$ListClustersResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListClustersResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$List
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListClustersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/clusters').replace(
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
        createAPIRequest<Schema$ListClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListClustersResponse>(parameters);
      }
    }

    /**
     * Updates the properties of a single cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Clusters$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     */
    clusterId?: string;
    /**
     * Required. The parent region in which to create the cluster. Structured like `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Delete
    extends StandardParameters {
    /**
     * Required. The name of the cluster to delete.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Get
    extends StandardParameters {
    /**
     * Required. The name of the cluster whose configuration to return.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$List
    extends StandardParameters {
    /**
     * Optional. Filter expression for the result.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent location whose clusters are to be listed. Structured like `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the cluster. Structured like: projects/{project_number\}/locations/{location\}/clusters/{cluster_id\}
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Cluster;
  }

  export class Resource$Projects$Locations$Clusters$Acls {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Incremental update: Adds an acl entry to an acl. Creates the acl if it does not exist yet.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    addAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    addAclEntry(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$AddAclEntryResponse>>;
    addAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    addAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry,
      options: MethodOptions | BodyResponseCallback<Schema$AddAclEntryResponse>,
      callback: BodyResponseCallback<Schema$AddAclEntryResponse>
    ): void;
    addAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry,
      callback: BodyResponseCallback<Schema$AddAclEntryResponse>
    ): void;
    addAclEntry(
      callback: BodyResponseCallback<Schema$AddAclEntryResponse>
    ): void;
    addAclEntry(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry
        | BodyResponseCallback<Schema$AddAclEntryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AddAclEntryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AddAclEntryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$AddAclEntryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+acl}:addAclEntry').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['acl'],
        pathParams: ['acl'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$AddAclEntryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AddAclEntryResponse>(parameters);
      }
    }

    /**
     * Creates a new acl in the given project, location, and cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Acl>>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Acl>,
      callback: BodyResponseCallback<Schema$Acl>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Create,
      callback: BodyResponseCallback<Schema$Acl>
    ): void;
    create(callback: BodyResponseCallback<Schema$Acl>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$Create
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Acl>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Acls$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/acls').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Acl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Acl>(parameters);
      }
    }

    /**
     * Deletes an acl.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$Delete
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
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Acls$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the properties of a single acl.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Acl>>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Acl>,
      callback: BodyResponseCallback<Schema$Acl>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Get,
      callback: BodyResponseCallback<Schema$Acl>
    ): void;
    get(callback: BodyResponseCallback<Schema$Acl>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$Get
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Acl>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Acls$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Acl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Acl>(parameters);
      }
    }

    /**
     * Lists the acls in a given cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Clusters$Acls$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListAclsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Acls$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Acls$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListAclsResponse>,
      callback: BodyResponseCallback<Schema$ListAclsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Acls$List,
      callback: BodyResponseCallback<Schema$ListAclsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAclsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$List
        | BodyResponseCallback<Schema$ListAclsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAclsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAclsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListAclsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Acls$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/acls').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ListAclsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAclsResponse>(parameters);
      }
    }

    /**
     * Updates the properties of a single acl.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Acl>>;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Acl>,
      callback: BodyResponseCallback<Schema$Acl>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Patch,
      callback: BodyResponseCallback<Schema$Acl>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Acl>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$Patch
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Acl>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Acl>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Acls$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Acl>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Acl>(parameters);
      }
    }

    /**
     * Incremental update: Removes an acl entry from an acl. Deletes the acl if its acl entries become empty (i.e. if the removed entry was the last one in the acl).
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    removeAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    removeAclEntry(
      params?: Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RemoveAclEntryResponse>>;
    removeAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    removeAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RemoveAclEntryResponse>,
      callback: BodyResponseCallback<Schema$RemoveAclEntryResponse>
    ): void;
    removeAclEntry(
      params: Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry,
      callback: BodyResponseCallback<Schema$RemoveAclEntryResponse>
    ): void;
    removeAclEntry(
      callback: BodyResponseCallback<Schema$RemoveAclEntryResponse>
    ): void;
    removeAclEntry(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry
        | BodyResponseCallback<Schema$RemoveAclEntryResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RemoveAclEntryResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RemoveAclEntryResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RemoveAclEntryResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+acl}:removeAclEntry').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
            apiVersion: '',
          },
          options
        ),
        params,
        requiredParams: ['acl'],
        pathParams: ['acl'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$RemoveAclEntryResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RemoveAclEntryResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry
    extends StandardParameters {
    /**
     * Required. The name of the acl to add the acl entry to. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    acl?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AclEntry;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the acl, which will become the final component of the acl's name. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name\}` `consumerGroup/{resource_name\}` `transactionalId/{resource_name\}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name\}` `consumerGroupPrefixed/{resource_name\}` `transactionalIdPrefixed/{resource_name\}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/x`) `allConsumerGroups` (represents `consumerGroup/x`) `allTransactionalIds` (represents `transactionalId/x`)
     */
    aclId?: string;
    /**
     * Required. The parent cluster in which to create the acl. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Acl;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Delete
    extends StandardParameters {
    /**
     * Required. The name of the acl to delete. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Get
    extends StandardParameters {
    /**
     * Required. The name of the acl to return. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of acls to return. The service may return fewer than this value. If unset or zero, all acls for the parent is returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListAcls` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAcls` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent cluster whose acls are to be listed. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Patch
    extends StandardParameters {
    /**
     * Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name\}` `consumerGroup/{resource_name\}` `transactionalId/{resource_name\}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name\}` `consumerGroupPrefixed/{resource_name\}` `transactionalIdPrefixed/{resource_name\}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/x`) `allConsumerGroups` (represents `consumerGroup/x`) `allTransactionalIds` (represents `transactionalId/x`)
     */
    name?: string;
    /**
     * Optional. Field mask is used to specify the fields to be overwritten in the Acl resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Acl;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry
    extends StandardParameters {
    /**
     * Required. The name of the acl to remove the acl entry from. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    acl?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AclEntry;
  }

  export class Resource$Projects$Locations$Clusters$Consumergroups {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Deletes a single consumer group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete
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
        {}) as Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the properties of a single consumer group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Consumergroups$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConsumerGroup>>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConsumerGroup>,
      callback: BodyResponseCallback<Schema$ConsumerGroup>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Get,
      callback: BodyResponseCallback<Schema$ConsumerGroup>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConsumerGroup>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Consumergroups$Get
        | BodyResponseCallback<Schema$ConsumerGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsumerGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsumerGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConsumerGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Consumergroups$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Consumergroups$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ConsumerGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsumerGroup>(parameters);
      }
    }

    /**
     * Lists the consumer groups in a given cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$Consumergroups$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConsumerGroupsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConsumerGroupsResponse>,
      callback: BodyResponseCallback<Schema$ListConsumerGroupsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$List,
      callback: BodyResponseCallback<Schema$ListConsumerGroupsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConsumerGroupsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Consumergroups$List
        | BodyResponseCallback<Schema$ListConsumerGroupsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConsumerGroupsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConsumerGroupsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConsumerGroupsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Consumergroups$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Consumergroups$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/consumerGroups').replace(
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
        createAPIRequest<Schema$ListConsumerGroupsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConsumerGroupsResponse>(parameters);
      }
    }

    /**
     * Updates the properties of a single consumer group.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConsumerGroup>>;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$ConsumerGroup>,
      callback: BodyResponseCallback<Schema$ConsumerGroup>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch,
      callback: BodyResponseCallback<Schema$ConsumerGroup>
    ): void;
    patch(callback: BodyResponseCallback<Schema$ConsumerGroup>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch
        | BodyResponseCallback<Schema$ConsumerGroup>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConsumerGroup>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConsumerGroup>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConsumerGroup>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ConsumerGroup>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConsumerGroup>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete
    extends StandardParameters {
    /**
     * Required. The name of the consumer group to delete. `projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumerGroup\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$Get
    extends StandardParameters {
    /**
     * Required. The name of the consumer group whose configuration to return. `projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumerGroup\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of consumer groups to return. The service may return fewer than this value. If unset or zero, all consumer groups for the parent is returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListConsumerGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConsumerGroups` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent cluster whose consumer groups are to be listed. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumer_group\}
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the ConsumerGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConsumerGroup;
  }

  export class Resource$Projects$Locations$Clusters$Topics {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new topic in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Clusters$Topics$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Topic>>;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Create,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    create(callback: BodyResponseCallback<Schema$Topic>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Topics$Create
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Topic>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Topics$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Topics$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/topics').replace(
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
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * Deletes a single topic.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Clusters$Topics$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Topics$Delete
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
        {}) as Params$Resource$Projects$Locations$Clusters$Topics$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clusters$Topics$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the properties of a single topic.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Clusters$Topics$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Topic>>;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Get,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    get(callback: BodyResponseCallback<Schema$Topic>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Topics$Get
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Topic>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Topics$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Topics$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }

    /**
     * Lists the topics in a given cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Clusters$Topics$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Clusters$Topics$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListTopicsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Topics$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Topics$List,
      options: MethodOptions | BodyResponseCallback<Schema$ListTopicsResponse>,
      callback: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Clusters$Topics$List,
      callback: BodyResponseCallback<Schema$ListTopicsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Topics$List
        | BodyResponseCallback<Schema$ListTopicsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListTopicsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListTopicsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListTopicsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Topics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Topics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/topics').replace(
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
        createAPIRequest<Schema$ListTopicsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListTopicsResponse>(parameters);
      }
    }

    /**
     * Updates the properties of a single topic.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Clusters$Topics$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Topic>>;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Topic>,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Clusters$Topics$Patch,
      callback: BodyResponseCallback<Schema$Topic>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Topic>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clusters$Topics$Patch
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Topic>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Topic>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clusters$Topics$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Clusters$Topics$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Topic>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Topic>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clusters$Topics$Create
    extends StandardParameters {
    /**
     * Required. The parent cluster in which to create the topic. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    parent?: string;
    /**
     * Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     */
    topicId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Topics$Delete
    extends StandardParameters {
    /**
     * Required. The name of the topic to delete. `projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Topics$Get
    extends StandardParameters {
    /**
     * Required. The name of the topic whose configuration to return. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Topics$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent is returned.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent cluster whose topics are to be listed. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Topics$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the Topic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Topic;
  }

  export class Resource$Projects$Locations$Connectclusters {
    context: APIRequestContext;
    connectors: Resource$Projects$Locations$Connectclusters$Connectors;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.connectors =
        new Resource$Projects$Locations$Connectclusters$Connectors(
          this.context
        );
    }

    /**
     * Creates a new Kafka Connect cluster in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connectclusters$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Create,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    create(callback: BodyResponseCallback<Schema$Operation>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Create
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectClusters').replace(
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Deletes a single Connect cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connectclusters$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Delete,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Delete
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }

    /**
     * Returns the properties of a single Kafka Connect cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connectclusters$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ConnectCluster>>;
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Get,
      options: MethodOptions | BodyResponseCallback<Schema$ConnectCluster>,
      callback: BodyResponseCallback<Schema$ConnectCluster>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Get,
      callback: BodyResponseCallback<Schema$ConnectCluster>
    ): void;
    get(callback: BodyResponseCallback<Schema$ConnectCluster>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Get
        | BodyResponseCallback<Schema$ConnectCluster>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ConnectCluster>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ConnectCluster>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ConnectCluster>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connectclusters$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$ConnectCluster>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ConnectCluster>(parameters);
      }
    }

    /**
     * Lists the Kafka Connect clusters in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connectclusters$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectClustersResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectClustersResponse>,
      callback: BodyResponseCallback<Schema$ListConnectClustersResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$List,
      callback: BodyResponseCallback<Schema$ListConnectClustersResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListConnectClustersResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$List
        | BodyResponseCallback<Schema$ListConnectClustersResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectClustersResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectClustersResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectClustersResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connectclusters$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectClusters').replace(
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
        createAPIRequest<Schema$ListConnectClustersResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectClustersResponse>(parameters);
      }
    }

    /**
     * Updates the properties of a single Kafka Connect cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connectclusters$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Operation>,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Patch,
      callback: BodyResponseCallback<Schema$Operation>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Operation>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Patch
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Connectclusters$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Operation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connectclusters$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     */
    connectClusterId?: string;
    /**
     * Required. The parent project/location in which to create the Kafka Connect cluster. Structured like `projects/{project\}/locations/{location\}/`.
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectCluster;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Delete
    extends StandardParameters {
    /**
     * Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Get
    extends StandardParameters {
    /**
     * Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$List
    extends StandardParameters {
    /**
     * Optional. Filter expression for the result.
     */
    filter?: string;
    /**
     * Optional. Order by fields for the result.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of Connect clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListConnectClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectClusters` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent project/location whose Connect clusters are to be listed. Structured like `projects/{project\}/locations/{location\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number\}/locations/{location\}/connectClusters/{connect_cluster_id\}
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ConnectCluster;
  }

  export class Resource$Projects$Locations$Connectclusters$Connectors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new connector in a given Connect cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Connector>>;
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Create,
      options: MethodOptions | BodyResponseCallback<Schema$Connector>,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Create,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    create(callback: BodyResponseCallback<Schema$Connector>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Create
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Connector>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectors').replace(
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
        createAPIRequest<Schema$Connector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connector>(parameters);
      }
    }

    /**
     * Deletes a connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete
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
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
     * Returns the properties of a single connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Connector>>;
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Connector>,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Get,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    get(callback: BodyResponseCallback<Schema$Connector>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Get
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Connector>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Connector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connector>(parameters);
      }
    }

    /**
     * Lists the connectors in a given Connect cluster.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListConnectorsResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListConnectorsResponse>,
      callback: BodyResponseCallback<Schema$ListConnectorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$List,
      callback: BodyResponseCallback<Schema$ListConnectorsResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListConnectorsResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$List
        | BodyResponseCallback<Schema$ListConnectorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListConnectorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListConnectorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListConnectorsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/connectors').replace(
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
        createAPIRequest<Schema$ListConnectorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListConnectorsResponse>(parameters);
      }
    }

    /**
     * Updates the properties of a connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    patch(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Connector>>;
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch,
      options: MethodOptions | BodyResponseCallback<Schema$Connector>,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch,
      callback: BodyResponseCallback<Schema$Connector>
    ): void;
    patch(callback: BodyResponseCallback<Schema$Connector>): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Connector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Connector>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$Connector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Connector>(parameters);
      }
    }

    /**
     * Pauses the connector and its tasks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    pause(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    pause(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$PauseConnectorResponse>>;
    pause(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$PauseConnectorResponse>,
      callback: BodyResponseCallback<Schema$PauseConnectorResponse>
    ): void;
    pause(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause,
      callback: BodyResponseCallback<Schema$PauseConnectorResponse>
    ): void;
    pause(callback: BodyResponseCallback<Schema$PauseConnectorResponse>): void;
    pause(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause
        | BodyResponseCallback<Schema$PauseConnectorResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$PauseConnectorResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$PauseConnectorResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$PauseConnectorResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:pause').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
        createAPIRequest<Schema$PauseConnectorResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$PauseConnectorResponse>(parameters);
      }
    }

    /**
     * Restarts the connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    restart(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    restart(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$RestartConnectorResponse>>;
    restart(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    restart(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$RestartConnectorResponse>,
      callback: BodyResponseCallback<Schema$RestartConnectorResponse>
    ): void;
    restart(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart,
      callback: BodyResponseCallback<Schema$RestartConnectorResponse>
    ): void;
    restart(
      callback: BodyResponseCallback<Schema$RestartConnectorResponse>
    ): void;
    restart(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart
        | BodyResponseCallback<Schema$RestartConnectorResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$RestartConnectorResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$RestartConnectorResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$RestartConnectorResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:restart').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
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
        createAPIRequest<Schema$RestartConnectorResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$RestartConnectorResponse>(parameters);
      }
    }

    /**
     * Resumes the connector and its tasks.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resume(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    resume(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ResumeConnectorResponse>>;
    resume(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ResumeConnectorResponse>,
      callback: BodyResponseCallback<Schema$ResumeConnectorResponse>
    ): void;
    resume(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume,
      callback: BodyResponseCallback<Schema$ResumeConnectorResponse>
    ): void;
    resume(
      callback: BodyResponseCallback<Schema$ResumeConnectorResponse>
    ): void;
    resume(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume
        | BodyResponseCallback<Schema$ResumeConnectorResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ResumeConnectorResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ResumeConnectorResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ResumeConnectorResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:resume').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
        createAPIRequest<Schema$ResumeConnectorResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ResumeConnectorResponse>(parameters);
      }
    }

    /**
     * Stops the connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    stop(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    stop(
      params?: Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$StopConnectorResponse>>;
    stop(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$StopConnectorResponse>,
      callback: BodyResponseCallback<Schema$StopConnectorResponse>
    ): void;
    stop(
      params: Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop,
      callback: BodyResponseCallback<Schema$StopConnectorResponse>
    ): void;
    stop(callback: BodyResponseCallback<Schema$StopConnectorResponse>): void;
    stop(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop
        | BodyResponseCallback<Schema$StopConnectorResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$StopConnectorResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$StopConnectorResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$StopConnectorResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:stop').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
        createAPIRequest<Schema$StopConnectorResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$StopConnectorResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Create
    extends StandardParameters {
    /**
     * Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-connector-id`.
     */
    connectorId?: string;
    /**
     * Required. The parent Connect cluster in which to create the connector. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connector;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete
    extends StandardParameters {
    /**
     * Required. The name of the connector to delete. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Get
    extends StandardParameters {
    /**
     * Required. The name of the connector whose configuration to return. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$List
    extends StandardParameters {
    /**
     * Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token.
     */
    pageToken?: string;
    /**
     * Required. The parent Connect cluster whose connectors are to be listed. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch
    extends StandardParameters {
    /**
     * Identifier. The name of the connector. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connect_cluster\}/connectors/{connector\}
     */
    name?: string;
    /**
     * Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     */
    updateMask?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Connector;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause
    extends StandardParameters {
    /**
     * Required. The name of the connector to pause. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseConnectorRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart
    extends StandardParameters {
    /**
     * Required. The name of the connector to restart. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestartConnectorRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume
    extends StandardParameters {
    /**
     * Required. The name of the connector to pause. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeConnectorRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop
    extends StandardParameters {
    /**
     * Required. The name of the connector to stop. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopConnectorRequest;
  }

  export class Resource$Projects$Locations$Operations {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    cancel(
      params: Params$Resource$Projects$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    cancel(
      params?: Params$Resource$Projects$Locations$Operations$Cancel,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}:cancel').replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Operations$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Empty>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Operations$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Operation>>;
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
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Operation>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
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
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Operations$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>;
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
      | Promise<GaxiosResponseWithHTTP2<Schema$ListOperationsResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
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

      const rootUrl = options.rootUrl || 'https://managedkafka.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+name}/operations').replace(
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
}
