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

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format

/**
 * Replica Pool API
 *
 * The Replica Pool API allows users to declaratively provision and manage
 * groups of Google Compute Engine instances based on a common template.
 *
 * @example
 * const google = require('googleapis');
 * const replicapool = google.replicapool('v1beta1');
 *
 * @namespace replicapool
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Replicapool
 */
export class Replicapool {
  _options: GlobalOptions;
  google: GoogleApis;
  root = this;

  pools: Resource$Pools;
  replicas: Resource$Replicas;

  constructor(options: GlobalOptions, google: GoogleApis) {
    this._options = options || {};
    this.google = google;
    this.getRoot.bind(this);

    this.pools = new Resource$Pools(this);
    this.replicas = new Resource$Replicas(this);
  }

  getRoot() {
    return this.root;
  }
}

/**
 * A Compute Engine network accessConfig. Identical to the accessConfig on
 * corresponding Compute Engine resource.
 */
export interface Schema$AccessConfig {
  /**
   * Name of this access configuration.
   */
  name: string;
  /**
   * An external IP address associated with this instance.
   */
  natIp: string;
  /**
   * Type of this access configuration file. Currently only ONE_TO_ONE_NAT is
   * supported.
   */
  type: string;
}
/**
 * An action that gets executed during initialization of the replicas.
 */
export interface Schema$Action {
  /**
   * A list of commands to run, one per line. If any command fails, the whole
   * action is considered a failure and no further actions are run. This also
   * marks the virtual machine or replica as a failure.
   */
  commands: string[];
  /**
   * A list of environment variables to use for the commands in this action.
   */
  envVariables: Schema$EnvVariable[];
  /**
   * If an action&#39;s commands on a particular replica do not finish in the
   * specified timeoutMilliSeconds, the replica is considered to be in a FAILING
   * state. No efforts are made to stop any processes that were spawned or
   * created as the result of running the action&#39;s commands. The default is
   * the max allowed value, 1 hour (i.e. 3600000 milliseconds).
   */
  timeoutMilliSeconds: number;
}
/**
 * Specifies how to attach a disk to a Replica.
 */
export interface Schema$DiskAttachment {
  /**
   * The device name of this disk.
   */
  deviceName: string;
  /**
   * A zero-based index to assign to this disk, where 0 is reserved for the boot
   * disk. If not specified, this is assigned by the server.
   */
  index: number;
}
/**
 * An environment variable to set for an action.
 */
export interface Schema$EnvVariable {
  /**
   * Deprecated, do not use.
   */
  hidden: boolean;
  /**
   * The name of the environment variable.
   */
  name: string;
  /**
   * The value of the variable.
   */
  value: string;
}
/**
 * A pre-existing persistent disk that will be attached to every Replica in the
 * Pool in READ_ONLY mode.
 */
export interface Schema$ExistingDisk {
  /**
   * How the disk will be attached to the Replica.
   */
  attachment: Schema$DiskAttachment;
  /**
   * The name of the Persistent Disk resource. The Persistent Disk resource must
   * be in the same zone as the Pool.
   */
  source: string;
}
export interface Schema$HealthCheck {
  /**
   * How often (in seconds) to make HTTP requests for this healthcheck. The
   * default value is 5 seconds.
   */
  checkIntervalSec: number;
  /**
   * The description for this health check.
   */
  description: string;
  /**
   * The number of consecutive health check requests that need to succeed before
   * the replica is considered healthy again. The default value is 2.
   */
  healthyThreshold: number;
  /**
   * The value of the host header in the HTTP health check request. If left
   * empty (default value), the localhost IP 127.0.0.1 will be used.
   */
  host: string;
  /**
   * The name of this health check.
   */
  name: string;
  /**
   * The localhost request path to send this health check, in the format
   * /path/to/use. For example, /healthcheck.
   */
  path: string;
  /**
   * The TCP port for the health check requests.
   */
  port: number;
  /**
   * How long (in seconds) to wait before a timeout failure for this
   * healthcheck. The default value is 5 seconds.
   */
  timeoutSec: number;
  /**
   * The number of consecutive health check requests that need to fail in order
   * to consider the replica unhealthy. The default value is 2.
   */
  unhealthyThreshold: number;
}
/**
 * A label to apply to this replica pool.
 */
