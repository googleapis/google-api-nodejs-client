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

export namespace replicapool_v1beta1 {
  export interface Options extends GlobalOptions {
    version: 'v1beta1';
  }

  interface StandardParameters {
    /**
     * Data format for the response.
     */
    alt?: string;
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
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
  }

  /**
   * Replica Pool API
   *
   * The Replica Pool API allows users to declaratively provision and manage groups of Google Compute Engine instances based on a common template.
   *
   * @example
   * const {google} = require('googleapis');
   * const replicapool = google.replicapool('v1beta1');
   *
   * @namespace replicapool
   * @type {Function}
   * @version v1beta1
   * @variation v1beta1
   * @param {object=} options Options for Replicapool
   */
  export class Replicapool {
    context: APIRequestContext;
    pools: Resource$Pools;
    replicas: Resource$Replicas;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this.context = {
        _options: options || {},
        google,
      };

      this.pools = new Resource$Pools(this.context);
      this.replicas = new Resource$Replicas(this.context);
    }
  }

  /**
   * A Compute Engine network accessConfig. Identical to the accessConfig on corresponding Compute Engine resource.
   */
  export interface Schema$AccessConfig {
    /**
     * Name of this access configuration.
     */
    name?: string | null;
    /**
     * An external IP address associated with this instance.
     */
    natIp?: string | null;
    /**
     * Type of this access configuration file. Currently only ONE_TO_ONE_NAT is supported.
     */
    type?: string | null;
  }
  /**
   * An action that gets executed during initialization of the replicas.
   */
  export interface Schema$Action {
    /**
     * A list of commands to run, one per line. If any command fails, the whole action is considered a failure and no further actions are run. This also marks the virtual machine or replica as a failure.
     */
    commands?: string[] | null;
    /**
     * A list of environment variables to use for the commands in this action.
     */
    envVariables?: Schema$EnvVariable[];
    /**
     * If an action&#39;s commands on a particular replica do not finish in the specified timeoutMilliSeconds, the replica is considered to be in a FAILING state. No efforts are made to stop any processes that were spawned or created as the result of running the action&#39;s commands. The default is the max allowed value, 1 hour (i.e. 3600000 milliseconds).
     */
    timeoutMilliSeconds?: number | null;
  }
  /**
   * Specifies how to attach a disk to a Replica.
   */
  export interface Schema$DiskAttachment {
    /**
     * The device name of this disk.
     */
    deviceName?: string | null;
    /**
     * A zero-based index to assign to this disk, where 0 is reserved for the boot disk. If not specified, this is assigned by the server.
     */
    index?: number | null;
  }
  /**
   * An environment variable to set for an action.
   */
  export interface Schema$EnvVariable {
    /**
     * Deprecated, do not use.
     */
    hidden?: boolean | null;
    /**
     * The name of the environment variable.
     */
    name?: string | null;
    /**
     * The value of the variable.
     */
    value?: string | null;
  }
  /**
   * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
   */
  export interface Schema$ExistingDisk {
    /**
     * How the disk will be attached to the Replica.
     */
    attachment?: Schema$DiskAttachment;
    /**
     * The name of the Persistent Disk resource. The Persistent Disk resource must be in the same zone as the Pool.
     */
    source?: string | null;
  }
  export interface Schema$HealthCheck {
    /**
     * How often (in seconds) to make HTTP requests for this healthcheck. The default value is 5 seconds.
     */
    checkIntervalSec?: number | null;
    /**
     * The description for this health check.
     */
    description?: string | null;
    /**
     * The number of consecutive health check requests that need to succeed before the replica is considered healthy again. The default value is 2.
     */
    healthyThreshold?: number | null;
    /**
     * The value of the host header in the HTTP health check request. If left empty (default value), the localhost IP 127.0.0.1 will be used.
     */
    host?: string | null;
    /**
     * The name of this health check.
     */
    name?: string | null;
    /**
     * The localhost request path to send this health check, in the format /path/to/use. For example, /healthcheck.
     */
    path?: string | null;
    /**
     * The TCP port for the health check requests.
     */
    port?: number | null;
    /**
     * How long (in seconds) to wait before a timeout failure for this healthcheck. The default value is 5 seconds.
     */
    timeoutSec?: number | null;
    /**
     * The number of consecutive health check requests that need to fail in order to consider the replica unhealthy. The default value is 2.
     */
    unhealthyThreshold?: number | null;
  }
  /**
   * A label to apply to this replica pool.
   */
  export interface Schema$Label {
    /**
     * The key for this label.
     */
    key?: string | null;
    /**
     * The value of this label.
     */
    value?: string | null;
  }
  /**
   * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
   */
  export interface Schema$Metadata {
    /**
     * The fingerprint of the metadata. Required for updating the metadata entries for this instance.
     */
    fingerPrint?: string | null;
    /**
     * A list of metadata items.
     */
    items?: Schema$MetadataItem[];
  }
  /**
   * A Compute Engine metadata item, defined as a key:value pair. Identical to the metadata on the corresponding Compute Engine resource.
   */
  export interface Schema$MetadataItem {
    /**
     * A metadata key.
     */
    key?: string | null;
    /**
     * A metadata value.
     */
    value?: string | null;
  }
  /**
   * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
   */
  export interface Schema$NetworkInterface {
    /**
     * An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.
     */
    accessConfigs?: Schema$AccessConfig[];
    /**
     * Name the Network resource to which this interface applies.
     */
    network?: string | null;
    /**
     * An optional IPV4 internal network address to assign to the instance for this network interface.
     */
    networkIp?: string | null;
  }
  /**
   * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
   */
  export interface Schema$NewDisk {
    /**
     * How the disk will be attached to the Replica.
     */
    attachment?: Schema$DiskAttachment;
    /**
     * If true, then this disk will be deleted when the instance is deleted. The default value is true.
     */
    autoDelete?: boolean | null;
    /**
     * If true, indicates that this is the root persistent disk.
     */
    boot?: boolean | null;
    /**
     * Create the new disk using these parameters. The name of the disk will be &lt;instance_name&gt;-&lt;four_random_charactersgt;.
     */
    initializeParams?: Schema$NewDiskInitializeParams;
  }
  /**
   * Initialization parameters for creating a new disk.
   */
  export interface Schema$NewDiskInitializeParams {
    /**
     * The size of the created disk in gigabytes.
     */
    diskSizeGb?: string | null;
    /**
     * Name of the disk type resource describing which disk type to use to create the disk. For example &#39;pd-ssd&#39; or &#39;pd-standard&#39;. Default is &#39;pd-standard&#39;
     */
    diskType?: string | null;
    /**
     * The name or fully-qualified URL of a source image to use to create this disk. If you provide a name of the source image, Replica Pool will look for an image with that name in your project. If you are specifying an image provided by Compute Engine, you will need to provide the full URL with the correct project, such as: http://www.googleapis.com/compute/v1/projects/debian-cloud/ global/images/debian-wheezy-7-vYYYYMMDD
     */
    sourceImage?: string | null;
  }
  export interface Schema$Pool {
    /**
     * Whether replicas in this pool should be restarted if they experience a failure. The default value is true.
     */
    autoRestart?: boolean | null;
    /**
     * The base instance name to use for the replicas in this pool. This must match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in this replica pool will be named in the format &lt;base-instance-name&gt;-&lt;ID&gt;. The &lt;ID&gt; postfix will be a four character alphanumeric identifier generated by the service.  If this is not specified by the user, a random base instance name is generated by the service.
     */
    baseInstanceName?: string | null;
    /**
     * [Output Only] The current number of replicas in the pool.
     */
    currentNumReplicas?: number | null;
    /**
     * An optional description of the replica pool.
     */
    description?: string | null;
    /**
     * Deprecated. Please use template[].healthChecks instead.
     */
    healthChecks?: Schema$HealthCheck[];
    /**
     * The initial number of replicas this pool should have. You must provide a value greater than or equal to 0.
     */
    initialNumReplicas?: number | null;
    /**
     * A list of labels to attach to this replica pool and all created virtual machines in this replica pool.
     */
    labels?: Schema$Label[];
    /**
     * The name of the replica pool. Must follow the regex [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.
     */
    name?: string | null;
    /**
     * Deprecated! Use initial_num_replicas instead.
     */
    numReplicas?: number | null;
    /**
     * The list of resource views that should be updated with all the replicas that are managed by this pool.
     */
    resourceViews?: string[] | null;
    /**
     * [Output Only] A self-link to the replica pool.
     */
    selfLink?: string | null;
    /**
     * Deprecated, please use target_pools instead.
     */
    targetPool?: string | null;
    /**
     * A list of target pools to update with the replicas that are managed by this pool. If specified, the replicas in this replica pool will be added to the specified target pools for load balancing purposes. The replica pool must live in the same region as the specified target pools. These values must be the target pool resource names, and not fully qualified URLs.
     */
    targetPools?: string[] | null;
    /**
     * The template to use when creating replicas in this pool. This template is used during initial instance creation of the pool, when growing the pool in size, or when a replica restarts.
     */
    template?: Schema$Template;
    /**
     * Deprecated! Do not set.
     */
    type?: string | null;
  }
  export interface Schema$PoolsDeleteRequest {
    /**
     * If there are instances you would like to keep, you can specify them here. These instances won&#39;t be deleted, but the associated replica objects will be removed.
     */
    abandonInstances?: string[] | null;
  }
  export interface Schema$PoolsListResponse {
    nextPageToken?: string | null;
    resources?: Schema$Pool[];
  }
  /**
   * An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
   */
  export interface Schema$Replica {
    /**
     * [Output Only] The name of the Replica object.
     */
    name?: string | null;
    /**
     * [Output Only] The self-link of the Replica.
     */
    selfLink?: string | null;
    /**
     * [Output Only] Last known status of the Replica.
     */
    status?: Schema$ReplicaStatus;
  }
  export interface Schema$ReplicasDeleteRequest {
    /**
     * Whether the instance resource represented by this replica should be deleted or abandoned. If abandoned, the replica will be deleted but the virtual machine instance will remain. By default, this is set to false and the instance will be deleted along with the replica.
     */
    abandonInstance?: boolean | null;
  }
  export interface Schema$ReplicasListResponse {
    nextPageToken?: string | null;
    resources?: Schema$Replica[];
  }
  /**
   * The current status of a Replica.
   */
  export interface Schema$ReplicaStatus {
    /**
     * [Output Only] Human-readable details about the current state of the replica
     */
    details?: string | null;
    /**
     * [Output Only] The state of the Replica.
     */
    state?: string | null;
    /**
     * [Output Only] The template used to build the replica.
     */
    templateVersion?: string | null;
    /**
     * [Output Only] Link to the virtual machine that this Replica represents.
     */
    vmLink?: string | null;
    /**
     * [Output Only] The time that this Replica got to the RUNNING state, in RFC 3339 format. If the start time is unknown, UNKNOWN is returned.
     */
    vmStartTime?: string | null;
  }
  /**
   * A Compute Engine service account, identical to the Compute Engine resource.
   */
  export interface Schema$ServiceAccount {
    /**
     * The service account email address, for example: 123845678986@project.gserviceaccount.com
     */
    email?: string | null;
    /**
     * The list of OAuth2 scopes to obtain for the service account, for example: https://www.googleapis.com/auth/devstorage.full_control
     */
    scopes?: string[] | null;
  }
  /**
   * A Compute Engine Instance tag, identical to the tags on the corresponding Compute Engine Instance resource.
   */
  export interface Schema$Tag {
    /**
     * The fingerprint of the tag. Required for updating the list of tags.
     */
    fingerPrint?: string | null;
    /**
     * Items contained in this tag.
     */
    items?: string[] | null;
  }
  /**
   * The template used for creating replicas in the pool.
   */
  export interface Schema$Template {
    /**
     * An action to run during initialization of your replicas. An action is run as shell commands which are executed one after the other in the same bash shell, so any state established by one command is inherited by later commands.
     */
    action?: Schema$Action;
    /**
     * A list of HTTP Health Checks to configure for this replica pool and all virtual machines in this replica pool.
     */
    healthChecks?: Schema$HealthCheck[];
    /**
     * A free-form string describing the version of this template. You can provide any versioning string you would like. For example, version1 or template-v1.
     */
    version?: string | null;
    /**
     * The virtual machine parameters to use for creating replicas. You can define settings such as the machine type and the image of replicas in this pool. This is required if replica type is SMART_VM.
     */
    vmParams?: Schema$VmParams;
  }
  /**
   * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
   */
  export interface Schema$VmParams {
    /**
     * Deprecated. Please use baseInstanceName instead.
     */
    baseInstanceName?: string | null;
    /**
     * Enables IP Forwarding, which allows this instance to receive packets destined for a different IP address, and send packets with a different source IP. See IP Forwarding for more information.
     */
    canIpForward?: boolean | null;
    /**
     * An optional textual description of the instance.
     */
    description?: string | null;
    /**
     * A list of existing Persistent Disk resources to attach to each replica in the pool. Each disk will be attached in read-only mode to every replica.
     */
    disksToAttach?: Schema$ExistingDisk[];
    /**
     * A list of Disk resources to create and attach to each Replica in the Pool. Currently, you can only define one disk and it must be a root persistent disk. Note that Replica Pool will create a root persistent disk for each replica.
     */
    disksToCreate?: Schema$NewDisk[];
    /**
     * The machine type for this instance. The resource name (e.g. n1-standard-1).
     */
    machineType?: string | null;
    /**
     * The metadata key/value pairs assigned to this instance.
     */
    metadata?: Schema$Metadata;
    /**
     * A list of network interfaces for the instance. Currently only one interface is supported by Google Compute Engine, ONE_TO_ONE_NAT.
     */
    networkInterfaces?: Schema$NetworkInterface[];
    onHostMaintenance?: string | null;
    /**
     * A list of Service Accounts to enable for this instance.
     */
    serviceAccounts?: Schema$ServiceAccount[];
    /**
     * A list of tags to apply to the Google Compute Engine instance to identify resources.
     */
    tags?: Schema$Tag;
  }

  export class Resource$Pools {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * replicapool.pools.delete
     * @desc Deletes a replica pool.
     * @alias replicapool.pools.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {().PoolsDeleteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Pools$Delete,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    delete(
      params: Params$Resource$Pools$Delete,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    delete(
      params: Params$Resource$Pools$Delete,
      callback: BodyResponseCallback<void>
    ): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Pools$Delete
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pools$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pools$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }

    /**
     * replicapool.pools.get
     * @desc Gets information about a single replica pool.
     * @alias replicapool.pools.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Pools$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Pool>;
    get(
      params: Params$Resource$Pools$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Pool>,
      callback: BodyResponseCallback<Schema$Pool>
    ): void;
    get(
      params: Params$Resource$Pools$Get,
      callback: BodyResponseCallback<Schema$Pool>
    ): void;
    get(callback: BodyResponseCallback<Schema$Pool>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Pools$Get
        | BodyResponseCallback<Schema$Pool>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>
    ): void | GaxiosPromise<Schema$Pool> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pools$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pools$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Pool>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Pool>(parameters);
      }
    }

    /**
     * replicapool.pools.insert
     * @desc Inserts a new replica pool.
     * @alias replicapool.pools.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {().Pool} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
      params?: Params$Resource$Pools$Insert,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Pool>;
    insert(
      params: Params$Resource$Pools$Insert,
      options: MethodOptions | BodyResponseCallback<Schema$Pool>,
      callback: BodyResponseCallback<Schema$Pool>
    ): void;
    insert(
      params: Params$Resource$Pools$Insert,
      callback: BodyResponseCallback<Schema$Pool>
    ): void;
    insert(callback: BodyResponseCallback<Schema$Pool>): void;
    insert(
      paramsOrCallback?:
        | Params$Resource$Pools$Insert
        | BodyResponseCallback<Schema$Pool>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>
    ): void | GaxiosPromise<Schema$Pool> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pools$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pools$Insert;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone'],
        pathParams: ['projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Pool>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Pool>(parameters);
      }
    }

    /**
     * replicapool.pools.list
     * @desc List all replica pools.
     * @alias replicapool.pools.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     * @param {string=} params.pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.zone The zone for this replica pool.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Pools$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$PoolsListResponse>;
    list(
      params: Params$Resource$Pools$List,
      options: MethodOptions | BodyResponseCallback<Schema$PoolsListResponse>,
      callback: BodyResponseCallback<Schema$PoolsListResponse>
    ): void;
    list(
      params: Params$Resource$Pools$List,
      callback: BodyResponseCallback<Schema$PoolsListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$PoolsListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Pools$List
        | BodyResponseCallback<Schema$PoolsListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$PoolsListResponse>,
      callback?: BodyResponseCallback<Schema$PoolsListResponse>
    ): void | GaxiosPromise<Schema$PoolsListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pools$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pools$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone'],
        pathParams: ['projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$PoolsListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PoolsListResponse>(parameters);
      }
    }

    /**
     * replicapool.pools.resize
     * @desc Resize a pool. This is an asynchronous operation, and multiple overlapping resize requests can be made. Replica Pools will use the information from the last resize request.
     * @alias replicapool.pools.resize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.numReplicas The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize(
      params?: Params$Resource$Pools$Resize,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Pool>;
    resize(
      params: Params$Resource$Pools$Resize,
      options: MethodOptions | BodyResponseCallback<Schema$Pool>,
      callback: BodyResponseCallback<Schema$Pool>
    ): void;
    resize(
      params: Params$Resource$Pools$Resize,
      callback: BodyResponseCallback<Schema$Pool>
    ): void;
    resize(callback: BodyResponseCallback<Schema$Pool>): void;
    resize(
      paramsOrCallback?:
        | Params$Resource$Pools$Resize
        | BodyResponseCallback<Schema$Pool>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>
    ): void | GaxiosPromise<Schema$Pool> {
      let params = (paramsOrCallback || {}) as Params$Resource$Pools$Resize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pools$Resize;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/resize'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Pool>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Pool>(parameters);
      }
    }

    /**
     * replicapool.pools.updatetemplate
     * @desc Update the template used by the pool.
     * @alias replicapool.pools.updatetemplate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The name of the replica pool for this request.
     * @param {string} params.projectName The project ID for this replica pool.
     * @param {string} params.zone The zone for this replica pool.
     * @param {().Template} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updatetemplate(
      params?: Params$Resource$Pools$Updatetemplate,
      options?: MethodOptions
    ): GaxiosPromise<void>;
    updatetemplate(
      params: Params$Resource$Pools$Updatetemplate,
      options: MethodOptions | BodyResponseCallback<void>,
      callback: BodyResponseCallback<void>
    ): void;
    updatetemplate(
      params: Params$Resource$Pools$Updatetemplate,
      callback: BodyResponseCallback<void>
    ): void;
    updatetemplate(callback: BodyResponseCallback<void>): void;
    updatetemplate(
      paramsOrCallback?:
        | Params$Resource$Pools$Updatetemplate
        | BodyResponseCallback<void>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>
    ): void | GaxiosPromise<void> {
      let params = (paramsOrCallback ||
        {}) as Params$Resource$Pools$Updatetemplate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Pools$Updatetemplate;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/updateTemplate'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Pools$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the replica pool for this request.
     */
    poolName?: string;
    /**
     * The project ID for this replica pool.
     */
    projectName?: string;
    /**
     * The zone for this replica pool.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PoolsDeleteRequest;
  }
  export interface Params$Resource$Pools$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the replica pool for this request.
     */
    poolName?: string;
    /**
     * The project ID for this replica pool.
     */
    projectName?: string;
    /**
     * The zone for this replica pool.
     */
    zone?: string;
  }
  export interface Params$Resource$Pools$Insert extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The project ID for this replica pool.
     */
    projectName?: string;
    /**
     * The zone for this replica pool.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Pool;
  }
  export interface Params$Resource$Pools$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     */
    maxResults?: number;
    /**
     * Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     */
    pageToken?: string;
    /**
     * The project ID for this request.
     */
    projectName?: string;
    /**
     * The zone for this replica pool.
     */
    zone?: string;
  }
  export interface Params$Resource$Pools$Resize extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The desired number of replicas to resize to. If this number is larger than the existing number of replicas, new replicas will be added. If the number is smaller, then existing replicas will be deleted.
     */
    numReplicas?: number;
    /**
     * The name of the replica pool for this request.
     */
    poolName?: string;
    /**
     * The project ID for this replica pool.
     */
    projectName?: string;
    /**
     * The zone for this replica pool.
     */
    zone?: string;
  }
  export interface Params$Resource$Pools$Updatetemplate
    extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The name of the replica pool for this request.
     */
    poolName?: string;
    /**
     * The project ID for this replica pool.
     */
    projectName?: string;
    /**
     * The zone for this replica pool.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Template;
  }

  export class Resource$Replicas {
    context: APIRequestContext;
    constructor(context: APIRequestContext) {
      this.context = context;
    }

    /**
     * replicapool.replicas.delete
     * @desc Deletes a replica from the pool.
     * @alias replicapool.replicas.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.replicaName The name of the replica for this request.
     * @param {string} params.zone The zone where the replica lives.
     * @param {().ReplicasDeleteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
      params?: Params$Resource$Replicas$Delete,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Replica>;
    delete(
      params: Params$Resource$Replicas$Delete,
      options: MethodOptions | BodyResponseCallback<Schema$Replica>,
      callback: BodyResponseCallback<Schema$Replica>
    ): void;
    delete(
      params: Params$Resource$Replicas$Delete,
      callback: BodyResponseCallback<Schema$Replica>
    ): void;
    delete(callback: BodyResponseCallback<Schema$Replica>): void;
    delete(
      paramsOrCallback?:
        | Params$Resource$Replicas$Delete
        | BodyResponseCallback<Schema$Replica>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>
    ): void | GaxiosPromise<Schema$Replica> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replicas$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replicas$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
        pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Replica>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Replica>(parameters);
      }
    }

    /**
     * replicapool.replicas.get
     * @desc Gets information about a specific replica.
     * @alias replicapool.replicas.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.replicaName The name of the replica for this request.
     * @param {string} params.zone The zone where the replica lives.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(
      params?: Params$Resource$Replicas$Get,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Replica>;
    get(
      params: Params$Resource$Replicas$Get,
      options: MethodOptions | BodyResponseCallback<Schema$Replica>,
      callback: BodyResponseCallback<Schema$Replica>
    ): void;
    get(
      params: Params$Resource$Replicas$Get,
      callback: BodyResponseCallback<Schema$Replica>
    ): void;
    get(callback: BodyResponseCallback<Schema$Replica>): void;
    get(
      paramsOrCallback?:
        | Params$Resource$Replicas$Get
        | BodyResponseCallback<Schema$Replica>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>
    ): void | GaxiosPromise<Schema$Replica> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replicas$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replicas$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
        pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Replica>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Replica>(parameters);
      }
    }

    /**
     * replicapool.replicas.list
     * @desc Lists all replicas in a pool.
     * @alias replicapool.replicas.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.maxResults Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     * @param {string=} params.pageToken Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.zone The zone where the replica pool lives.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
      params?: Params$Resource$Replicas$List,
      options?: MethodOptions
    ): GaxiosPromise<Schema$ReplicasListResponse>;
    list(
      params: Params$Resource$Replicas$List,
      options:
        | MethodOptions
        | BodyResponseCallback<Schema$ReplicasListResponse>,
      callback: BodyResponseCallback<Schema$ReplicasListResponse>
    ): void;
    list(
      params: Params$Resource$Replicas$List,
      callback: BodyResponseCallback<Schema$ReplicasListResponse>
    ): void;
    list(callback: BodyResponseCallback<Schema$ReplicasListResponse>): void;
    list(
      paramsOrCallback?:
        | Params$Resource$Replicas$List
        | BodyResponseCallback<Schema$ReplicasListResponse>,
      optionsOrCallback?:
        | MethodOptions
        | BodyResponseCallback<Schema$ReplicasListResponse>,
      callback?: BodyResponseCallback<Schema$ReplicasListResponse>
    ): void | GaxiosPromise<Schema$ReplicasListResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replicas$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replicas$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName'],
        pathParams: ['poolName', 'projectName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$ReplicasListResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ReplicasListResponse>(parameters);
      }
    }

    /**
     * replicapool.replicas.restart
     * @desc Restarts a replica in a pool.
     * @alias replicapool.replicas.restart
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.poolName The replica pool name for this request.
     * @param {string} params.projectName The project ID for this request.
     * @param {string} params.replicaName The name of the replica for this request.
     * @param {string} params.zone The zone where the replica lives.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    restart(
      params?: Params$Resource$Replicas$Restart,
      options?: MethodOptions
    ): GaxiosPromise<Schema$Replica>;
    restart(
      params: Params$Resource$Replicas$Restart,
      options: MethodOptions | BodyResponseCallback<Schema$Replica>,
      callback: BodyResponseCallback<Schema$Replica>
    ): void;
    restart(
      params: Params$Resource$Replicas$Restart,
      callback: BodyResponseCallback<Schema$Replica>
    ): void;
    restart(callback: BodyResponseCallback<Schema$Replica>): void;
    restart(
      paramsOrCallback?:
        | Params$Resource$Replicas$Restart
        | BodyResponseCallback<Schema$Replica>,
      optionsOrCallback?: MethodOptions | BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>
    ): void | GaxiosPromise<Schema$Replica> {
      let params = (paramsOrCallback || {}) as Params$Resource$Replicas$Restart;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Replicas$Restart;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
          {
            url: (
              rootUrl +
              '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart'
            ).replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST',
          },
          options
        ),
        params,
        requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
        pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
        context: this.context,
      };
      if (callback) {
        createAPIRequest<Schema$Replica>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Replica>(parameters);
      }
    }
  }

  export interface Params$Resource$Replicas$Delete extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The replica pool name for this request.
     */
    poolName?: string;
    /**
     * The project ID for this request.
     */
    projectName?: string;
    /**
     * The name of the replica for this request.
     */
    replicaName?: string;
    /**
     * The zone where the replica lives.
     */
    zone?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ReplicasDeleteRequest;
  }
  export interface Params$Resource$Replicas$Get extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The replica pool name for this request.
     */
    poolName?: string;
    /**
     * The project ID for this request.
     */
    projectName?: string;
    /**
     * The name of the replica for this request.
     */
    replicaName?: string;
    /**
     * The zone where the replica lives.
     */
    zone?: string;
  }
  export interface Params$Resource$Replicas$List extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     */
    maxResults?: number;
    /**
     * Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     */
    pageToken?: string;
    /**
     * The replica pool name for this request.
     */
    poolName?: string;
    /**
     * The project ID for this request.
     */
    projectName?: string;
    /**
     * The zone where the replica pool lives.
     */
    zone?: string;
  }
  export interface Params$Resource$Replicas$Restart extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;

    /**
     * The replica pool name for this request.
     */
    poolName?: string;
    /**
     * The project ID for this request.
     */
    projectName?: string;
    /**
     * The name of the replica for this request.
     */
    replicaName?: string;
    /**
     * The zone where the replica lives.
     */
    zone?: string;
  }
}
