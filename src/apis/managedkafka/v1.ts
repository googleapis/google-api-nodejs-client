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
   * A configuration for the Google Certificate Authority Service.
   */
  export interface Schema$CertificateAuthorityServiceConfig {
    /**
     * Required. The name of the CA pool to pull CA certificates from. Structured like: projects/{project\}/locations/{location\}/caPools/{ca_pool\}. The CA pool does not need to be in the same project or location as the Kafka cluster.
     */
    caPool?: string | null;
  }
  /**
   * Request for CheckCompatibility.
   */
  export interface Schema$CheckCompatibilityRequest {
    /**
     * Optional. The schema references used by the schema.
     */
    references?: Schema$SchemaReference[];
    /**
     * Required. The schema payload
     */
    schema?: string | null;
    /**
     * Optional. The schema type of the schema.
     */
    schemaType?: string | null;
    /**
     * Optional. If true, the response will contain the compatibility check result with reasons for failed checks. The default is false.
     */
    verbose?: boolean | null;
  }
  /**
   * Response for CheckCompatibility.
   */
  export interface Schema$CheckCompatibilityResponse {
    /**
     * The compatibility check result. If true, the schema is compatible with the resource.
     */
    is_compatible?: boolean | null;
    /**
     * Failure reasons if verbose = true.
     */
    messages?: string[] | null;
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
     * Optional. TLS configuration for the Kafka cluster.
     */
    tlsConfig?: Schema$TlsConfig;
    /**
     * Optional. UpdateOptions represents options that control how updates to the cluster are applied.
     */
    updateOptions?: Schema$UpdateOptions;
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
     * Output only. Reserved for future use.
     */
    satisfiesPzi?: boolean | null;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean | null;
    /**
     * Output only. The current state of the Kafka Connect cluster.
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
     * Optional. Deprecated: Managed Kafka Connect clusters can now reach any endpoint accessible from the primary subnet without the need to define additional subnets. Please see https://cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/create-connect-cluster#worker-subnet for more information.
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
   * Context represents an independent schema grouping in a schema registry instance.
   */
  export interface Schema$Context {
    /**
     * Identifier. The name of the context. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}` The context name {context\} can contain the following: * Up to 255 characters. * Allowed characters: letters (uppercase or lowercase), numbers, and the following special characters: `.`, `-`, `_`, `+`, `%`, and `~`.
     */
    name?: string | null;
    /**
     * Optional. The subjects of the context.
     */
    subjects?: string[] | null;
  }
  /**
   * Request to create a schema registry instance.
   */
  export interface Schema$CreateSchemaRegistryRequest {
    /**
     * Required. The schema registry instance to create. The name field is ignored.
     */
    schemaRegistry?: Schema$SchemaRegistry;
    /**
     * Required. The schema registry instance ID to use for this schema registry. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores (-). The maximum length is 63 characters. The ID must not start with a number.
     */
    schemaRegistryId?: string | null;
  }
  /**
   * Request for CreateVersion.
   */
  export interface Schema$CreateVersionRequest {
    /**
     * Optional. The schema ID of the schema. If not specified, the schema ID will be generated by the server. If the schema ID is specified, it must not be used by an existing schema that is different from the schema to be created.
     */
    id?: number | null;
    /**
     * Optional. If true, the schema will be normalized before being stored. The default is false.
     */
    normalize?: boolean | null;
    /**
     * Optional. The schema references used by the schema.
     */
    references?: Schema$SchemaReference[];
    /**
     * Required. The schema payload
     */
    schema?: string | null;
    /**
     * Optional. The type of the schema. It is optional. If not specified, the schema type will be AVRO.
     */
    schemaType?: string | null;
    /**
     * Optional. The version to create. It is optional. If not specified, the version will be created with the max version ID of the subject increased by 1. If the version ID is specified, it will be used as the new version ID and must not be used by an existing version of the subject.
     */
    version?: number | null;
  }
  /**
   * Response for CreateVersion.
   */
  export interface Schema$CreateVersionResponse {
    /**
     * The unique identifier of the schema created.
     */
    id?: number | null;
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
   * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
   */
  export interface Schema$HttpBody {
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
    /**
     * Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations.
     */
    unreachable?: string[] | null;
  }
  /**
   * Request for ListSchemaRegistries.
   */
  export interface Schema$ListSchemaRegistriesResponse {
    /**
     * The schema registry instances.
     */
    schemaRegistries?: Schema$SchemaRegistry[];
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
   * Request for LookupVersion.
   */
  export interface Schema$LookupVersionRequest {
    /**
     * Optional. If true, soft-deleted versions will be included in lookup, no matter if the subject is active or soft-deleted. If false, soft-deleted versions will be excluded. The default is false.
     */
    deleted?: boolean | null;
    /**
     * Optional. If true, the schema will be normalized before being looked up. The default is false.
     */
    normalize?: boolean | null;
    /**
     * Optional. The schema references used by the schema.
     */
    references?: Schema$SchemaReference[];
    /**
     * Required. The schema payload
     */
    schema?: string | null;
    /**
     * Optional. The schema type of the schema.
     */
    schemaType?: string | null;
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
   * Schema for a Kafka message.
   */
  export interface Schema$Schema {
    /**
     * Optional. The schema references used by the schema.
     */
    references?: Schema$SchemaReference[];
    /**
     * The schema payload.
     */
    schema?: string | null;
    /**
     * Optional. The schema type of the schema.
     */
    schemaType?: string | null;
  }
  /**
   * SchemaConfig represents configuration for a schema registry or a specific subject.
   */
  export interface Schema$SchemaConfig {
    /**
     * Optional. The subject to which this subject is an alias of. Only applicable for subject config.
     */
    alias?: string | null;
    /**
     * Required. The compatibility type of the schema. The default value is BACKWARD. If unset in a SchemaSubject-level SchemaConfig, defaults to the global value. If unset in a SchemaRegistry-level SchemaConfig, reverts to the default value.
     */
    compatibility?: string | null;
    /**
     * Optional. If true, the schema will be normalized before being stored or looked up. The default is false. If unset in a SchemaSubject-level SchemaConfig, the global value will be used. If unset in a SchemaRegistry-level SchemaConfig, reverts to the default value.
     */
    normalize?: boolean | null;
  }
  /**
   * SchemaMode represents the mode of a schema registry or a specific subject. Four modes are supported: * NONE: deprecated. This was the default mode for a subject, but now the default is unset (which means use the global schema registry setting) * READONLY: The schema registry is in read-only mode. * READWRITE: The schema registry is in read-write mode, which allows limited write operations on the schema. * IMPORT: The schema registry is in import mode, which allows more editing operations on the schema for data importing purposes.
   */
  export interface Schema$SchemaMode {
    /**
     * Required. The mode type of a schema registry (READWRITE by default) or of a subject (unset by default, which means use the global schema registry setting).
     */
    mode?: string | null;
  }
  /**
   * SchemaReference is a reference to a schema.
   */
  export interface Schema$SchemaReference {
    /**
     * Required. The name of the reference.
     */
    name?: string | null;
    /**
     * Required. The subject of the reference.
     */
    subject?: string | null;
    /**
     * Required. The version of the reference.
     */
    version?: number | null;
  }
  /**
   * SchemaRegistry is a schema registry instance.
   */
  export interface Schema$SchemaRegistry {
    /**
     * Output only. The contexts of the schema registry instance.
     */
    contexts?: string[] | null;
    /**
     * Identifier. The name of the schema registry instance. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}` The instance name {schema_registry\} can contain the following: * Up to 255 characters. * Letters (uppercase or lowercase), numbers, and underscores.
     */
    name?: string | null;
  }
  /**
   * Version of a schema.
   */
  export interface Schema$SchemaVersion {
    /**
     * Required. The schema ID.
     */
    id?: number | null;
    /**
     * Optional. The schema references used by the schema.
     */
    references?: Schema$SchemaReference[];
    /**
     * Required. The schema payload.
     */
    schema?: string | null;
    /**
     * Optional. The schema type of the schema.
     */
    schemaType?: string | null;
    /**
     * Required. The subject of the version.
     */
    subject?: string | null;
    /**
     * Required. The version ID
     */
    version?: number | null;
  }
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
   * Task Retry Policy is implemented on a best-effort basis. The default policy retries tasks with a minimum_backoff of 60 seconds, and a maximum_backoff of 12 hours. You can disable the policy by setting the task_retry_disabled field to true. Retry delay will be exponential based on provided minimum and maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff. Note that the delay between consecutive task restarts may not always precisely match the configured settings. This can happen when the ConnectCluster is in rebalancing state or if the ConnectCluster is unresponsive etc. The default values for minimum and maximum backoffs are 60 seconds and 12 hours respectively.
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
    /**
     * Optional. If true, task retry is disabled.
     */
    taskRetryDisabled?: boolean | null;
  }
  /**
   * The TLS configuration for the Kafka cluster.
   */
  export interface Schema$TlsConfig {
    /**
     * Optional. A list of rules for mapping from SSL principal names to short names. These are applied in order by Kafka. Refer to the Apache Kafka documentation for `ssl.principal.mapping.rules` for the precise formatting details and syntax. Example: "RULE:^CN=(.*?),OU=ServiceUsers.*$/$1@example.com/,DEFAULT" This is a static Kafka broker configuration. Setting or modifying this field will trigger a rolling restart of the Kafka brokers to apply the change. An empty string means no rules are applied (Kafka default).
     */
    sslPrincipalMappingRules?: string | null;
    /**
     * Optional. The configuration of the broker truststore. If specified, clients can use mTLS for authentication.
     */
    trustConfig?: Schema$TrustConfig;
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
  /**
   * Sources of CA certificates to install in the broker's truststore.
   */
  export interface Schema$TrustConfig {
    /**
     * Optional. Configuration for the Google Certificate Authority Service. Maximum 10.
     */
    casConfigs?: Schema$CertificateAuthorityServiceConfig[];
  }
  /**
   * UpdateOptions specifies options that influence how a cluster update is applied. These options control the behavior of the update process, rather than defining the desired end-state of a cluster.
   */
  export interface Schema$UpdateOptions {
    /**
     * Optional. If true, allows an update operation that increases the total vCPU and/or memory allocation of the cluster to significantly decrease the per-broker vCPU and/or memory allocation. This can result in reduced performance and availability. By default, the update operation will fail if an upscale request results in a vCPU or memory allocation for the brokers that is smaller than 90% of the current broker size.
     */
    allowBrokerDownscaleOnClusterUpscale?: boolean | null;
  }
  /**
   * Request for updating schema config. On a SchemaSubject-level SchemaConfig, an unset field will be removed from the SchemaConfig.
   */
  export interface Schema$UpdateSchemaConfigRequest {
    /**
     * Required. The compatibility type of the schemas. Cannot be unset for a SchemaRegistry-level SchemaConfig. If unset on a SchemaSubject-level SchemaConfig, removes the compatibility field for the SchemaConfig.
     */
    compatibility?: string | null;
    /**
     * Optional. If true, the schema will be normalized before being stored or looked up. The default is false. Cannot be unset for a SchemaRegistry-level SchemaConfig. If unset on a SchemaSubject-level SchemaConfig, removes the normalize field for the SchemaConfig.
     */
    normalize?: boolean | null;
  }
  /**
   * Request for updating schema registry or subject mode.
   */
  export interface Schema$UpdateSchemaModeRequest {
    /**
     * Required. The mode type.
     */
    mode?: string | null;
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
    schemaRegistries: Resource$Projects$Locations$Schemaregistries;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.clusters = new Resource$Projects$Locations$Clusters(this.context);
      this.connectClusters = new Resource$Projects$Locations$Connectclusters(
        this.context
      );
      this.operations = new Resource$Projects$Locations$Operations(
        this.context
      );
      this.schemaRegistries = new Resource$Projects$Locations$Schemaregistries(
        this.context
      );
    }

    /**
     * Gets information about a location.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.get({
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.list({
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

  export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
    /**
     * Resource name for the location.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$List extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.create({
     *     // Required. The ID to use for the cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     *     clusterId: 'placeholder-value',
     *     // Required. The parent region in which to create the cluster. Structured like `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "capacityConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "gcpConfig": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "rebalanceConfig": {},
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "state": "my_state",
     *       //   "tlsConfig": {},
     *       //   "updateOptions": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.delete({
     *     // Required. The name of the cluster to delete.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.get({
     *     // Required. The name of the cluster whose configuration to return.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "capacityConfig": {},
     *   //   "createTime": "my_createTime",
     *   //   "gcpConfig": {},
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "rebalanceConfig": {},
     *   //   "satisfiesPzi": false,
     *   //   "satisfiesPzs": false,
     *   //   "state": "my_state",
     *   //   "tlsConfig": {},
     *   //   "updateOptions": {},
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.list({
     *     // Optional. Filter expression for the result.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent location whose clusters are to be listed. Structured like `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "clusters": [],
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.patch({
     *     // Identifier. The name of the cluster. Structured like: projects/{project_number\}/locations/{location\}/clusters/{cluster_id\}
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "capacityConfig": {},
     *       //   "createTime": "my_createTime",
     *       //   "gcpConfig": {},
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "rebalanceConfig": {},
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "state": "my_state",
     *       //   "tlsConfig": {},
     *       //   "updateOptions": {},
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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

  export interface Params$Resource$Projects$Locations$Clusters$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Delete extends StandardParameters {
    /**
     * Required. The name of the cluster to delete.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Get extends StandardParameters {
    /**
     * Required. The name of the cluster whose configuration to return.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Patch extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.acls.addAclEntry({
     *     // Required. The name of the acl to add the acl entry to. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     *     acl: 'projects/my-project/locations/my-location/clusters/my-cluster/acls/.*',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "host": "my_host",
     *       //   "operation": "my_operation",
     *       //   "permissionType": "my_permissionType",
     *       //   "principal": "my_principal"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acl": {},
     *   //   "aclCreated": false
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.acls.create({
     *     // Required. The ID to use for the acl, which will become the final component of the acl's name. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name\}` `consumerGroup/{resource_name\}` `transactionalId/{resource_name\}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name\}` `consumerGroupPrefixed/{resource_name\}` `transactionalIdPrefixed/{resource_name\}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/x`) `allConsumerGroups` (represents `consumerGroup/x`) `allTransactionalIds` (represents `transactionalId/x`)
     *     aclId: 'placeholder-value',
     *     // Required. The parent cluster in which to create the acl. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aclEntries": [],
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "patternType": "my_patternType",
     *       //   "resourceName": "my_resourceName",
     *       //   "resourceType": "my_resourceType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aclEntries": [],
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "patternType": "my_patternType",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.acls.delete({
     *     // Required. The name of the acl to delete. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/acls/.*',
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.acls.get({
     *     // Required. The name of the acl to return. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/acls/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aclEntries": [],
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "patternType": "my_patternType",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.acls.list({
     *     // Optional. The maximum number of acls to return. The service may return fewer than this value. If unset or zero, all acls for the parent is returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListAcls` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAcls` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent cluster whose acls are to be listed. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acls": [],
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.acls.patch({
     *     // Identifier. The name for the acl. Represents a single Resource Pattern. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\} The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. `acl_id` is structured like one of the following: For acls on the cluster: `cluster` For acls on a single resource within the cluster: `topic/{resource_name\}` `consumerGroup/{resource_name\}` `transactionalId/{resource_name\}` For acls on all resources that match a prefix: `topicPrefixed/{resource_name\}` `consumerGroupPrefixed/{resource_name\}` `transactionalIdPrefixed/{resource_name\}` For acls on all resources of a given type (i.e. the wildcard literal "*"): `allTopics` (represents `topic/x`) `allConsumerGroups` (represents `consumerGroup/x`) `allTransactionalIds` (represents `transactionalId/x`)
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/acls/.*',
     *     // Optional. Field mask is used to specify the fields to be overwritten in the Acl resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "aclEntries": [],
     *       //   "etag": "my_etag",
     *       //   "name": "my_name",
     *       //   "patternType": "my_patternType",
     *       //   "resourceName": "my_resourceName",
     *       //   "resourceType": "my_resourceType"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "aclEntries": [],
     *   //   "etag": "my_etag",
     *   //   "name": "my_name",
     *   //   "patternType": "my_patternType",
     *   //   "resourceName": "my_resourceName",
     *   //   "resourceType": "my_resourceType"
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.clusters.acls.removeAclEntry({
     *       // Required. The name of the acl to remove the acl entry from. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     *       acl: 'projects/my-project/locations/my-location/clusters/my-cluster/acls/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "host": "my_host",
     *         //   "operation": "my_operation",
     *         //   "permissionType": "my_permissionType",
     *         //   "principal": "my_principal"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "acl": {},
     *   //   "aclDeleted": false
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

  export interface Params$Resource$Projects$Locations$Clusters$Acls$Addaclentry extends StandardParameters {
    /**
     * Required. The name of the acl to add the acl entry to. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    acl?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AclEntry;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Delete extends StandardParameters {
    /**
     * Required. The name of the acl to delete. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Get extends StandardParameters {
    /**
     * Required. The name of the acl to return. Structured like: `projects/{project\}/locations/{location\}/clusters/{cluster\}/acls/{acl_id\}`. The structure of `acl_id` defines the Resource Pattern (resource_type, resource_name, pattern_type) of the acl. See `Acl.name` for details.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Acls$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Patch extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Acls$Removeaclentry extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.clusters.consumerGroups.delete({
     *       // Required. The name of the consumer group to delete. `projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumerGroup\}`.
     *       name: 'projects/my-project/locations/my-location/clusters/my-cluster/consumerGroups/.*',
     *     });
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.consumerGroups.get(
     *     {
     *       // Required. The name of the consumer group whose configuration to return. `projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumerGroup\}`.
     *       name: 'projects/my-project/locations/my-location/clusters/my-cluster/consumerGroups/.*',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "topics": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.clusters.consumerGroups.list({
     *       // Optional. The maximum number of consumer groups to return. The service may return fewer than this value. If unset or zero, all consumer groups for the parent is returned.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListConsumerGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConsumerGroups` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent cluster whose consumer groups are to be listed. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *       parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *       // Optional. Specifies the view (BASIC or FULL) of the ConsumerGroup resource to be returned in the response. Defaults to FULL view.
     *       view: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "consumerGroups": [],
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.clusters.consumerGroups.patch({
     *       // Identifier. The name of the consumer group. The `consumer_group` segment is used when connecting directly to the cluster. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumer_group\}
     *       name: 'projects/my-project/locations/my-location/clusters/my-cluster/consumerGroups/.*',
     *       // Required. Field mask is used to specify the fields to be overwritten in the ConsumerGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "name": "my_name",
     *         //   "topics": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "topics": {}
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

  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$Delete extends StandardParameters {
    /**
     * Required. The name of the consumer group to delete. `projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumerGroup\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$Get extends StandardParameters {
    /**
     * Required. The name of the consumer group whose configuration to return. `projects/{project\}/locations/{location\}/clusters/{cluster\}/consumerGroups/{consumerGroup\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$List extends StandardParameters {
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
    /**
     * Optional. Specifies the view (BASIC or FULL) of the ConsumerGroup resource to be returned in the response. Defaults to FULL view.
     */
    view?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Consumergroups$Patch extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.topics.create({
     *     // Required. The parent cluster in which to create the topic. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *     // Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
     *     topicId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "configs": {},
     *       //   "name": "my_name",
     *       //   "partitionCount": 0,
     *       //   "replicationFactor": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": {},
     *   //   "name": "my_name",
     *   //   "partitionCount": 0,
     *   //   "replicationFactor": 0
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.topics.delete({
     *     // Required. The name of the topic to delete. `projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}`.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/topics/my-topic',
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.topics.get({
     *     // Required. The name of the topic whose configuration to return. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}.
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/topics/my-topic',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": {},
     *   //   "name": "my_name",
     *   //   "partitionCount": 0,
     *   //   "replicationFactor": 0
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.topics.list({
     *     // Optional. The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent is returned.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent cluster whose topics are to be listed. Structured like `projects/{project\}/locations/{location\}/clusters/{cluster\}`.
     *     parent: 'projects/my-project/locations/my-location/clusters/my-cluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "topics": []
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.clusters.topics.patch({
     *     // Identifier. The name of the topic. The `topic` segment is used when connecting directly to the cluster. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}
     *     name: 'projects/my-project/locations/my-location/clusters/my-cluster/topics/my-topic',
     *     // Required. Field mask is used to specify the fields to be overwritten in the Topic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "configs": {},
     *       //   "name": "my_name",
     *       //   "partitionCount": 0,
     *       //   "replicationFactor": 0
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": {},
     *   //   "name": "my_name",
     *   //   "partitionCount": 0,
     *   //   "replicationFactor": 0
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

  export interface Params$Resource$Projects$Locations$Clusters$Topics$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Topics$Delete extends StandardParameters {
    /**
     * Required. The name of the topic to delete. `projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Topics$Get extends StandardParameters {
    /**
     * Required. The name of the topic whose configuration to return. Structured like: projects/{project\}/locations/{location\}/clusters/{cluster\}/topics/{topic\}.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Clusters$Topics$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Clusters$Topics$Patch extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.connectClusters.create({
     *     // Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-cluster-id`.
     *     connectClusterId: 'placeholder-value',
     *     // Required. The parent project/location in which to create the Kafka Connect cluster. Structured like `projects/{project\}/locations/{location\}/`.
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "capacityConfig": {},
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "gcpConfig": {},
     *       //   "kafkaCluster": "my_kafkaCluster",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.connectClusters.delete({
     *     // Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     *     name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.connectClusters.get({
     *     // Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     *     name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "capacityConfig": {},
     *   //   "config": {},
     *   //   "createTime": "my_createTime",
     *   //   "gcpConfig": {},
     *   //   "kafkaCluster": "my_kafkaCluster",
     *   //   "labels": {},
     *   //   "name": "my_name",
     *   //   "satisfiesPzi": false,
     *   //   "satisfiesPzs": false,
     *   //   "state": "my_state",
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.connectClusters.list({
     *     // Optional. Filter expression for the result.
     *     filter: 'placeholder-value',
     *     // Optional. Order by fields for the result.
     *     orderBy: 'placeholder-value',
     *     // Optional. The maximum number of Connect clusters to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     *     pageSize: 'placeholder-value',
     *     // Optional. A page token, received from a previous `ListConnectClusters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectClusters` must match the call that provided the page token.
     *     pageToken: 'placeholder-value',
     *     // Required. The parent project/location whose Connect clusters are to be listed. Structured like `projects/{project\}/locations/{location\}`.
     *     parent: 'projects/my-project/locations/my-location',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectClusters": [],
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.connectClusters.patch({
     *     // Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number\}/locations/{location\}/connectClusters/{connect_cluster_id\}
     *     name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster',
     *     // Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     *     requestId: 'placeholder-value',
     *     // Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     *     updateMask: 'placeholder-value',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "capacityConfig": {},
     *       //   "config": {},
     *       //   "createTime": "my_createTime",
     *       //   "gcpConfig": {},
     *       //   "kafkaCluster": "my_kafkaCluster",
     *       //   "labels": {},
     *       //   "name": "my_name",
     *       //   "satisfiesPzi": false,
     *       //   "satisfiesPzs": false,
     *       //   "state": "my_state",
     *       //   "updateTime": "my_updateTime"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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

  export interface Params$Resource$Projects$Locations$Connectclusters$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connectclusters$Delete extends StandardParameters {
    /**
     * Required. The name of the Kafka Connect cluster to delete. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request. The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Get extends StandardParameters {
    /**
     * Required. The name of the Kafka Connect cluster whose configuration to return. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connectclusters$Patch extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.create({
     *       // Required. The ID to use for the connector, which will become the final component of the connector's name. The ID must be 1-63 characters long, and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` to comply with RFC 1035. This value is structured like: `my-connector-id`.
     *       connectorId: 'placeholder-value',
     *       // Required. The parent Connect cluster in which to create the connector. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/connectClusters/my-connectCluster',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "configs": {},
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "taskRestartPolicy": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "taskRestartPolicy": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.delete({
     *       // Required. The name of the connector to delete. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *     });
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.get({
     *       // Required. The name of the connector whose configuration to return. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "taskRestartPolicy": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.list({
     *       // Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, server will pick an appropriate default.
     *       pageSize: 'placeholder-value',
     *       // Optional. A page token, received from a previous `ListConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectors` must match the call that provided the page token.
     *       pageToken: 'placeholder-value',
     *       // Required. The parent Connect cluster whose connectors are to be listed. Structured like `projects/{project\}/locations/{location\}/connectClusters/{connect_cluster_id\}`.
     *       parent:
     *         'projects/my-project/locations/my-location/connectClusters/my-connectCluster',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "connectors": [],
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.patch({
     *       // Identifier. The name of the connector. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connect_cluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *       // Required. Field mask is used to specify the fields to be overwritten in the cluster resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The mask is required and a value of * will update all fields.
     *       updateMask: 'placeholder-value',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "configs": {},
     *         //   "name": "my_name",
     *         //   "state": "my_state",
     *         //   "taskRestartPolicy": {}
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "configs": {},
     *   //   "name": "my_name",
     *   //   "state": "my_state",
     *   //   "taskRestartPolicy": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.pause({
     *       // Required. The name of the connector to pause. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.restart({
     *       // Required. The name of the connector to restart. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.resume({
     *       // Required. The name of the connector to pause. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.connectClusters.connectors.stop({
     *       // Required. The name of the connector to stop. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     *       name: 'projects/my-project/locations/my-location/connectClusters/my-connectCluster/connectors/my-connector',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {}
     *       },
     *     });
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

  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Create extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Delete extends StandardParameters {
    /**
     * Required. The name of the connector to delete. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Get extends StandardParameters {
    /**
     * Required. The name of the connector whose configuration to return. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$List extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Patch extends StandardParameters {
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
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Pause extends StandardParameters {
    /**
     * Required. The name of the connector to pause. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseConnectorRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Restart extends StandardParameters {
    /**
     * Required. The name of the connector to restart. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RestartConnectorRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Resume extends StandardParameters {
    /**
     * Required. The name of the connector to pause. Structured like: projects/{project\}/locations/{location\}/connectClusters/{connectCluster\}/connectors/{connector\}
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeConnectorRequest;
  }
  export interface Params$Resource$Projects$Locations$Connectclusters$Connectors$Stop extends StandardParameters {
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.operations.cancel({
     *     // The name of the operation resource to be cancelled.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.operations.delete({
     *     // The name of the operation resource to be deleted.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.operations.get({
     *     // The name of the operation resource.
     *     name: 'projects/my-project/locations/my-location/operations/my-operation',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "done": false,
     *   //   "error": {},
     *   //   "metadata": {},
     *   //   "name": "my_name",
     *   //   "response": {}
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
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.operations.list({
     *     // The standard list filter.
     *     filter: 'placeholder-value',
     *     // The name of the operation's parent resource.
     *     name: 'projects/my-project/locations/my-location',
     *     // The standard list page size.
     *     pageSize: 'placeholder-value',
     *     // The standard list page token.
     *     pageToken: 'placeholder-value',
     *     // When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     *     returnPartialSuccess: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "nextPageToken": "my_nextPageToken",
     *   //   "operations": [],
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

  export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelOperationRequest;
  }
  export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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
    /**
     * When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation.
     */
    returnPartialSuccess?: boolean;
  }

  export class Resource$Projects$Locations$Schemaregistries {
    context: APIRequestContext;
    compatibility: Resource$Projects$Locations$Schemaregistries$Compatibility;
    config: Resource$Projects$Locations$Schemaregistries$Config;
    contexts: Resource$Projects$Locations$Schemaregistries$Contexts;
    mode: Resource$Projects$Locations$Schemaregistries$Mode;
    schemas: Resource$Projects$Locations$Schemaregistries$Schemas;
    subjects: Resource$Projects$Locations$Schemaregistries$Subjects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.compatibility =
        new Resource$Projects$Locations$Schemaregistries$Compatibility(
          this.context
        );
      this.config = new Resource$Projects$Locations$Schemaregistries$Config(
        this.context
      );
      this.contexts = new Resource$Projects$Locations$Schemaregistries$Contexts(
        this.context
      );
      this.mode = new Resource$Projects$Locations$Schemaregistries$Mode(
        this.context
      );
      this.schemas = new Resource$Projects$Locations$Schemaregistries$Schemas(
        this.context
      );
      this.subjects = new Resource$Projects$Locations$Schemaregistries$Subjects(
        this.context
      );
    }

    /**
     * Create a schema registry instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.schemaRegistries.create({
     *     // Required. The parent whose schema registry instance is to be created. Structured like: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *
     *     // Request body metadata
     *     requestBody: {
     *       // request body parameters
     *       // {
     *       //   "schemaRegistry": {},
     *       //   "schemaRegistryId": "my_schemaRegistryId"
     *       // }
     *     },
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contexts": [],
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
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaRegistry>>;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Create,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaRegistry>,
      callback: BodyResponseCallback<Schema$SchemaRegistry>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Create,
      callback: BodyResponseCallback<Schema$SchemaRegistry>
    ): void;
    create(callback: BodyResponseCallback<Schema$SchemaRegistry>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Create
        | BodyResponseCallback<Schema$SchemaRegistry>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaRegistry>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaRegistry>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaRegistry>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Create;
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
            url: (rootUrl + '/v1/{+parent}/schemaRegistries').replace(
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
        createAPIRequest<Schema$SchemaRegistry>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaRegistry>(parameters);
      }
    }

    /**
     * Delete a schema registry instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.schemaRegistries.delete({
     *     // Required. The name of the schema registry instance to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     *     name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie',
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Empty>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Delete
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
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Delete;
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
     * Get the schema registry instance.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.schemaRegistries.get({
     *     // Required. The name of the schema registry instance to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     *     name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contexts": [],
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaRegistry>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaRegistry>,
      callback: BodyResponseCallback<Schema$SchemaRegistry>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Get,
      callback: BodyResponseCallback<Schema$SchemaRegistry>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaRegistry>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Get
        | BodyResponseCallback<Schema$SchemaRegistry>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaRegistry>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaRegistry>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaRegistry>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schemaregistries$Get;
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
        createAPIRequest<Schema$SchemaRegistry>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaRegistry>(parameters);
      }
    }

    /**
     * List schema registries.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.schemaRegistries.list({
     *     // Required. The parent whose schema registry instances are to be listed. Structured like: `projects/{project\}/locations/{location\}`
     *     parent: 'projects/my-project/locations/my-location',
     *     // Optional. Specifies the view to return for the schema registry instances. If not specified, the default view is SCHEMA_REGISTRY_VIEW_BASIC.
     *     view: 'placeholder-value',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "schemaRegistries": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$ListSchemaRegistriesResponse>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListSchemaRegistriesResponse>,
      callback: BodyResponseCallback<Schema$ListSchemaRegistriesResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$List,
      callback: BodyResponseCallback<Schema$ListSchemaRegistriesResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$ListSchemaRegistriesResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$List
        | BodyResponseCallback<Schema$ListSchemaRegistriesResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListSchemaRegistriesResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListSchemaRegistriesResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$ListSchemaRegistriesResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Schemaregistries$List;
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
            url: (rootUrl + '/v1/{+parent}/schemaRegistries').replace(
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
        createAPIRequest<Schema$ListSchemaRegistriesResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListSchemaRegistriesResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Create extends StandardParameters {
    /**
     * Required. The parent whose schema registry instance is to be created. Structured like: `projects/{project\}/locations/{location\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateSchemaRegistryRequest;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Delete extends StandardParameters {
    /**
     * Required. The name of the schema registry instance to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Get extends StandardParameters {
    /**
     * Required. The name of the schema registry instance to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$List extends StandardParameters {
    /**
     * Required. The parent whose schema registry instances are to be listed. Structured like: `projects/{project\}/locations/{location\}`
     */
    parent?: string;
    /**
     * Optional. Specifies the view to return for the schema registry instances. If not specified, the default view is SCHEMA_REGISTRY_VIEW_BASIC.
     */
    view?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Compatibility {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Check compatibility of a schema with all versions or a specific version of a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.compatibility.checkCompatibility(
     *       {
     *         // Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/x/versions: Check compatibility with one or more versions of the specified subject. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/{subject\}/versions/{version\}: Check compatibility with a specific version of the subject.
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/compatibility/.*',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "references": [],
     *           //   "schema": "my_schema",
     *           //   "schemaType": "my_schemaType",
     *           //   "verbose": false
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "is_compatible": false,
     *   //   "messages": []
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
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkCompatibility(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckCompatibilityResponse>>;
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>,
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility,
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckCompatibilityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility;
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
        createAPIRequest<Schema$CheckCompatibilityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckCompatibilityResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Compatibility$Checkcompatibility extends StandardParameters {
    /**
     * Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/x/versions: Check compatibility with one or more versions of the specified subject. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/{subject\}/versions/{version\}: Check compatibility with a specific version of the subject.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckCompatibilityRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Config {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete schema config for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.config.delete({
     *       // Required. The resource name of subject to delete the config for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/config/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "compatibility": "my_compatibility",
     *   //   "normalize": false
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Config$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaConfig>,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Delete,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SchemaConfig>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Config$Delete
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Config$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Config$Delete;
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
        createAPIRequest<Schema$SchemaConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaConfig>(parameters);
      }
    }

    /**
     * Get schema config at global level or for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.schemaRegistries.config.get(
     *     {
     *       // Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     *       defaultToGlobal: 'placeholder-value',
     *       // Required. The resource name to get the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Get config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Get config for a specific subject.
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/config/.*',
     *     },
     *   );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "compatibility": "my_compatibility",
     *   //   "normalize": false
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Config$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaConfig>,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Get,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Config$Get
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Config$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Config$Get;
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
        createAPIRequest<Schema$SchemaConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaConfig>(parameters);
      }
    }

    /**
     * Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.config.update({
     *       // Required. The resource name to update the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Update config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Update config for a specific subject.
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/config/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "compatibility": "my_compatibility",
     *         //   "normalize": false
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "compatibility": "my_compatibility",
     *   //   "normalize": false
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
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Config$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Update,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaConfig>,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Config$Update,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    update(callback: BodyResponseCallback<Schema$SchemaConfig>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Config$Update
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Config$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Config$Update;
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
            method: 'PUT',
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
        createAPIRequest<Schema$SchemaConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Config$Delete extends StandardParameters {
    /**
     * Required. The resource name of subject to delete the config for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Config$Get extends StandardParameters {
    /**
     * Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     */
    defaultToGlobal?: boolean;
    /**
     * Required. The resource name to get the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Get config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Get config for a specific subject.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Config$Update extends StandardParameters {
    /**
     * Required. The resource name to update the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Update config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Update config for a specific subject.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSchemaConfigRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts {
    context: APIRequestContext;
    compatibility: Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility;
    config: Resource$Projects$Locations$Schemaregistries$Contexts$Config;
    mode: Resource$Projects$Locations$Schemaregistries$Contexts$Mode;
    schemas: Resource$Projects$Locations$Schemaregistries$Contexts$Schemas;
    subjects: Resource$Projects$Locations$Schemaregistries$Contexts$Subjects;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.compatibility =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility(
          this.context
        );
      this.config =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Config(
          this.context
        );
      this.mode =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Mode(
          this.context
        );
      this.schemas =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Schemas(
          this.context
        );
      this.subjects =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Subjects(
          this.context
        );
    }

    /**
     * Get the context.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.get({
     *       // Required. The name of the context to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}`
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "name": "my_name",
     *   //   "subjects": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Context>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Context>,
      callback: BodyResponseCallback<Schema$Context>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get,
      callback: BodyResponseCallback<Schema$Context>
    ): void;
    get(callback: BodyResponseCallback<Schema$Context>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get
        | BodyResponseCallback<Schema$Context>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Context>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Context>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Context>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get;
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
        createAPIRequest<Schema$Context>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Context>(parameters);
      }
    }

    /**
     * List contexts for a schema registry.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.list({
     *       // Required. The parent of the contexts. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     *       parent:
     *         'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$List;
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
            url: (rootUrl + '/v1/{+parent}/contexts').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Get extends StandardParameters {
    /**
     * Required. The name of the context to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$List extends StandardParameters {
    /**
     * Required. The parent of the contexts. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Check compatibility of a schema with all versions or a specific version of a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.compatibility.checkCompatibility(
     *       {
     *         // Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/x/versions: Check compatibility with one or more versions of the specified subject. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/{subject\}/versions/{version\}: Check compatibility with a specific version of the subject.
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/compatibility/.*',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "references": [],
     *           //   "schema": "my_schema",
     *           //   "schemaType": "my_schemaType",
     *           //   "verbose": false
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "is_compatible": false,
     *   //   "messages": []
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
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    checkCompatibility(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CheckCompatibilityResponse>>;
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>,
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility,
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      callback: BodyResponseCallback<Schema$CheckCompatibilityResponse>
    ): void;
    checkCompatibility(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CheckCompatibilityResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CheckCompatibilityResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility;
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
        createAPIRequest<Schema$CheckCompatibilityResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CheckCompatibilityResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Compatibility$Checkcompatibility extends StandardParameters {
    /**
     * Required. The name of the resource to check compatibility for. The format is either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/x/versions: Check compatibility with one or more versions of the specified subject. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/compatibility/subjects/{subject\}/versions/{version\}: Check compatibility with a specific version of the subject.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CheckCompatibilityRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Config {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete schema config for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.config.delete(
     *       {
     *         // Required. The resource name of subject to delete the config for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/config/.*',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "compatibility": "my_compatibility",
     *   //   "normalize": false
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaConfig>,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SchemaConfig>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete;
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
        createAPIRequest<Schema$SchemaConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaConfig>(parameters);
      }
    }

    /**
     * Get schema config at global level or for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.config.get({
     *       // Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     *       defaultToGlobal: 'placeholder-value',
     *       // Required. The resource name to get the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Get config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Get config for a specific subject.
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/config/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "compatibility": "my_compatibility",
     *   //   "normalize": false
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaConfig>,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaConfig>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get;
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
        createAPIRequest<Schema$SchemaConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaConfig>(parameters);
      }
    }

    /**
     * Update config at global level or for a subject. Creates a SchemaSubject-level SchemaConfig if it does not exist.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.config.update(
     *       {
     *         // Required. The resource name to update the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Update config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Update config for a specific subject.
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/config/.*',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "compatibility": "my_compatibility",
     *           //   "normalize": false
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "alias": "my_alias",
     *   //   "compatibility": "my_compatibility",
     *   //   "normalize": false
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
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaConfig>,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update,
      callback: BodyResponseCallback<Schema$SchemaConfig>
    ): void;
    update(callback: BodyResponseCallback<Schema$SchemaConfig>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaConfig>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaConfig>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update;
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
            method: 'PUT',
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
        createAPIRequest<Schema$SchemaConfig>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Delete extends StandardParameters {
    /**
     * Required. The resource name of subject to delete the config for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Get extends StandardParameters {
    /**
     * Optional. If true, the config will fall back to the config at the global level if no subject level config is found.
     */
    defaultToGlobal?: boolean;
    /**
     * Required. The resource name to get the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Get config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Get config for a specific subject.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Config$Update extends StandardParameters {
    /**
     * Required. The resource name to update the config for. It can be either of following: * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config: Update config at global level. * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/config/{subject\}: Update config for a specific subject.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSchemaConfigRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Mode {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete schema mode for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.mode.delete(
     *       {
     *         // Required. The resource name of subject to delete the mode for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\} * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/mode/.*',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mode": "my_mode"
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaMode>,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SchemaMode>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete;
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
        createAPIRequest<Schema$SchemaMode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaMode>(parameters);
      }
    }

    /**
     * Get mode at global level or for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.mode.get({
     *       // Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/mode/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mode": "my_mode"
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaMode>,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaMode>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get;
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
        createAPIRequest<Schema$SchemaMode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaMode>(parameters);
      }
    }

    /**
     * Update mode at global level or for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.mode.update(
     *       {
     *         // Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/mode/.*',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "mode": "my_mode"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mode": "my_mode"
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
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaMode>,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    update(callback: BodyResponseCallback<Schema$SchemaMode>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update;
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
            method: 'PUT',
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
        createAPIRequest<Schema$SchemaMode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaMode>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Delete extends StandardParameters {
    /**
     * Required. The resource name of subject to delete the mode for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\} * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Get extends StandardParameters {
    /**
     * Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Mode$Update extends StandardParameters {
    /**
     * Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSchemaModeRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Schemas {
    context: APIRequestContext;
    subjects: Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects;
    types: Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types;
    versions: Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subjects =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects(
          this.context
        );
      this.types =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types(
          this.context
        );
      this.versions =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions(
          this.context
        );
    }

    /**
     * Get the schema for the given schema id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.schemas.get(
     *       {
     *         // Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/schemas/.*',
     *         // Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     *         subject: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "references": [],
     *   //   "schema": "my_schema",
     *   //   "schemaType": "my_schemaType"
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Schema>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    get(callback: BodyResponseCallback<Schema$Schema>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Schema>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get;
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
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Get the schema string for the given schema id. The response will be the schema string.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.schemas.getSchema(
     *       {
     *         // Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/schemas/.*',
     *         // Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     *         subject: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSchema(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema;
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
            url: (rootUrl + '/v1/{+name}/schema').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Get extends StandardParameters {
    /**
     * Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     */
    name?: string;
    /**
     * Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     */
    subject?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Getschema extends StandardParameters {
    /**
     * Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     */
    name?: string;
    /**
     * Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     */
    subject?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List subjects which reference a particular schema id. The response will be an array of subject names.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.schemas.subjects.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted subjects. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/schemas/.*',
     *         // Optional. The subject to filter the subjects by.
     *         subject: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List;
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
            url: (rootUrl + '/v1/{+parent}/subjects').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Subjects$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted subjects. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     */
    parent?: string;
    /**
     * Optional. The subject to filter the subjects by.
     */
    subject?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the supported schema types. The response will be an array of schema types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.schemas.types.list(
     *       {
     *         // Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List;
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
            url: (rootUrl + '/v1/{+parent}/schemas/types').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Types$List extends StandardParameters {
    /**
     * Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1\}, {"subject":"subject2", "version":2\}].
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.schemas.versions.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The schema whose schema versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/schemas/.*',
     *         // Optional. The subject to filter the subjects by.
     *         subject: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List;
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
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Schemas$Versions$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The schema whose schema versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     */
    parent?: string;
    /**
     * Optional. The subject to filter the subjects by.
     */
    subject?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Subjects {
    context: APIRequestContext;
    versions: Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.versions =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions(
          this.context
        );
    }

    /**
     * Delete a subject. The response will be an array of versions of the deleted subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.delete(
     *       {
     *         // Required. The name of the subject to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject',
     *         // Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     *         permanent: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete;
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * List subjects in the schema registry. The response will be an array of subject names.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted subjects. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context',
     *         // Optional. The context to filter the subjects by, in the format of `:.{context\}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     *         subjectPrefix: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List;
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
            url: (rootUrl + '/v1/{+parent}/subjects').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Lookup a schema under the specified subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.lookupVersion(
     *       {
     *         // Required. The subject to lookup the schema in. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "deleted": false,
     *           //   "normalize": false,
     *           //   "references": [],
     *           //   "schema": "my_schema",
     *           //   "schemaType": "my_schemaType"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": 0,
     *   //   "references": [],
     *   //   "schema": "my_schema",
     *   //   "schemaType": "my_schemaType",
     *   //   "subject": "my_subject",
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
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupVersion(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>;
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaVersion>,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    lookupVersion(callback: BodyResponseCallback<Schema$SchemaVersion>): void;
    lookupVersion(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion;
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
            url: (rootUrl + '/v1/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SchemaVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaVersion>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Delete extends StandardParameters {
    /**
     * Required. The name of the subject to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    name?: string;
    /**
     * Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     */
    permanent?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted subjects. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}`
     */
    parent?: string;
    /**
     * Optional. The context to filter the subjects by, in the format of `:.{context\}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     */
    subjectPrefix?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Lookupversion extends StandardParameters {
    /**
     * Required. The subject to lookup the schema in. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupVersionRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions {
    context: APIRequestContext;
    referencedby: Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.referencedby =
        new Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby(
          this.context
        );
    }

    /**
     * Register a new version under a given subject with the given schema.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.versions.create(
     *       {
     *         // Required. The subject to create the version for. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "id": 0,
     *           //   "normalize": false,
     *           //   "references": [],
     *           //   "schema": "my_schema",
     *           //   "schemaType": "my_schemaType",
     *           //   "version": 0
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": 0
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CreateVersionResponse>>;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateVersionResponse>,
      callback: BodyResponseCallback<Schema$CreateVersionResponse>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create,
      callback: BodyResponseCallback<Schema$CreateVersionResponse>
    ): void;
    create(callback: BodyResponseCallback<Schema$CreateVersionResponse>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create
        | BodyResponseCallback<Schema$CreateVersionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreateVersionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreateVersionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CreateVersionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create;
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
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$CreateVersionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreateVersionResponse>(parameters);
      }
    }

    /**
     * Delete a version of a subject. The response will be the deleted version id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.versions.delete(
     *       {
     *         // Required. The name of the subject version to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject/versions/my-version',
     *         // Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     *         permanent: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete;
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Get a versioned schema (schema with subject/version) of a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.versions.get(
     *       {
     *         // Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": 0,
     *   //   "references": [],
     *   //   "schema": "my_schema",
     *   //   "schemaType": "my_schemaType",
     *   //   "subject": "my_subject",
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
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaVersion>,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get;
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
        createAPIRequest<Schema$SchemaVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaVersion>(parameters);
      }
    }

    /**
     * Get the schema string only for a version of a subject. The response will be the schema string.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.versions.getSchema(
     *       {
     *         // Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSchema(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema;
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
            url: (rootUrl + '/v1/{+name}/schema').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Get all versions of a subject. The response will be an array of versions of the subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.versions.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The subject whose versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List;
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
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Create extends StandardParameters {
    /**
     * Required. The subject to create the version for. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Delete extends StandardParameters {
    /**
     * Required. The name of the subject version to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    name?: string;
    /**
     * Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     */
    permanent?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Get extends StandardParameters {
    /**
     * Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Getschema extends StandardParameters {
    /**
     * Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The subject whose versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a list of IDs of schemas that reference the schema with the given subject and version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby.list(
     *       {
     *         // Required. The version to list referenced by. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/contexts/my-context/subjects/my-subject/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List;
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
            url: (rootUrl + '/v1/{+parent}/referencedby').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Contexts$Subjects$Versions$Referencedby$List extends StandardParameters {
    /**
     * Required. The version to list referenced by. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Mode {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Delete schema mode for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.mode.delete({
     *       // Required. The resource name of subject to delete the mode for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\} * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/mode/.*',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mode": "my_mode"
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaMode>,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    delete(callback: BodyResponseCallback<Schema$SchemaMode>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete;
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
        createAPIRequest<Schema$SchemaMode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaMode>(parameters);
      }
    }

    /**
     * Get mode at global level or for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res = await managedkafka.projects.locations.schemaRegistries.mode.get({
     *     // Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     *     name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/mode/.*',
     *   });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mode": "my_mode"
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Mode$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaMode>,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Get,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaMode>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Mode$Get
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Mode$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Mode$Get;
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
        createAPIRequest<Schema$SchemaMode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaMode>(parameters);
      }
    }

    /**
     * Update mode at global level or for a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.mode.update({
     *       // Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/mode/.*',
     *
     *       // Request body metadata
     *       requestBody: {
     *         // request body parameters
     *         // {
     *         //   "mode": "my_mode"
     *         // }
     *       },
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "mode": "my_mode"
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
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Update,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    update(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Mode$Update,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Update,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Update,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaMode>,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    update(
      params: Params$Resource$Projects$Locations$Schemaregistries$Mode$Update,
      callback: BodyResponseCallback<Schema$SchemaMode>
    ): void;
    update(callback: BodyResponseCallback<Schema$SchemaMode>): void;
    update(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Mode$Update
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaMode>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaMode>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Mode$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Mode$Update;
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
            method: 'PUT',
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
        createAPIRequest<Schema$SchemaMode>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaMode>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Mode$Delete extends StandardParameters {
    /**
     * Required. The resource name of subject to delete the mode for. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\} * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Mode$Get extends StandardParameters {
    /**
     * Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Mode$Update extends StandardParameters {
    /**
     * Required. The resource name of the mode. The format is * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/mode/{subject\}: mode for a schema registry, or * projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/mode/{subject\}: mode for a specific subject in a specific context
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateSchemaModeRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Schemas {
    context: APIRequestContext;
    subjects: Resource$Projects$Locations$Schemaregistries$Schemas$Subjects;
    types: Resource$Projects$Locations$Schemaregistries$Schemas$Types;
    versions: Resource$Projects$Locations$Schemaregistries$Schemas$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.subjects =
        new Resource$Projects$Locations$Schemaregistries$Schemas$Subjects(
          this.context
        );
      this.types =
        new Resource$Projects$Locations$Schemaregistries$Schemas$Types(
          this.context
        );
      this.versions =
        new Resource$Projects$Locations$Schemaregistries$Schemas$Versions(
          this.context
        );
    }

    /**
     * Get the schema for the given schema id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.schemas.get({
     *       // Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/schemas/.*',
     *       // Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     *       subject: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "references": [],
     *   //   "schema": "my_schema",
     *   //   "schemaType": "my_schemaType"
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$Schema>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Schema>,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get,
      callback: BodyResponseCallback<Schema$Schema>
    ): void;
    get(callback: BodyResponseCallback<Schema$Schema>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$Schema>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$Schema>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get;
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
        createAPIRequest<Schema$Schema>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$Schema>(parameters);
      }
    }

    /**
     * Get the schema string for the given schema id. The response will be the schema string.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.schemas.getSchema({
     *       // Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/schemas/.*',
     *       // Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     *       subject: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSchema(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema;
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
            url: (rootUrl + '/v1/{+name}/schema').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Schemas$Get extends StandardParameters {
    /**
     * Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     */
    name?: string;
    /**
     * Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     */
    subject?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Schemas$Getschema extends StandardParameters {
    /**
     * Required. The name of the schema to return. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}`
     */
    name?: string;
    /**
     * Optional. Used to limit the search for the schema ID to a specific subject, otherwise the schema ID will be searched for in all subjects in the given specified context.
     */
    subject?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Schemas$Subjects {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List subjects which reference a particular schema id. The response will be an array of subject names.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.schemas.subjects.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted subjects. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/schemas/.*',
     *         // Optional. The subject to filter the subjects by.
     *         subject: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List;
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
            url: (rootUrl + '/v1/{+parent}/subjects').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Schemas$Subjects$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted subjects. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The schema resource whose associated subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     */
    parent?: string;
    /**
     * Optional. The subject to filter the subjects by.
     */
    subject?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Schemas$Types {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the supported schema types. The response will be an array of schema types.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.schemas.types.list({
     *       // Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     *       parent:
     *         'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List;
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
            url: (rootUrl + '/v1/{+parent}/schemas/types').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Schemas$Types$List extends StandardParameters {
    /**
     * Required. The parent schema registry whose schema types are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Schemas$Versions {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * List the schema versions for the given schema id. The response will be an array of subject-version pairs as: [{"subject":"subject1", "version":1\}, {"subject":"subject2", "version":2\}].
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.schemas.versions.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The schema whose schema versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/schemas/.*',
     *         // Optional. The subject to filter the subjects by.
     *         subject: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List;
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
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Schemas$Versions$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted versions of the schema, even if the subject is soft-deleted. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The schema whose schema versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/schemas/ids/{schema\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/schemas/ids/{schema\}`
     */
    parent?: string;
    /**
     * Optional. The subject to filter the subjects by.
     */
    subject?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Subjects {
    context: APIRequestContext;
    versions: Resource$Projects$Locations$Schemaregistries$Subjects$Versions;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.versions =
        new Resource$Projects$Locations$Schemaregistries$Subjects$Versions(
          this.context
        );
    }

    /**
     * Delete a subject. The response will be an array of versions of the deleted subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.delete({
     *       // Required. The name of the subject to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *       name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject',
     *       // Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     *       permanent: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete;
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * List subjects in the schema registry. The response will be an array of subject names.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.list({
     *       // Optional. If true, the response will include soft-deleted subjects. The default is false.
     *       deleted: 'placeholder-value',
     *       // Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}`
     *       parent:
     *         'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie',
     *       // Optional. The context to filter the subjects by, in the format of `:.{context\}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     *       subjectPrefix: 'placeholder-value',
     *     });
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$List;
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
            url: (rootUrl + '/v1/{+parent}/subjects').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Lookup a schema under the specified subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.lookupVersion(
     *       {
     *         // Required. The subject to lookup the schema in. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "deleted": false,
     *           //   "normalize": false,
     *           //   "references": [],
     *           //   "schema": "my_schema",
     *           //   "schemaType": "my_schemaType"
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": 0,
     *   //   "references": [],
     *   //   "schema": "my_schema",
     *   //   "schemaType": "my_schemaType",
     *   //   "subject": "my_subject",
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
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    lookupVersion(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>;
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaVersion>,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    lookupVersion(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    lookupVersion(callback: BodyResponseCallback<Schema$SchemaVersion>): void;
    lookupVersion(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion;
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
            url: (rootUrl + '/v1/{+parent}').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$SchemaVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaVersion>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Delete extends StandardParameters {
    /**
     * Required. The name of the subject to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    name?: string;
    /**
     * Optional. If true, the subject and all associated metadata including the schema ID will be deleted permanently. Otherwise, only the subject is soft-deleted. The default is false. Soft-deleted subjects can still be searched in ListSubjects API call with deleted=true query parameter. A soft-delete of a subject must be performed before a hard-delete.
     */
    permanent?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted subjects. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The parent schema registry/context whose subjects are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}`
     */
    parent?: string;
    /**
     * Optional. The context to filter the subjects by, in the format of `:.{context\}:`. If unset, all subjects in the registry are returned. Set to empty string or add as '?subjectPrefix=' at the end of this request to list subjects in the default context.
     */
    subjectPrefix?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Lookupversion extends StandardParameters {
    /**
     * Required. The subject to lookup the schema in. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LookupVersionRequest;
  }

  export class Resource$Projects$Locations$Schemaregistries$Subjects$Versions {
    context: APIRequestContext;
    referencedby: Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.referencedby =
        new Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby(
          this.context
        );
    }

    /**
     * Register a new version under a given subject with the given schema.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.versions.create(
     *       {
     *         // Required. The subject to create the version for. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject',
     *
     *         // Request body metadata
     *         requestBody: {
     *           // request body parameters
     *           // {
     *           //   "id": 0,
     *           //   "normalize": false,
     *           //   "references": [],
     *           //   "schema": "my_schema",
     *           //   "schemaType": "my_schemaType",
     *           //   "version": 0
     *           // }
     *         },
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": 0
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    create(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$CreateVersionResponse>>;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$CreateVersionResponse>,
      callback: BodyResponseCallback<Schema$CreateVersionResponse>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create,
      callback: BodyResponseCallback<Schema$CreateVersionResponse>
    ): void;
    create(callback: BodyResponseCallback<Schema$CreateVersionResponse>): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create
        | BodyResponseCallback<Schema$CreateVersionResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$CreateVersionResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$CreateVersionResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$CreateVersionResponse>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create;
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
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$CreateVersionResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$CreateVersionResponse>(parameters);
      }
    }

    /**
     * Delete a version of a subject. The response will be the deleted version id.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.versions.delete(
     *       {
     *         // Required. The name of the subject version to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject/versions/my-version',
     *         // Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     *         permanent: 'placeholder-value',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    delete(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    delete(callback: BodyResponseCallback<Schema$HttpBody>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete;
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Get a versioned schema (schema with subject/version) of a subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.versions.get(
     *       {
     *         // Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "id": 0,
     *   //   "references": [],
     *   //   "schema": "my_schema",
     *   //   "schemaType": "my_schemaType",
     *   //   "subject": "my_subject",
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
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    get(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get,
      options: MethodOptions | BodyResponseCallback<Schema$SchemaVersion>,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get,
      callback: BodyResponseCallback<Schema$SchemaVersion>
    ): void;
    get(callback: BodyResponseCallback<Schema$SchemaVersion>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$SchemaVersion>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$SchemaVersion>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get;
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
        createAPIRequest<Schema$SchemaVersion>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$SchemaVersion>(parameters);
      }
    }

    /**
     * Get the schema string only for a version of a subject. The response will be the schema string.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.versions.getSchema(
     *       {
     *         // Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         name: 'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    getSchema(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    getSchema(callback: BodyResponseCallback<Schema$HttpBody>): void;
    getSchema(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema;
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
            url: (rootUrl + '/v1/{+name}/schema').replace(/([^:]\/)\/+/g, '$1'),
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }

    /**
     * Get all versions of a subject. The response will be an array of versions of the subject.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.versions.list(
     *       {
     *         // Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     *         deleted: 'placeholder-value',
     *         // Required. The subject whose versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List;
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
            url: (rootUrl + '/v1/{+parent}/versions').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Create extends StandardParameters {
    /**
     * Required. The subject to create the version for. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CreateVersionRequest;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Delete extends StandardParameters {
    /**
     * Required. The name of the subject version to delete. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    name?: string;
    /**
     * Optional. If true, both the version and the referenced schema ID will be permanently deleted. The default is false. If false, the version will be deleted but the schema ID will be retained. Soft-deleted versions can still be searched in ListVersions API call with deleted=true query parameter. A soft-delete of a version must be performed before a hard-delete.
     */
    permanent?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Get extends StandardParameters {
    /**
     * Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Getschema extends StandardParameters {
    /**
     * Optional. If true, no matter if the subject/version is soft-deleted or not, it returns the version details. If false, it returns NOT_FOUND error if the subject/version is soft-deleted. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The name of the subject to return versions. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$List extends StandardParameters {
    /**
     * Optional. If true, the response will include soft-deleted versions of an active or soft-deleted subject. The default is false.
     */
    deleted?: boolean;
    /**
     * Required. The subject whose versions are to be listed. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}`
     */
    parent?: string;
  }

  export class Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Get a list of IDs of schemas that reference the schema with the given subject and version.
     * @example
     * ```js
     * // Before running the sample:
     * // - Enable the API at:
     * //   https://console.developers.google.com/apis/api/managedkafka.googleapis.com
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
     * const managedkafka = google.managedkafka('v1');
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
     *   const res =
     *     await managedkafka.projects.locations.schemaRegistries.subjects.versions.referencedby.list(
     *       {
     *         // Required. The version to list referenced by. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     *         parent:
     *           'projects/my-project/locations/my-location/schemaRegistries/my-schemaRegistrie/subjects/my-subject/versions/my-version',
     *       },
     *     );
     *   console.log(res.data);
     *
     *   // Example response
     *   // {
     *   //   "contentType": "my_contentType",
     *   //   "data": "my_data",
     *   //   "extensions": []
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
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List,
      options: StreamMethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Readable>>;
    list(
      params?: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List,
      options?: MethodOptions
    ): Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List,
      options: MethodOptions | BodyResponseCallback<Schema$HttpBody>,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List,
      callback: BodyResponseCallback<Schema$HttpBody>
    ): void;
    list(callback: BodyResponseCallback<Schema$HttpBody>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$HttpBody>
        | BodyResponseCallback<Readable>
    ):
      | void
      | Promise<GaxiosResponseWithHTTP2<Schema$HttpBody>>
      | Promise<GaxiosResponseWithHTTP2<Readable>> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List;
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
            url: (rootUrl + '/v1/{+parent}/referencedby').replace(
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
        createAPIRequest<Schema$HttpBody>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$HttpBody>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Schemaregistries$Subjects$Versions$Referencedby$List extends StandardParameters {
    /**
     * Required. The version to list referenced by. Structured like: `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/subjects/{subject\}/versions/{version\}` or `projects/{project\}/locations/{location\}/schemaRegistries/{schema_registry\}/contexts/{context\}/subjects/{subject\}/versions/{version\}`
     */
    parent?: string;
  }
}