export interface Schema$Label {
  /**
   * The key for this label.
   */
  key: string;
  /**
   * The value of this label.
   */
  value: string;
}
/**
 * A Compute Engine metadata entry. Identical to the metadata on the
 * corresponding Compute Engine resource.
 */
export interface Schema$Metadata {
  /**
   * The fingerprint of the metadata. Required for updating the metadata entries
   * for this instance.
   */
  fingerPrint: string;
  /**
   * A list of metadata items.
   */
  items: Schema$MetadataItem[];
}
/**
 * A Compute Engine metadata item, defined as a key:value pair. Identical to the
 * metadata on the corresponding Compute Engine resource.
 */
export interface Schema$MetadataItem {
  /**
   * A metadata key.
   */
  key: string;
  /**
   * A metadata value.
   */
  value: string;
}
/**
 * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface
 * on the corresponding Compute Engine resource.
 */
export interface Schema$NetworkInterface {
  /**
   * An array of configurations for this interface. This specifies how this
   * interface is configured to interact with other network services.
   */
  accessConfigs: Schema$AccessConfig[];
  /**
   * Name the Network resource to which this interface applies.
   */
  network: string;
  /**
   * An optional IPV4 internal network address to assign to the instance for
   * this network interface.
   */
  networkIp: string;
}
/**
 * A Persistent Disk resource that will be created and attached to each Replica
 * in the Pool. Each Replica will have a unique persistent disk that is created
 * and attached to that Replica in READ_WRITE mode.
 */
export interface Schema$NewDisk {
  /**
   * How the disk will be attached to the Replica.
   */
  attachment: Schema$DiskAttachment;
  /**
   * If true, then this disk will be deleted when the instance is deleted. The
   * default value is true.
   */
  autoDelete: boolean;
  /**
   * If true, indicates that this is the root persistent disk.
   */
  boot: boolean;
  /**
   * Create the new disk using these parameters. The name of the disk will be
   * &lt;instance_name&gt;-&lt;four_random_charactersgt;.
   */
  initializeParams: Schema$NewDiskInitializeParams;
}
/**
 * Initialization parameters for creating a new disk.
 */
