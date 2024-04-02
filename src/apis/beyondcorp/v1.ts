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

export namespace beyondcorp_v1 {
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
   * BeyondCorp API
   *
   * Beyondcorp Enterprise provides identity and context aware access controls for enterprise resources and enables zero-trust access. Using the Beyondcorp Enterprise APIs, enterprises can set up multi-cloud and on-prem connectivity solutions.
   *
   * @example
   * ```js
   * const {google} = require('googleapis');
   * const beyondcorp = google.beyondcorp('v1');
   * ```
   */
  export class Beyondcorp {
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
   * Allocated connection of the AppGateway.
   */
  export interface Schema$AllocatedConnection {
    /**
     * Required. The ingress port of an allocated connection
     */
    ingressPort?: number | null;
    /**
     * Required. The PSC uri of an allocated connection
     */
    pscUri?: string | null;
  }
  /**
   * A BeyondCorp AppGateway resource represents a BeyondCorp protected AppGateway to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppGateway. Multiple connectors can be authorised for a single AppGateway.
   */
  export interface Schema$AppGateway {
    /**
     * Output only. A list of connections allocated for the Gateway
     */
    allocatedConnections?: Schema$AllocatedConnection[];
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. An arbitrary user-provided name for the AppGateway. Cannot exceed 64 characters.
     */
    displayName?: string | null;
    /**
     * Required. The type of hosting used by the AppGateway.
     */
    hostType?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Unique resource name of the AppGateway. The name is ignored when creating an AppGateway.
     */
    name?: string | null;
    /**
     * Output only. The current state of the AppGateway.
     */
    state?: string | null;
    /**
     * Required. The type of network connectivity used by the AppGateway.
     */
    type?: string | null;
    /**
     * Output only. A unique identifier for the instance generated by the system.
     */
    uid?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
    /**
     * Output only. Server-defined URI for this resource.
     */
    uri?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$AppGatewayOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * ConnectionConfig represents a Connection Configuration object.
   */
  export interface Schema$CloudSecurityZerotrustApplinkAppConnectorProtoConnectionConfig {
    /**
     * application_endpoint is the endpoint of the application the form of host:port. For example, "localhost:80".
     */
    applicationEndpoint?: string | null;
    /**
     * application_name represents the given name of the application the connection is connecting with.
     */
    applicationName?: string | null;
    /**
     * gateway lists all instances running a gateway in GCP. They all connect to a connector on the host.
     */
    gateway?: Schema$CloudSecurityZerotrustApplinkAppConnectorProtoGateway[];
    /**
     * name is the unique ID for each connection. TODO(b/190732451) returns connection name from user-specified name in config. Now, name = ${application_name\}:${application_endpoint\}
     */
    name?: string | null;
    /**
     * project represents the consumer project the connection belongs to.
     */
    project?: string | null;
    /**
     * tunnels_per_gateway reflects the number of tunnels between a connector and a gateway.
     */
    tunnelsPerGateway?: number | null;
    /**
     * user_port specifies the reserved port on gateways for user connections.
     */
    userPort?: number | null;
  }
  /**
   * ConnectorDetails reflects the details of a connector.
   */
  export interface Schema$CloudSecurityZerotrustApplinkAppConnectorProtoConnectorDetails {}
  /**
   * Gateway represents a GCE VM Instance endpoint for use by IAP TCP.
   */
  export interface Schema$CloudSecurityZerotrustApplinkAppConnectorProtoGateway {
    /**
     * interface specifies the network interface of the gateway to connect to.
     */
    interface?: string | null;
    /**
     * name is the name of an instance running a gateway. It is the unique ID for a gateway. All gateways under the same connection have the same prefix. It is derived from the gateway URL. For example, name=${instance\} assuming a gateway URL. https://www.googleapis.com/compute/${version\}/projects/${project\}/zones/${zone\}/instances/${instance\}
     */
    name?: string | null;
    /**
     * port specifies the port of the gateway for tunnel connections from the connectors.
     */
    port?: number | null;
    /**
     * project is the tenant project the gateway belongs to. Different from the project in the connection, it is a BeyondCorpAPI internally created project to manage all the gateways. It is sharing the same network with the consumer project user owned. It is derived from the gateway URL. For example, project=${project\} assuming a gateway URL. https://www.googleapis.com/compute/${version\}/projects/${project\}/zones/${zone\}/instances/${instance\}
     */
    project?: string | null;
    /**
     * self_link is the gateway URL in the form https://www.googleapis.com/compute/${version\}/projects/${project\}/zones/${zone\}/instances/${instance\}
     */
    selfLink?: string | null;
    /**
     * zone represents the zone the instance belongs. It is derived from the gateway URL. For example, zone=${zone\} assuming a gateway URL. https://www.googleapis.com/compute/${version\}/projects/${project\}/zones/${zone\}/instances/${instance\}
     */
    zone?: string | null;
  }
  /**
   * LogAgentDetails reflects the details of a log agent.
   */
  export interface Schema$CloudSecurityZerotrustApplinkLogagentProtoLogAgentDetails {}
  /**
   * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
   */
  export interface Schema$Empty {}
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * A BeyondCorp AppConnection resource represents a BeyondCorp protected AppConnection to a remote application. It creates all the necessary GCP components needed for creating a BeyondCorp protected AppConnection. Multiple connectors can be authorised for a single AppConnection.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection {
    /**
     * Required. Address of the remote application endpoint for the BeyondCorp AppConnection.
     */
    applicationEndpoint?: Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint;
    /**
     * Optional. List of [google.cloud.beyondcorp.v1main.Connector.name] that are authorised to be associated with this AppConnection.
     */
    connectors?: string[] | null;
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. An arbitrary user-provided name for the AppConnection. Cannot exceed 64 characters.
     */
    displayName?: string | null;
    /**
     * Optional. Gateway used by the AppConnection.
     */
    gateway?: Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway;
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection.
     */
    name?: string | null;
    /**
     * Output only. The current state of the AppConnection.
     */
    state?: string | null;
    /**
     * Required. The type of network connectivity used by the AppConnection.
     */
    type?: string | null;
    /**
     * Output only. A unique identifier for the instance generated by the system.
     */
    uid?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * ApplicationEndpoint represents a remote application endpoint.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint {
    /**
     * Required. Hostname or IP address of the remote application endpoint.
     */
    host?: string | null;
    /**
     * Required. Port of the remote application endpoint.
     */
    port?: number | null;
  }
  /**
   * Gateway represents a user facing component that serves as an entrance to enable connectivity.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway {
    /**
     * Required. AppGateway name in following format: `projects/{project_id\}/locations/{location_id\}/appgateways/{gateway_id\}`
     */
    appGateway?: string | null;
    /**
     * Output only. Ingress port reserved on the gateways for this AppConnection, if not specified or zero, the default port is 19443.
     */
    ingressPort?: number | null;
    /**
     * Output only. L7 private service connection for this resource.
     */
    l7psc?: string | null;
    /**
     * Required. The type of hosting used by the gateway.
     */
    type?: string | null;
    /**
     * Output only. Server-defined URI for this resource.
     */
    uri?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnectionOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Response message for BeyondCorp.ListAppConnections.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse {
    /**
     * A list of BeyondCorp AppConnections in the project.
     */
    appConnections?: Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Response message for BeyondCorp.ResolveAppConnections.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse {
    /**
     * A list of BeyondCorp AppConnections with details in the project.
     */
    appConnectionDetails?: Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * Details of the AppConnection.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponseAppConnectionDetails {
    /**
     * A BeyondCorp AppConnection in the project.
     */
    appConnection?: Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection;
    /**
     * If type=GCP_REGIONAL_MIG, contains most recent VM instances, like `https://www.googleapis.com/compute/v1/projects/{project_id\}/zones/{zone_id\}/instances/{instance_id\}`.
     */
    recentMigVms?: string[] | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnectorOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * ContainerHealthDetails reflects the health details of a container.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1alphaContainerHealthDetails {
    /**
     * The version of the current config.
     */
    currentConfigVersion?: string | null;
    /**
     * The latest error message.
     */
    errorMsg?: string | null;
    /**
     * The version of the expected config.
     */
    expectedConfigVersion?: string | null;
    /**
     * The extended status. Such as ExitCode, StartedAt, FinishedAt, etc.
     */
    extendedStatus?: {[key: string]: string} | null;
  }
  /**
   * RemoteAgentDetails reflects the details of a remote agent.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1alphaRemoteAgentDetails {}
  /**
   * A BeyondCorp connector resource that represents an application facing component deployed proximal to and with direct access to the application instances. It is used to establish connectivity between the remote enterprise environment and GCP. It initiates connections to the applications and can proxy the data from users over the connection.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector {
    /**
     * Output only. Timestamp when the resource was created.
     */
    createTime?: string | null;
    /**
     * Optional. An arbitrary user-provided name for the AppConnector. Cannot exceed 64 characters.
     */
    displayName?: string | null;
    /**
     * Optional. Resource labels to represent user provided metadata.
     */
    labels?: {[key: string]: string} | null;
    /**
     * Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.
     */
    name?: string | null;
    /**
     * Required. Principal information about the Identity of the AppConnector.
     */
    principalInfo?: Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo;
    /**
     * Optional. Resource info of the connector.
     */
    resourceInfo?: Schema$GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
    /**
     * Output only. The current state of the AppConnector.
     */
    state?: string | null;
    /**
     * Output only. A unique identifier for the instance generated by the system.
     */
    uid?: string | null;
    /**
     * Output only. Timestamp when the resource was last modified.
     */
    updateTime?: string | null;
  }
  /**
   * AppConnectorInstanceConfig defines the instance config of a AppConnector.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig {
    /**
     * ImageConfig defines the GCR images to run for the remote agent's control plane.
     */
    imageConfig?: Schema$GoogleCloudBeyondcorpAppconnectorsV1ImageConfig;
    /**
     * The SLM instance agent configuration.
     */
    instanceConfig?: {[key: string]: any} | null;
    /**
     * NotificationConfig defines the notification mechanism that the remote instance should subscribe to in order to receive notification.
     */
    notificationConfig?: Schema$GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig;
    /**
     * Required. A monotonically increasing number generated and maintained by the API provider. Every time a config changes in the backend, the sequenceNumber should be bumped up to reflect the change.
     */
    sequenceNumber?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * PrincipalInfo represents an Identity oneof.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfo {
    /**
     * A GCP service account.
     */
    serviceAccount?: Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount;
  }
  /**
   * ServiceAccount represents a GCP service account.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorPrincipalInfoServiceAccount {
    /**
     * Email address of the service account.
     */
    email?: string | null;
  }
  /**
   * ContainerHealthDetails reflects the health details of a container.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails {
    /**
     * The version of the current config.
     */
    currentConfigVersion?: string | null;
    /**
     * The latest error message.
     */
    errorMsg?: string | null;
    /**
     * The version of the expected config.
     */
    expectedConfigVersion?: string | null;
    /**
     * The extended status. Such as ExitCode, StartedAt, FinishedAt, etc.
     */
    extendedStatus?: {[key: string]: string} | null;
  }
  /**
   * ImageConfig defines the control plane images to run.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1ImageConfig {
    /**
     * The stable image that the remote agent will fallback to if the target image fails. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1
     */
    stableImage?: string | null;
    /**
     * The initial image the remote agent will attempt to run for the control plane. Format would be a gcr image path, e.g.: gcr.io/PROJECT-ID/my-image:tag1
     */
    targetImage?: string | null;
  }
  /**
   * Response message for BeyondCorp.ListAppConnectors.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse {
    /**
     * A list of BeyondCorp AppConnectors in the project.
     */
    appConnectors?: Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * NotificationConfig defines the mechanisms to notify instance agent.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1NotificationConfig {
    /**
     * Cloud Pub/Sub Configuration to receive notifications.
     */
    pubsubNotification?: Schema$GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig;
  }
  /**
   * The configuration for Pub/Sub messaging for the AppConnector.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1NotificationConfigCloudPubSubNotificationConfig {
    /**
     * The Pub/Sub subscription the AppConnector uses to receive notifications.
     */
    pubsubSubscription?: string | null;
  }
  /**
   * RemoteAgentDetails reflects the details of a remote agent.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1RemoteAgentDetails {}
  /**
   * Request report the connector status.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest {
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string | null;
    /**
     * Required. Resource info of the connector.
     */
    resourceInfo?: Schema$GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean | null;
  }
  /**
   * Response message for BeyondCorp.ResolveInstanceConfig.
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse {
    /**
     * AppConnectorInstanceConfig.
     */
    instanceConfig?: Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnectorInstanceConfig;
  }
  /**
   * ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
   */
  export interface Schema$GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo {
    /**
     * Required. Unique Id for the resource.
     */
    id?: string | null;
    /**
     * Specific details for the resource. This is for internal use only.
     */
    resource?: {[key: string]: any} | null;
    /**
     * Overall health status. Overall status is derived based on the status of each sub level resources.
     */
    status?: string | null;
    /**
     * List of Info for the sub level resources.
     */
    sub?: Schema$GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo[];
    /**
     * The timestamp to collect the info. It is suggested to be set by the topmost level resource only.
     */
    time?: string | null;
  }
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpAppgatewaysV1alphaAppGatewayOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpConnectionsV1alphaConnectionOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpConnectorsV1alphaConnectorOperationMetadata {
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
     * Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * ContainerHealthDetails reflects the health details of a container.
   */
  export interface Schema$GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails {
    /**
     * The version of the current config.
     */
    currentConfigVersion?: string | null;
    /**
     * The latest error message.
     */
    errorMsg?: string | null;
    /**
     * The version of the expected config.
     */
    expectedConfigVersion?: string | null;
    /**
     * The extended status. Such as ExitCode, StartedAt, FinishedAt, etc.
     */
    extendedStatus?: {[key: string]: string} | null;
  }
  /**
   * RemoteAgentDetails reflects the details of a remote agent.
   */
  export interface Schema$GoogleCloudBeyondcorpConnectorsV1alphaRemoteAgentDetails {}
  /**
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpPartnerservicesV1alphaPartnerServiceOperationMetadata {
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
     * Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpPartnerservicesV1mainPartnerServiceOperationMetadata {
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
     * Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
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
   * Represents the metadata of the long-running operation.
   */
  export interface Schema$GoogleCloudBeyondcorpSecuritygatewaysV1alphaSecurityGatewayOperationMetadata {
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
   * The response message for Locations.ListLocations.
   */
  export interface Schema$GoogleCloudLocationListLocationsResponse {
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
   * Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \}, { "log_type": "ADMIN_READ" \} ] \}, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" \}, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] \} ] \} ] \} For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.
   */
  export interface Schema$GoogleIamV1AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$GoogleIamV1AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
     */
    service?: string | null;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] \}, { "log_type": "DATA_WRITE" \} ] \} This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
   */
  export interface Schema$GoogleIamV1AuditLogConfig {
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
  export interface Schema$GoogleIamV1Binding {
    /**
     * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     */
    condition?: Schema$GoogleTypeExpr;
    /**
     * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/group/{group_id\}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/x`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/subject/{subject_attribute_value\}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/group/{group_id\}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/attribute.{attribute_name\}/{attribute_value\}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number\}/locations/global/workloadIdentityPools/{pool_id\}/x`: All identities in a workload identity pool. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id\}/subject/{subject_attribute_value\}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.
     */
    members?: string[] | null;
    /**
     * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).
     */
    role?: string | null;
  }
  /**
   * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
   */
  export interface Schema$GoogleIamV1Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$GoogleIamV1AuditConfig[];
    /**
     * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
     */
    bindings?: Schema$GoogleIamV1Binding[];
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
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
     */
    policy?: Schema$GoogleIamV1Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`
     */
    updateMask?: string | null;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[] | null;
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[] | null;
  }
  /**
   * The request message for Operations.CancelOperation.
   */
  export interface Schema$GoogleLongrunningCancelOperationRequest {}
  /**
   * The response message for Operations.ListOperations.
   */
  export interface Schema$GoogleLongrunningListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string | null;
    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: Schema$GoogleLongrunningOperation[];
  }
  /**
   * This resource represents a long-running operation that is the result of a network API call.
   */
  export interface Schema$GoogleLongrunningOperation {
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
   * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
   */
  export interface Schema$GoogleTypeExpr {
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
   * Response message for BeyondCorp.ListAppGateways.
   */
  export interface Schema$ListAppGatewaysResponse {
    /**
     * A list of BeyondCorp AppGateways in the project.
     */
    appGateways?: Schema$AppGateway[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string | null;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[] | null;
  }
  /**
   * TunnelerError is an error proto for errors returned by the connection manager.
   */
  export interface Schema$Tunnelv1ProtoTunnelerError {
    /**
     * Original raw error
     */
    err?: string | null;
    /**
     * retryable isn't used for now, but we may want to reuse it in the future.
     */
    retryable?: boolean | null;
  }
  /**
   * TunnelerInfo contains metadata about tunneler launched by connection manager.
   */
  export interface Schema$Tunnelv1ProtoTunnelerInfo {
    /**
     * backoff_retry_count stores the number of times the tunneler has been retried by tunManager for current backoff sequence. Gets reset to 0 if time difference between 2 consecutive retries exceeds backoffRetryResetTime.
     */
    backoffRetryCount?: number | null;
    /**
     * id is the unique id of a tunneler.
     */
    id?: string | null;
    /**
     * latest_err stores the Error for the latest tunneler failure. Gets reset everytime the tunneler is retried by tunManager.
     */
    latestErr?: Schema$Tunnelv1ProtoTunnelerError;
    /**
     * latest_retry_time stores the time when the tunneler was last restarted.
     */
    latestRetryTime?: string | null;
    /**
     * total_retry_count stores the total number of times the tunneler has been retried by tunManager.
     */
    totalRetryCount?: number | null;
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
    global: Resource$Organizations$Locations$Global;
    operations: Resource$Organizations$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.global = new Resource$Organizations$Locations$Global(this.context);
      this.operations = new Resource$Organizations$Locations$Operations(
        this.context
      );
    }
  }

  export class Resource$Organizations$Locations$Global {
    context: APIRequestContext;
    partnerTenants: Resource$Organizations$Locations$Global$Partnertenants;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.partnerTenants =
        new Resource$Organizations$Locations$Global$Partnertenants(
          this.context
        );
    }
  }

  export class Resource$Organizations$Locations$Global$Partnertenants {
    context: APIRequestContext;
    browserDlpRules: Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules;
    proxyConfigs: Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.browserDlpRules =
        new Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules(
          this.context
        );
      this.proxyConfigs =
        new Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs(
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Getiampolicy
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
  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Getiampolicy
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
  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Browserdlprules$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Getiampolicy
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
  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Organizations$Locations$Global$Partnertenants$Proxyconfigs$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Organizations$Locations$Operations {
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
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    cancel(
      params?: Params$Resource$Organizations$Locations$Operations$Cancel,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    cancel(
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(
      params: Params$Resource$Organizations$Locations$Operations$Cancel,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    cancel(callback: BodyResponseCallback<Schema$Empty>): void;
    cancel(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Cancel
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
        {}) as Params$Resource$Organizations$Locations$Operations$Cancel;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Operations$Cancel;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Organizations$Locations$Operations$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Empty>;
    delete(
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Empty>,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(
      params: Params$Resource$Organizations$Locations$Operations$Delete,
      callback: BodyResponseCallback<Schema$Empty>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Delete
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
        {}) as Params$Resource$Organizations$Locations$Operations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Organizations$Locations$Operations$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Organizations$Locations$Operations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Organizations$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Operations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
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
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Organizations$Locations$Operations$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Organizations$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Organizations$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Organizations$Locations$Operations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Organizations$Locations$Operations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Organizations$Locations$Operations$Cancel
    extends StandardParameters {
    /**
     * The name of the operation resource to be cancelled.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
  }
  export interface Params$Resource$Organizations$Locations$Operations$Delete
    extends StandardParameters {
    /**
     * The name of the operation resource to be deleted.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$Get
    extends StandardParameters {
    /**
     * The name of the operation resource.
     */
    name?: string;
  }
  export interface Params$Resource$Organizations$Locations$Operations$List
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
    appConnections: Resource$Projects$Locations$Appconnections;
    appConnectors: Resource$Projects$Locations$Appconnectors;
    appGateways: Resource$Projects$Locations$Appgateways;
    clientConnectorServices: Resource$Projects$Locations$Clientconnectorservices;
    clientGateways: Resource$Projects$Locations$Clientgateways;
    operations: Resource$Projects$Locations$Operations;
    constructor(context: APIRequestContext) {
      this.context = context;
      this.appConnections = new Resource$Projects$Locations$Appconnections(
        this.context
      );
      this.appConnectors = new Resource$Projects$Locations$Appconnectors(
        this.context
      );
      this.appGateways = new Resource$Projects$Locations$Appgateways(
        this.context
      );
      this.clientConnectorServices =
        new Resource$Projects$Locations$Clientconnectorservices(this.context);
      this.clientGateways = new Resource$Projects$Locations$Clientgateways(
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
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudLocationLocation>;
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
      | GaxiosPromise<Schema$GoogleCloudLocationLocation>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
    ): GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$List,
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$List
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudLocationListLocationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudLocationListLocationsResponse>
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

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudLocationListLocationsResponse>(
          parameters
        );
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

  export class Resource$Projects$Locations$Appconnections {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new AppConnection in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Appconnections$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Appconnections$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Appconnections$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Appconnections$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Appconnections$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnections$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appConnections').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a single AppConnection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Appconnections$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Appconnections$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Appconnections$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Appconnections$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Appconnections$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnections$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets details of a single AppConnection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Appconnections$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Appconnections$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>;
    get(
      params: Params$Resource$Projects$Locations$Appconnections$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Appconnections$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Appconnections$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Get
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnections$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection>(
          parameters
        );
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
      params: Params$Resource$Projects$Locations$Appconnections$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Appconnections$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnections$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnections$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnections$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnections$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists AppConnections in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Appconnections$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Appconnections$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Appconnections$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Appconnections$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Appconnections$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$List
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnections$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appConnections').replace(
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
        createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single AppConnection.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Appconnections$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Appconnections$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Appconnections$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Appconnections$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Appconnections$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnections$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resolve(
      params: Params$Resource$Projects$Locations$Appconnections$Resolve,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resolve(
      params?: Params$Resource$Projects$Locations$Appconnections$Resolve,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>;
    resolve(
      params: Params$Resource$Projects$Locations$Appconnections$Resolve,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resolve(
      params: Params$Resource$Projects$Locations$Appconnections$Resolve,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
    ): void;
    resolve(
      params: Params$Resource$Projects$Locations$Appconnections$Resolve,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
    ): void;
    resolve(
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
    ): void;
    resolve(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Resolve
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Resolve;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnections$Resolve;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appConnections:resolve').replace(
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
        createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectionsV1ResolveAppConnectionsResponse>(
          parameters
        );
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
      params: Params$Resource$Projects$Locations$Appconnections$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Appconnections$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnections$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnections$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnections$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnections$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Appconnections$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Appconnections$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appconnections$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appconnections$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appconnections$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnections$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnections$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnections$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Appconnections$Create
    extends StandardParameters {
    /**
     * Optional. User-settable AppConnection resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     */
    appConnectionId?: string;
    /**
     * Required. The resource project name of the AppConnection location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Delete
    extends StandardParameters {
    /**
     * Required. BeyondCorp Connector name using the form: `projects/{project_id\}/locations/{location_id\}/appConnections/{app_connection_id\}`
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Get
    extends StandardParameters {
    /**
     * Required. BeyondCorp AppConnection name using the form: `projects/{project_id\}/locations/{location_id\}/appConnections/{app_connection_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Appconnections$List
    extends StandardParameters {
    /**
     * Optional. A filter specifying constraints of a list operation.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous ListAppConnectionsRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the AppConnection location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Patch
    extends StandardParameters {
    /**
     * Optional. If set as true, will create the resource if it is not found.
     */
    allowMissing?: boolean;
    /**
     * Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnection]: * `labels` * `display_name` * `application_endpoint` * `connectors`
     */
    updateMask?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBeyondcorpAppconnectionsV1AppConnection;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Resolve
    extends StandardParameters {
    /**
     * Required. BeyondCorp Connector name of the connector associated with those AppConnections using the form: `projects/{project_id\}/locations/{location_id\}/appConnectors/{app_connector_id\}`
     */
    appConnectorId?: string;
    /**
     * Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous ResolveAppConnectionsResponse, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the AppConnection location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Appconnections$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Appconnectors {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new AppConnector in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Appconnectors$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Appconnectors$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Appconnectors$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Appconnectors$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Appconnectors$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnectors$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appConnectors').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a single AppConnector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Appconnectors$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Appconnectors$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Appconnectors$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Appconnectors$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Appconnectors$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnectors$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets details of a single AppConnector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Appconnectors$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Appconnectors$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>;
    get(
      params: Params$Resource$Projects$Locations$Appconnectors$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Appconnectors$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Appconnectors$Get,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Get
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnectors$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector>(
          parameters
        );
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
      params: Params$Resource$Projects$Locations$Appconnectors$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Appconnectors$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnectors$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnectors$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnectors$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnectors$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists AppConnectors in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Appconnectors$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Appconnectors$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Appconnectors$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Appconnectors$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Appconnectors$List,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$List
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnectors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appConnectors').replace(
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
        createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse>(
          parameters
        );
      }
    }

    /**
     * Updates the parameters of a single AppConnector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    patch(
      params: Params$Resource$Projects$Locations$Appconnectors$Patch,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    patch(
      params?: Params$Resource$Projects$Locations$Appconnectors$Patch,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    patch(
      params: Params$Resource$Projects$Locations$Appconnectors$Patch,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Appconnectors$Patch,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      params: Params$Resource$Projects$Locations$Appconnectors$Patch,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    patch(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Patch
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appconnectors$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Report status for a given connector.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    reportStatus(
      params: Params$Resource$Projects$Locations$Appconnectors$Reportstatus,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    reportStatus(
      params?: Params$Resource$Projects$Locations$Appconnectors$Reportstatus,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    reportStatus(
      params: Params$Resource$Projects$Locations$Appconnectors$Reportstatus,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    reportStatus(
      params: Params$Resource$Projects$Locations$Appconnectors$Reportstatus,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    reportStatus(
      params: Params$Resource$Projects$Locations$Appconnectors$Reportstatus,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    reportStatus(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    reportStatus(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Reportstatus
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Reportstatus;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnectors$Reportstatus;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+appConnector}:reportStatus').replace(
              /([^:]\/)\/+/g,
              '$1'
            ),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['appConnector'],
        pathParams: ['appConnector'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    resolveInstanceConfig(
      params: Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    resolveInstanceConfig(
      params?: Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>;
    resolveInstanceConfig(
      params: Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    resolveInstanceConfig(
      params: Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
    ): void;
    resolveInstanceConfig(
      params: Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig,
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
    ): void;
    resolveInstanceConfig(
      callback: BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
    ): void;
    resolveInstanceConfig(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl + '/v1/{+appConnector}:resolveInstanceConfig'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['appConnector'],
        pathParams: ['appConnector'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleCloudBeyondcorpAppconnectorsV1ResolveInstanceConfigResponse>(
          parameters
        );
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
      params: Params$Resource$Projects$Locations$Appconnectors$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Appconnectors$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnectors$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnectors$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appconnectors$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnectors$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Appconnectors$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Appconnectors$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appconnectors$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appconnectors$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appconnectors$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appconnectors$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appconnectors$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appconnectors$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Appconnectors$Create
    extends StandardParameters {
    /**
     * Optional. User-settable AppConnector resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     */
    appConnectorId?: string;
    /**
     * Required. The resource project name of the AppConnector location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Delete
    extends StandardParameters {
    /**
     * Required. BeyondCorp AppConnector name using the form: `projects/{project_id\}/locations/{location_id\}/appConnectors/{app_connector_id\}`
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Get
    extends StandardParameters {
    /**
     * Required. BeyondCorp AppConnector name using the form: `projects/{project_id\}/locations/{location_id\}/appConnectors/{app_connector_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Appconnectors$List
    extends StandardParameters {
    /**
     * Optional. A filter specifying constraints of a list operation.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous ListAppConnectorsRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the AppConnector location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Patch
    extends StandardParameters {
    /**
     * Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnector]: * `labels` * `display_name`
     */
    updateMask?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBeyondcorpAppconnectorsV1AppConnector;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Reportstatus
    extends StandardParameters {
    /**
     * Required. BeyondCorp Connector name using the form: `projects/{project_id\}/locations/{location_id\}/connectors/{connector\}`
     */
    appConnector?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudBeyondcorpAppconnectorsV1ReportStatusRequest;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Resolveinstanceconfig
    extends StandardParameters {
    /**
     * Required. BeyondCorp AppConnector name using the form: `projects/{project_id\}/locations/{location_id\}/appConnectors/{app_connector\}`
     */
    appConnector?: string;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Appconnectors$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Appgateways {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * Creates a new AppGateway in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    create(
      params: Params$Resource$Projects$Locations$Appgateways$Create,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    create(
      params?: Params$Resource$Projects$Locations$Appgateways$Create,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    create(
      params: Params$Resource$Projects$Locations$Appgateways$Create,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Appgateways$Create,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      params: Params$Resource$Projects$Locations$Appgateways$Create,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    create(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$Create
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appgateways$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appGateways').replace(
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Deletes a single AppGateway.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    delete(
      params: Params$Resource$Projects$Locations$Appgateways$Delete,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    delete(
      params?: Params$Resource$Projects$Locations$Appgateways$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    delete(
      params: Params$Resource$Projects$Locations$Appgateways$Delete,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Appgateways$Delete,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      params: Params$Resource$Projects$Locations$Appgateways$Delete,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$Delete
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appgateways$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
      }
    }

    /**
     * Gets details of a single AppGateway.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    get(
      params: Params$Resource$Projects$Locations$Appgateways$Get,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    get(
      params?: Params$Resource$Projects$Locations$Appgateways$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$AppGateway>;
    get(
      params: Params$Resource$Projects$Locations$Appgateways$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Appgateways$Get,
      options: MethodOptions | BodyResponseCallback<Schema$AppGateway>,
      callback: BodyResponseCallback<Schema$AppGateway>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Appgateways$Get,
      callback: BodyResponseCallback<Schema$AppGateway>
    ): void;
    get(callback: BodyResponseCallback<Schema$AppGateway>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$Get
        | BodyResponseCallback<Schema$AppGateway>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$AppGateway>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$AppGateway>
        | BodyResponseCallback<Readable>
    ): void | GaxiosPromise<Schema$AppGateway> | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appgateways$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$AppGateway>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$AppGateway>(parameters);
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
      params: Params$Resource$Projects$Locations$Appgateways$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Appgateways$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appgateways$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appgateways$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Appgateways$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appgateways$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
      }
    }

    /**
     * Lists AppGateways in a given project and location.
     *
     * @param params - Parameters for request
     * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param callback - Optional callback that handles the response.
     * @returns A promise if used with async/await, or void if used with a callback.
     */
    list(
      params: Params$Resource$Projects$Locations$Appgateways$List,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    list(
      params?: Params$Resource$Projects$Locations$Appgateways$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ListAppGatewaysResponse>;
    list(
      params: Params$Resource$Projects$Locations$Appgateways$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Appgateways$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ListAppGatewaysResponse>,
      callback: BodyResponseCallback<Schema$ListAppGatewaysResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Appgateways$List,
      callback: BodyResponseCallback<Schema$ListAppGatewaysResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ListAppGatewaysResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$List
        | BodyResponseCallback<Schema$ListAppGatewaysResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$ListAppGatewaysResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$ListAppGatewaysResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$ListAppGatewaysResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Locations$Appgateways$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (rootUrl + '/v1/{+parent}/appGateways').replace(
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
        createAPIRequest<Schema$ListAppGatewaysResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$ListAppGatewaysResponse>(parameters);
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
      params: Params$Resource$Projects$Locations$Appgateways$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Appgateways$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appgateways$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appgateways$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Appgateways$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appgateways$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Appgateways$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Appgateways$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appgateways$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appgateways$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Appgateways$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Appgateways$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Appgateways$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Appgateways$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Appgateways$Create
    extends StandardParameters {
    /**
     * Optional. User-settable AppGateway resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     */
    appGatewayId?: string;
    /**
     * Required. The resource project name of the AppGateway location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AppGateway;
  }
  export interface Params$Resource$Projects$Locations$Appgateways$Delete
    extends StandardParameters {
    /**
     * Required. BeyondCorp AppGateway name using the form: `projects/{project_id\}/locations/{location_id\}/appGateways/{app_gateway_id\}`
     */
    name?: string;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
    /**
     * Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     */
    validateOnly?: boolean;
  }
  export interface Params$Resource$Projects$Locations$Appgateways$Get
    extends StandardParameters {
    /**
     * Required. BeyondCorp AppGateway name using the form: `projects/{project_id\}/locations/{location_id\}/appGateways/{app_gateway_id\}`
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Locations$Appgateways$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Appgateways$List
    extends StandardParameters {
    /**
     * Optional. A filter specifying constraints of a list operation.
     */
    filter?: string;
    /**
     * Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     */
    orderBy?: string;
    /**
     * Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     */
    pageSize?: number;
    /**
     * Optional. The next_page_token value returned from a previous ListAppGatewaysRequest, if any.
     */
    pageToken?: string;
    /**
     * Required. The resource name of the AppGateway location using the form: `projects/{project_id\}/locations/{location_id\}`
     */
    parent?: string;
  }
  export interface Params$Resource$Projects$Locations$Appgateways$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Appgateways$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Clientconnectorservices {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clientconnectorservices$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Clientconnectorservices$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Clientconnectorservices$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
  }

  export class Resource$Projects$Locations$Clientgateways {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
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
      params: Params$Resource$Projects$Locations$Clientgateways$Getiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    getIamPolicy(
      params?: Params$Resource$Projects$Locations$Clientgateways$Getiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Clientgateways$Getiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Clientgateways$Getiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      params: Params$Resource$Projects$Locations$Clientgateways$Getiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    getIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clientgateways$Getiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clientgateways$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clientgateways$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Clientgateways$Setiampolicy,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    setIamPolicy(
      params?: Params$Resource$Projects$Locations$Clientgateways$Setiampolicy,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1Policy>;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Clientgateways$Setiampolicy,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Clientgateways$Setiampolicy,
      options: MethodOptions | BodyResponseCallback<Schema$GoogleIamV1Policy>,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      params: Params$Resource$Projects$Locations$Clientgateways$Setiampolicy,
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      callback: BodyResponseCallback<Schema$GoogleIamV1Policy>
    ): void;
    setIamPolicy(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clientgateways$Setiampolicy
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1Policy>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1Policy>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clientgateways$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clientgateways$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1Policy>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1Policy>(parameters);
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
      params: Params$Resource$Projects$Locations$Clientgateways$Testiampermissions,
      options: StreamMethodOptions
    ): GaxiosPromise<Readable>;
    testIamPermissions(
      params?: Params$Resource$Projects$Locations$Clientgateways$Testiampermissions,
      options?: MethodOptions
    ): GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Clientgateways$Testiampermissions,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Clientgateways$Testiampermissions,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      params: Params$Resource$Projects$Locations$Clientgateways$Testiampermissions,
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      callback: BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
    ): void;
    testIamPermissions(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Clientgateways$Testiampermissions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleIamV1TestIamPermissionsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleIamV1TestIamPermissionsResponse>
      | GaxiosPromise<Readable> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Projects$Locations$Clientgateways$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params =
          {} as Params$Resource$Projects$Locations$Clientgateways$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleIamV1TestIamPermissionsResponse>(
          parameters
        );
      }
    }
  }

  export interface Params$Resource$Projects$Locations$Clientgateways$Getiampolicy
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
  export interface Params$Resource$Projects$Locations$Clientgateways$Setiampolicy
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Locations$Clientgateways$Testiampermissions
    extends StandardParameters {
    /**
     * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1TestIamPermissionsRequest;
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

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
    ): GaxiosPromise<Schema$GoogleLongrunningOperation>;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      params: Params$Resource$Projects$Locations$Operations$Get,
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      callback: BodyResponseCallback<Schema$GoogleLongrunningOperation>
    ): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$Get
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningOperation>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningOperation>
      | GaxiosPromise<Readable> {
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

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningOperation>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningOperation>(parameters);
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
    ): GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options: StreamMethodOptions | BodyResponseCallback<Readable>,
      callback: BodyResponseCallback<Readable>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      params: Params$Resource$Projects$Locations$Operations$List,
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      callback: BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
    ): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Projects$Locations$Operations$List
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      optionsOrCallback?:
        | MethodOptions
        | StreamMethodOptions
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>,
      callback?:
        | BodyResponseCallback<Schema$GoogleLongrunningListOperationsResponse>
        | BodyResponseCallback<Readable>
    ):
      | void
      | GaxiosPromise<Schema$GoogleLongrunningListOperationsResponse>
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

      const rootUrl = options.rootUrl || 'https://beyondcorp.googleapis.com/';
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
        createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters,
          callback as BodyResponseCallback<unknown>
        );
      } else {
        return createAPIRequest<Schema$GoogleLongrunningListOperationsResponse>(
          parameters
        );
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
    requestBody?: Schema$GoogleLongrunningCancelOperationRequest;
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