export interface Schema$NewDiskInitializeParams {
  /**
   * The size of the created disk in gigabytes.
   */
  diskSizeGb: string;
  /**
   * Name of the disk type resource describing which disk type to use to create
   * the disk. For example &#39;pd-ssd&#39; or &#39;pd-standard&#39;. Default is
   * &#39;pd-standard&#39;
   */
  diskType: string;
  /**
   * The name or fully-qualified URL of a source image to use to create this
   * disk. If you provide a name of the source image, Replica Pool will look for
   * an image with that name in your project. If you are specifying an image
   * provided by Compute Engine, you will need to provide the full URL with the
   * correct project, such as:
   * http://www.googleapis.com/compute/v1/projects/debian-cloud/
   * global/images/debian-wheezy-7-vYYYYMMDD
   */
  sourceImage: string;
}
export interface Schema$Pool {
  /**
   * Whether replicas in this pool should be restarted if they experience a
   * failure. The default value is true.
   */
  autoRestart: boolean;
  /**
   * The base instance name to use for the replicas in this pool. This must
   * match the regex [a-z]([-a-z0-9]*[a-z0-9])?. If specified, the instances in
   * this replica pool will be named in the format
   * &lt;base-instance-name&gt;-&lt;ID&gt;. The &lt;ID&gt; postfix will be a
   * four character alphanumeric identifier generated by the service.  If this
   * is not specified by the user, a random base instance name is generated by
   * the service.
   */
  baseInstanceName: string;
  /**
   * [Output Only] The current number of replicas in the pool.
   */
  currentNumReplicas: number;
  /**
   * An optional description of the replica pool.
   */
  description: string;
  /**
   * Deprecated. Please use template[].healthChecks instead.
   */
  healthChecks: Schema$HealthCheck[];
  /**
   * The initial number of replicas this pool should have. You must provide a
   * value greater than or equal to 0.
   */
  initialNumReplicas: number;
  /**
   * A list of labels to attach to this replica pool and all created virtual
   * machines in this replica pool.
   */
  labels: Schema$Label[];
  /**
   * The name of the replica pool. Must follow the regex
   * [a-z]([-a-z0-9]*[a-z0-9])? and be 1-28 characters long.
   */
  name: string;
  /**
   * Deprecated! Use initial_num_replicas instead.
   */
  numReplicas: number;
  /**
   * The list of resource views that should be updated with all the replicas
   * that are managed by this pool.
   */
  resourceViews: string[];
  /**
   * [Output Only] A self-link to the replica pool.
   */
  selfLink: string;
  /**
   * Deprecated, please use target_pools instead.
   */
  targetPool: string;
  /**
   * A list of target pools to update with the replicas that are managed by this
   * pool. If specified, the replicas in this replica pool will be added to the
   * specified target pools for load balancing purposes. The replica pool must
   * live in the same region as the specified target pools. These values must be
   * the target pool resource names, and not fully qualified URLs.
   */
  targetPools: string[];
  /**
   * The template to use when creating replicas in this pool. This template is
   * used during initial instance creation of the pool, when growing the pool in
   * size, or when a replica restarts.
   */
  template: Schema$Template;
  /**
   * Deprecated! Do not set.
   */
  type: string;
}
export interface Schema$PoolsDeleteRequest {
  /**
   * If there are instances you would like to keep, you can specify them here.
   * These instances won&#39;t be deleted, but the associated replica objects
   * will be removed.
   */
  abandonInstances: string[];
}
export interface Schema$PoolsListResponse {
  nextPageToken: string;
  resources: Schema$Pool[];
}
/**
 * An individual Replica within a Pool. Replicas are automatically created by
 * the replica pool, using the template provided by the user. You cannot
 * directly create replicas.
 */
export interface Schema$Replica {
  /**
   * [Output Only] The name of the Replica object.
   */
  name: string;
  /**
   * [Output Only] The self-link of the Replica.
   */
  selfLink: string;
  /**
   * [Output Only] Last known status of the Replica.
   */
  status: Schema$ReplicaStatus;
}
export interface Schema$ReplicasDeleteRequest {
  /**
   * Whether the instance resource represented by this replica should be deleted
   * or abandoned. If abandoned, the replica will be deleted but the virtual
   * machine instance will remain. By default, this is set to false and the
   * instance will be deleted along with the replica.
   */
  abandonInstance: boolean;
}
export interface Schema$ReplicasListResponse {
  nextPageToken: string;
  resources: Schema$Replica[];
}
/**
 * The current status of a Replica.
 */
export interface Schema$ReplicaStatus {
  /**
   * [Output Only] Human-readable details about the current state of the replica
   */
  details: string;
  /**
   * [Output Only] The state of the Replica.
   */
  state: string;
  /**
   * [Output Only] The template used to build the replica.
   */
  templateVersion: string;
  /**
   * [Output Only] Link to the virtual machine that this Replica represents.
   */
  vmLink: string;
  /**
   * [Output Only] The time that this Replica got to the RUNNING state, in RFC
   * 3339 format. If the start time is unknown, UNKNOWN is returned.
   */
  vmStartTime: string;
}
/**
 * A Compute Engine service account, identical to the Compute Engine resource.
 */
export interface Schema$ServiceAccount {
  /**
   * The service account email address, for example:
   * 123845678986@project.gserviceaccount.com
   */
  email: string;
  /**
   * The list of OAuth2 scopes to obtain for the service account, for example:
   * https://www.googleapis.com/auth/devstorage.full_control
   */
  scopes: string[];
}
/**
 * A Compute Engine Instance tag, identical to the tags on the corresponding
 * Compute Engine Instance resource.
 */
export interface Schema$Tag {
  /**
   * The fingerprint of the tag. Required for updating the list of tags.
   */
  fingerPrint: string;
  /**
   * Items contained in this tag.
   */
  items: string[];
}
/**
 * The template used for creating replicas in the pool.
 */
export interface Schema$Template {
  /**
   * An action to run during initialization of your replicas. An action is run
   * as shell commands which are executed one after the other in the same bash
   * shell, so any state established by one command is inherited by later
   * commands.
   */
  action: Schema$Action;
  /**
   * A list of HTTP Health Checks to configure for this replica pool and all
   * virtual machines in this replica pool.
   */
  healthChecks: Schema$HealthCheck[];
  /**
   * A free-form string describing the version of this template. You can provide
   * any versioning string you would like. For example, version1 or template-v1.
   */
  version: string;
  /**
   * The virtual machine parameters to use for creating replicas. You can define
   * settings such as the machine type and the image of replicas in this pool.
   * This is required if replica type is SMART_VM.
   */
  vmParams: Schema$VmParams;
}
/**
 * Parameters for creating a Compute Engine Instance resource. Most fields are
 * identical to the corresponding Compute Engine resource.
 */
export interface Schema$VmParams {
  /**
   * Deprecated. Please use baseInstanceName instead.
   */
  baseInstanceName: string;
  /**
   * Enables IP Forwarding, which allows this instance to receive packets
   * destined for a different IP address, and send packets with a different
   * source IP. See IP Forwarding for more information.
   */
  canIpForward: boolean;
  /**
   * An optional textual description of the instance.
   */
  description: string;
  /**
   * A list of existing Persistent Disk resources to attach to each replica in
   * the pool. Each disk will be attached in read-only mode to every replica.
   */
  disksToAttach: Schema$ExistingDisk[];
  /**
   * A list of Disk resources to create and attach to each Replica in the Pool.
   * Currently, you can only define one disk and it must be a root persistent
   * disk. Note that Replica Pool will create a root persistent disk for each
   * replica.
   */
  disksToCreate: Schema$NewDisk[];
  /**
   * The machine type for this instance. The resource name (e.g. n1-standard-1).
   */
  machineType: string;
  /**
   * The metadata key/value pairs assigned to this instance.
   */
  metadata: Schema$Metadata;
  /**
   * A list of network interfaces for the instance. Currently only one interface
   * is supported by Google Compute Engine, ONE_TO_ONE_NAT.
   */
  networkInterfaces: Schema$NetworkInterface[];
  onHostMaintenance: string;
  /**
   * A list of Service Accounts to enable for this instance.
   */
  serviceAccounts: Schema$ServiceAccount[];
  /**
   * A list of tags to apply to the Google Compute Engine instance to identify
   * resources.
   */
  tags: Schema$Tag;
}

export class Resource$Pools {
  root: Replicapool;
  constructor(root: Replicapool) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  delete(params: any, options?: MethodOptions): AxiosPromise<void>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName'],
      pathParams: ['poolName', 'projectName', 'zone'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Pool>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>):
      void|AxiosPromise<Schema$Pool> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName'],
      pathParams: ['poolName', 'projectName', 'zone'],
      context: this.getRoot()
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
  insert(params: any, options?: MethodOptions): AxiosPromise<Schema$Pool>;
  insert(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>): void;
  insert(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>):
      void|AxiosPromise<Schema$Pool> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone'],
      pathParams: ['projectName', 'zone'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$PoolsListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$PoolsListResponse>,
      callback?: BodyResponseCallback<Schema$PoolsListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$PoolsListResponse>,
      callback?: BodyResponseCallback<Schema$PoolsListResponse>):
      void|AxiosPromise<Schema$PoolsListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone'],
      pathParams: ['projectName', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$PoolsListResponse>(parameters, callback);
    } else {
      return createAPIRequest<Schema$PoolsListResponse>(parameters);
    }
  }


  /**
   * replicapool.pools.resize
   * @desc Resize a pool. This is an asynchronous operation, and multiple
   * overlapping resize requests can be made. Replica Pools will use the
   * information from the last resize request.
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
  resize(params: any, options?: MethodOptions): AxiosPromise<Schema$Pool>;
  resize(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>): void;
  resize(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Pool>,
      callback?: BodyResponseCallback<Schema$Pool>):
      void|AxiosPromise<Schema$Pool> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/resize')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName'],
      pathParams: ['poolName', 'projectName', 'zone'],
      context: this.getRoot()
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
  updatetemplate(params: any, options?: MethodOptions): AxiosPromise<void>;
  updatetemplate(
      params: any, options: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void;
  updatetemplate(
      params: any, options?: MethodOptions|BodyResponseCallback<void>,
      callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/updateTemplate')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName'],
      pathParams: ['poolName', 'projectName', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<void>(parameters, callback);
    } else {
      return createAPIRequest<void>(parameters);
    }
  }
}

export class Resource$Replicas {
  root: Replicapool;
  constructor(root: Replicapool) {
    this.root = root;
    this.getRoot.bind(this);
  }

  getRoot() {
    return this.root;
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
  delete(params: any, options?: MethodOptions): AxiosPromise<Schema$Replica>;
  delete(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>): void;
  delete(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>):
      void|AxiosPromise<Schema$Replica> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
      pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
      context: this.getRoot()
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
  get(params: any, options?: MethodOptions): AxiosPromise<Schema$Replica>;
  get(params: any, options: MethodOptions|BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>): void;
  get(params: any, options?: MethodOptions|BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>):
      void|AxiosPromise<Schema$Replica> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
      pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
      context: this.getRoot()
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
  list(params: any, options?: MethodOptions):
      AxiosPromise<Schema$ReplicasListResponse>;
  list(
      params: any,
      options: MethodOptions|BodyResponseCallback<Schema$ReplicasListResponse>,
      callback?: BodyResponseCallback<Schema$ReplicasListResponse>): void;
  list(
      params: any,
      options?: MethodOptions|BodyResponseCallback<Schema$ReplicasListResponse>,
      callback?: BodyResponseCallback<Schema$ReplicasListResponse>):
      void|AxiosPromise<Schema$ReplicasListResponse> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName'],
      pathParams: ['poolName', 'projectName', 'zone'],
      context: this.getRoot()
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
  restart(params: any, options?: MethodOptions): AxiosPromise<Schema$Replica>;
  restart(
      params: any, options: MethodOptions|BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>): void;
  restart(
      params: any, options?: MethodOptions|BodyResponseCallback<Schema$Replica>,
      callback?: BodyResponseCallback<Schema$Replica>):
      void|AxiosPromise<Schema$Replica> {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }
    options = options || {};
    const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
    const parameters = {
      options: Object.assign(
          {
            url:
                (rootUrl +
                 '/replicapool/v1beta1/projects/{projectName}/zones/{zone}/pools/{poolName}/replicas/{replicaName}/restart')
                    .replace(/([^:]\/)\/+/g, '$1'),
            method: 'POST'
          },
          options),
      params,
      requiredParams: ['projectName', 'zone', 'poolName', 'replicaName'],
      pathParams: ['poolName', 'projectName', 'replicaName', 'zone'],
      context: this.getRoot()
    };
    if (callback) {
      createAPIRequest<Schema$Replica>(parameters, callback);
    } else {
      return createAPIRequest<Schema$Replica>(parameters);
    }
  }
}
