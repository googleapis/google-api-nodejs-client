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
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {GoogleApis} from '../..';
import {BodyResponseCallback, GlobalOptions, MethodOptions} from '../../lib/api';
import {createAPIRequest} from '../../lib/apirequest';

// TODO: We will eventually get the `any` in here cleared out, but in the
// interim we want to turn on no-implicit-any.

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace replicapool_v1beta2 {
  export interface Options extends GlobalOptions { version: 'v1beta2'; }

  /**
   * Google Compute Engine Instance Group Manager API
   *
   * [Deprecated. Please use Instance Group Manager in Compute API] Provides
   * groups of homogenous Compute Engine instances.
   *
   * @example
   * const google = require('googleapis');
   * const replicapool = google.replicapool('v1beta2');
   *
   * @namespace replicapool
   * @type {Function}
   * @version v1beta2
   * @variation v1beta2
   * @param {object=} options Options for Replicapool
   */
  export class Replicapool {
    _options: GlobalOptions;
    google: GoogleApis;
    root = this;

    instanceGroupManagers: Resource$Instancegroupmanagers;
    zoneOperations: Resource$Zoneoperations;

    constructor(options: GlobalOptions, google: GoogleApis) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.instanceGroupManagers = new Resource$Instancegroupmanagers(this);
      this.zoneOperations = new Resource$Zoneoperations(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * An Instance Group Manager resource.
   */
  export interface Schema$InstanceGroupManager {
    /**
     * The autohealing policy for this managed instance group. You can specify
     * only one value.
     */
    autoHealingPolicies?: Schema$ReplicaPoolAutoHealingPolicy[];
    /**
     * The base instance name to use for instances in this group. The value must
     * be a valid RFC1035 name. Supported characters are lowercase letters,
     * numbers, and hyphens (-). Instances are named by appending a hyphen and a
     * random four-character string to the base instance name.
     */
    baseInstanceName?: string;
    /**
     * [Output only] The time the instance group manager was created, in RFC3339
     * text format.
     */
    creationTimestamp?: string;
    /**
     * [Output only] The number of instances that currently exist and are a part
     * of this group. This includes instances that are starting but are not yet
     * RUNNING, and instances that are in the process of being deleted or
     * abandoned.
     */
    currentSize?: number;
    /**
     * An optional textual description of the instance group manager.
     */
    description?: string;
    /**
     * [Output only] Fingerprint of the instance group manager. This field is
     * used for optimistic locking. An up-to-date fingerprint must be provided
     * in order to modify the Instance Group Manager resource.
     */
    fingerprint?: string;
    /**
     * [Output only] The full URL of the instance group created by the manager.
     * This group contains all of the instances being managed, and cannot
     * contain non-managed instances.
     */
    group?: string;
    /**
     * [Output only] A server-assigned unique identifier for the resource.
     */
    id?: string;
    /**
     * The full URL to an instance template from which all new instances will be
     * created.
     */
    instanceTemplate?: string;
    /**
     * [Output only] The resource type. Always replicapool#instanceGroupManager.
     */
    kind?: string;
    /**
     * The name of the instance group manager. Must be 1-63 characters long and
     * comply with RFC1035. Supported characters include lowercase letters,
     * numbers, and hyphens.
     */
    name?: string;
    /**
     * [Output only] The fully qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * The full URL of all target pools to which new instances in the group are
     * added. Updating the target pool values does not affect existing
     * instances.
     */
    targetPools?: string[];
    /**
     * [Output only] The number of instances that the manager is attempting to
     * maintain. Deleting or abandoning instances affects this number, as does
     * resizing the group.
     */
    targetSize?: number;
  }
  export interface Schema$InstanceGroupManagerList {
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string;
    /**
     * A list of instance resources.
     */
    items?: Schema$InstanceGroupManager[];
    /**
     * Type of resource.
     */
    kind?: string;
    /**
     * A token used to continue a truncated list request (output only).
     */
    nextPageToken?: string;
    /**
     * Server defined URL for this resource (output only).
     */
    selfLink?: string;
  }
  export interface Schema$InstanceGroupManagersAbandonInstancesRequest {
    /**
     * The names of one or more instances to abandon. For example: {
     * &#39;instances&#39;: [ &#39;instance-c3po&#39;, &#39;instance-r2d2&#39; ]
     * }
     */
    instances?: string[];
  }
  export interface Schema$InstanceGroupManagersDeleteInstancesRequest {
    /**
     * Names of instances to delete.  Example: &#39;instance-foo&#39;,
     * &#39;instance-bar&#39;
     */
    instances?: string[];
  }
  export interface Schema$InstanceGroupManagersRecreateInstancesRequest {
    /**
     * The names of one or more instances to recreate. For example: {
     * &#39;instances&#39;: [ &#39;instance-c3po&#39;, &#39;instance-r2d2&#39; ]
     * }
     */
    instances?: string[];
  }
  export interface Schema$InstanceGroupManagersSetInstanceTemplateRequest {
    /**
     * The full URL to an Instance Template from which all new instances will be
     * created.
     */
    instanceTemplate?: string;
  }
  export interface Schema$InstanceGroupManagersSetTargetPoolsRequest {
    /**
     * The current fingerprint of the Instance Group Manager resource. If this
     * does not match the server-side fingerprint of the resource, then the
     * request will be rejected.
     */
    fingerprint?: string;
    /**
     * A list of fully-qualified URLs to existing Target Pool resources. New
     * instances in the Instance Group Manager will be added to the specified
     * target pools; existing instances are not affected.
     */
    targetPools?: string[];
  }
  /**
   * An operation resource, used to manage asynchronous API requests.
   */
  export interface Schema$Operation {
    /**
     * [Output only] An optional identifier specified by the client when the
     * mutation was initiated. Must be unique for all operation resources in the
     * project.
     */
    clientOperationId?: string;
    /**
     * [Output Only] The time that this operation was requested, in RFC3339 text
     * format.
     */
    creationTimestamp?: string;
    /**
     * [Output Only] The time that this operation was completed, in RFC3339 text
     * format.
     */
    endTime?: string;
    /**
     * [Output Only] If errors occurred during processing of this operation,
     * this field will be populated.
     */
    error?: any;
    /**
     * [Output only] If operation fails, the HTTP error message returned.
     */
    httpErrorMessage?: string;
    /**
     * [Output only] If operation fails, the HTTP error status code returned.
     */
    httpErrorStatusCode?: number;
    /**
     * [Output Only] Unique identifier for the resource, generated by the
     * server.
     */
    id?: string;
    /**
     * [Output Only] The time that this operation was requested, in RFC3339 text
     * format.
     */
    insertTime?: string;
    /**
     * [Output only] Type of the resource.
     */
    kind?: string;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output only] Type of the operation. Operations include insert, update,
     * and delete.
     */
    operationType?: string;
    /**
     * [Output only] An optional progress indicator that ranges from 0 to 100.
     * There is no requirement that this be linear or support any granularity of
     * operations. This should not be used to guess at when the operation will
     * be complete. This number should be monotonically increasing as the
     * operation progresses.
     */
    progress?: number;
    /**
     * [Output Only] URL of the region where the operation resides. Only
     * available when performing regional operations.
     */
    region?: string;
    /**
     * [Output Only] Server-defined fully-qualified URL for this resource.
     */
    selfLink?: string;
    /**
     * [Output Only] The time that this operation was started by the server, in
     * RFC3339 text format.
     */
    startTime?: string;
    /**
     * [Output Only] Status of the operation.
     */
    status?: string;
    /**
     * [Output Only] An optional textual description of the current status of
     * the operation.
     */
    statusMessage?: string;
    /**
     * [Output Only] Unique target ID which identifies a particular incarnation
     * of the target.
     */
    targetId?: string;
    /**
     * [Output only] URL of the resource the operation is mutating.
     */
    targetLink?: string;
    /**
     * [Output Only] User who requested the operation, for example:
     * user@example.com.
     */
    user?: string;
    /**
     * [Output Only] If there are issues with this operation, a warning is
     * returned.
     */
    warnings?: any[];
    /**
     * [Output Only] URL of the zone where the operation resides. Only available
     * when performing per-zone operations.
     */
    zone?: string;
  }
  export interface Schema$OperationList {
    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string;
    /**
     * The operation resources.
     */
    items?: Schema$Operation[];
    /**
     * Type of resource.
     */
    kind?: string;
    /**
     * A token used to continue a truncated list request (output only).
     */
    nextPageToken?: string;
    /**
     * Server defined URL for this resource (output only).
     */
    selfLink?: string;
  }
  export interface Schema$ReplicaPoolAutoHealingPolicy {
    /**
     * The action to perform when an instance becomes unhealthy. Possible values
     * are RECREATE or REBOOT. RECREATE replaces an unhealthy instance with a
     * new instance that is based on the instance template for this managed
     * instance group. REBOOT performs a soft reboot on an instance. If the
     * instance cannot reboot, the instance performs a hard restart.
     */
    actionType?: string;
    /**
     * The URL for the HealthCheck that signals autohealing.
     */
    healthCheck?: string;
  }


  export class Resource$Instancegroupmanagers {
    root: Replicapool;
    constructor(root: Replicapool) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * replicapool.instanceGroupManagers.abandonInstances
     * @desc Removes the specified instances from the managed instance group,
     * and from any target pools of which they were members, without deleting
     * the instances.
     * @alias replicapool.instanceGroupManagers.abandonInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {().InstanceGroupManagersAbandonInstancesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    abandonInstances(
        params?: Params$Resource$Instancegroupmanagers$Abandoninstances,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    abandonInstances(
        params: Params$Resource$Instancegroupmanagers$Abandoninstances,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    abandonInstances(
        params: Params$Resource$Instancegroupmanagers$Abandoninstances,
        callback: BodyResponseCallback<Schema$Operation>): void;
    abandonInstances(callback: BodyResponseCallback<Schema$Operation>): void;
    abandonInstances(
        paramsOrCallback?:
            Params$Resource$Instancegroupmanagers$Abandoninstances|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Abandoninstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Abandoninstances;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.delete
     * @desc Deletes the instance group manager and all instances contained
     * within. If you'd like to delete the manager without deleting the
     * instances, you must first abandon the instances to remove them from the
     * group.
     * @alias replicapool.instanceGroupManagers.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the Instance Group Manager resource to delete.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Instancegroupmanagers$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    delete(
        params: Params$Resource$Instancegroupmanagers$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        params: Params$Resource$Instancegroupmanagers$Delete,
        callback: BodyResponseCallback<Schema$Operation>): void;
    delete(callback: BodyResponseCallback<Schema$Operation>): void;
    delete(
        paramsOrCallback?: Params$Resource$Instancegroupmanagers$Delete|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Delete;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.deleteInstances
     * @desc Deletes the specified instances. The instances are deleted, then
     * removed from the instance group and any target pools of which they were a
     * member. The targetSize of the instance group manager is reduced by the
     * number of instances deleted.
     * @alias replicapool.instanceGroupManagers.deleteInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {().InstanceGroupManagersDeleteInstancesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deleteInstances(
        params?: Params$Resource$Instancegroupmanagers$Deleteinstances,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    deleteInstances(
        params: Params$Resource$Instancegroupmanagers$Deleteinstances,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    deleteInstances(
        params: Params$Resource$Instancegroupmanagers$Deleteinstances,
        callback: BodyResponseCallback<Schema$Operation>): void;
    deleteInstances(callback: BodyResponseCallback<Schema$Operation>): void;
    deleteInstances(
        paramsOrCallback?:
            Params$Resource$Instancegroupmanagers$Deleteinstances|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Deleteinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Deleteinstances;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.get
     * @desc Returns the specified Instance Group Manager resource.
     * @alias replicapool.instanceGroupManagers.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager Name of the instance resource to return.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Instancegroupmanagers$Get,
        options?: MethodOptions): AxiosPromise<Schema$InstanceGroupManager>;
    get(params: Params$Resource$Instancegroupmanagers$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstanceGroupManager>,
        callback: BodyResponseCallback<Schema$InstanceGroupManager>): void;
    get(params: Params$Resource$Instancegroupmanagers$Get,
        callback: BodyResponseCallback<Schema$InstanceGroupManager>): void;
    get(callback: BodyResponseCallback<Schema$InstanceGroupManager>): void;
    get(paramsOrCallback?: Params$Resource$Instancegroupmanagers$Get|
        BodyResponseCallback<Schema$InstanceGroupManager>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstanceGroupManager>,
        callback?: BodyResponseCallback<Schema$InstanceGroupManager>):
        void|AxiosPromise<Schema$InstanceGroupManager> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Instancegroupmanagers$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Get;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InstanceGroupManager>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstanceGroupManager>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.insert
     * @desc Creates an instance group manager, as well as the instance group
     * and the specified number of instances.
     * @alias replicapool.instanceGroupManagers.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The Google Developers Console project name.
     * @param {integer} params.size Number of instances that should exist.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {().InstanceGroupManager} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Instancegroupmanagers$Insert,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    insert(
        params: Params$Resource$Instancegroupmanagers$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
        params: Params$Resource$Instancegroupmanagers$Insert,
        callback: BodyResponseCallback<Schema$Operation>): void;
    insert(callback: BodyResponseCallback<Schema$Operation>): void;
    insert(
        paramsOrCallback?: Params$Resource$Instancegroupmanagers$Insert|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Insert;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'size'],
        pathParams: ['project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.list
     * @desc Retrieves the list of Instance Group Manager resources contained
     * within the specified zone.
     * @alias replicapool.instanceGroupManagers.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
     * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Instancegroupmanagers$List,
        options?: MethodOptions): AxiosPromise<Schema$InstanceGroupManagerList>;
    list(
        params: Params$Resource$Instancegroupmanagers$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$InstanceGroupManagerList>,
        callback: BodyResponseCallback<Schema$InstanceGroupManagerList>): void;
    list(
        params: Params$Resource$Instancegroupmanagers$List,
        callback: BodyResponseCallback<Schema$InstanceGroupManagerList>): void;
    list(callback: BodyResponseCallback<Schema$InstanceGroupManagerList>): void;
    list(
        paramsOrCallback?: Params$Resource$Instancegroupmanagers$List|
        BodyResponseCallback<Schema$InstanceGroupManagerList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$InstanceGroupManagerList>,
        callback?: BodyResponseCallback<Schema$InstanceGroupManagerList>):
        void|AxiosPromise<Schema$InstanceGroupManagerList> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$List;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$InstanceGroupManagerList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$InstanceGroupManagerList>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.recreateInstances
     * @desc Recreates the specified instances. The instances are deleted, then
     * recreated using the instance group manager's current instance template.
     * @alias replicapool.instanceGroupManagers.recreateInstances
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {().InstanceGroupManagersRecreateInstancesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    recreateInstances(
        params?: Params$Resource$Instancegroupmanagers$Recreateinstances,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    recreateInstances(
        params: Params$Resource$Instancegroupmanagers$Recreateinstances,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    recreateInstances(
        params: Params$Resource$Instancegroupmanagers$Recreateinstances,
        callback: BodyResponseCallback<Schema$Operation>): void;
    recreateInstances(callback: BodyResponseCallback<Schema$Operation>): void;
    recreateInstances(
        paramsOrCallback?:
            Params$Resource$Instancegroupmanagers$Recreateinstances|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Recreateinstances;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Recreateinstances;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.resize
     * @desc Resizes the managed instance group up or down. If resized up, new
     * instances are created using the current instance template. If resized
     * down, instances are removed in the order outlined in Resizing a managed
     * instance group.
     * @alias replicapool.instanceGroupManagers.resize
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project The Google Developers Console project name.
     * @param {integer} params.size Number of instances that should exist in this Instance Group Manager.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resize(
        params?: Params$Resource$Instancegroupmanagers$Resize,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    resize(
        params: Params$Resource$Instancegroupmanagers$Resize,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    resize(
        params: Params$Resource$Instancegroupmanagers$Resize,
        callback: BodyResponseCallback<Schema$Operation>): void;
    resize(callback: BodyResponseCallback<Schema$Operation>): void;
    resize(
        paramsOrCallback?: Params$Resource$Instancegroupmanagers$Resize|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Resize;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Resize;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager', 'size'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.setInstanceTemplate
     * @desc Sets the instance template to use when creating new instances in
     * this group. Existing instances are not affected.
     * @alias replicapool.instanceGroupManagers.setInstanceTemplate
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {().InstanceGroupManagersSetInstanceTemplateRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setInstanceTemplate(
        params?: Params$Resource$Instancegroupmanagers$Setinstancetemplate,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    setInstanceTemplate(
        params: Params$Resource$Instancegroupmanagers$Setinstancetemplate,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    setInstanceTemplate(
        params: Params$Resource$Instancegroupmanagers$Setinstancetemplate,
        callback: BodyResponseCallback<Schema$Operation>): void;
    setInstanceTemplate(callback: BodyResponseCallback<Schema$Operation>): void;
    setInstanceTemplate(
        paramsOrCallback?:
            Params$Resource$Instancegroupmanagers$Setinstancetemplate|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Setinstancetemplate;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Instancegroupmanagers$Setinstancetemplate;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.instanceGroupManagers.setTargetPools
     * @desc Modifies the target pools to which all new instances in this group
     * are assigned. Existing instances in the group are not affected.
     * @alias replicapool.instanceGroupManagers.setTargetPools
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceGroupManager The name of the instance group manager.
     * @param {string} params.project The Google Developers Console project name.
     * @param {string} params.zone The name of the zone in which the instance group manager resides.
     * @param {().InstanceGroupManagersSetTargetPoolsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setTargetPools(
        params?: Params$Resource$Instancegroupmanagers$Settargetpools,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    setTargetPools(
        params: Params$Resource$Instancegroupmanagers$Settargetpools,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    setTargetPools(
        params: Params$Resource$Instancegroupmanagers$Settargetpools,
        callback: BodyResponseCallback<Schema$Operation>): void;
    setTargetPools(callback: BodyResponseCallback<Schema$Operation>): void;
    setTargetPools(
        paramsOrCallback?: Params$Resource$Instancegroupmanagers$Settargetpools|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Instancegroupmanagers$Settargetpools;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Instancegroupmanagers$Settargetpools;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'instanceGroupManager'],
        pathParams: ['instanceGroupManager', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Instancegroupmanagers$Abandoninstances {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the instance group manager.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$InstanceGroupManagersAbandonInstancesRequest;
  }
  export interface Params$Resource$Instancegroupmanagers$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the Instance Group Manager resource to delete.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
  }
  export interface Params$Resource$Instancegroupmanagers$Deleteinstances {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the instance group manager.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$InstanceGroupManagersDeleteInstancesRequest;
  }
  export interface Params$Resource$Instancegroupmanagers$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the instance resource to return.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
  }
  export interface Params$Resource$Instancegroupmanagers$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * Number of instances that should exist.
     */
    size?: number;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$InstanceGroupManager;
  }
  export interface Params$Resource$Instancegroupmanagers$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. Filter expression for filtering listed resources.
     */
    filter?: string;
    /**
     * Optional. Maximum count of results to be returned. Maximum value is 500
     * and default value is 500.
     */
    maxResults?: number;
    /**
     * Optional. Tag returned by a previous list request truncated by
     * maxResults. Used to continue a previous list request.
     */
    pageToken?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
  }
  export interface Params$Resource$Instancegroupmanagers$Recreateinstances {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the instance group manager.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$InstanceGroupManagersRecreateInstancesRequest;
  }
  export interface Params$Resource$Instancegroupmanagers$Resize {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the instance group manager.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * Number of instances that should exist in this Instance Group Manager.
     */
    size?: number;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
  }
  export interface Params$Resource$Instancegroupmanagers$Setinstancetemplate {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the instance group manager.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$InstanceGroupManagersSetInstanceTemplateRequest;
  }
  export interface Params$Resource$Instancegroupmanagers$Settargetpools {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the instance group manager.
     */
    instanceGroupManager?: string;
    /**
     * The Google Developers Console project name.
     */
    project?: string;
    /**
     * The name of the zone in which the instance group manager resides.
     */
    zone?: string;
    /**
     * Request body metadata
     */
    resource?: Schema$InstanceGroupManagersSetTargetPoolsRequest;
  }


  export class Resource$Zoneoperations {
    root: Replicapool;
    constructor(root: Replicapool) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * replicapool.zoneOperations.get
     * @desc Retrieves the specified zone-specific operation resource.
     * @alias replicapool.zoneOperations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation Name of the operation resource to return.
     * @param {string} params.project Name of the project scoping this request.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Zoneoperations$Get,
        options?: MethodOptions): AxiosPromise<Schema$Operation>;
    get(params: Params$Resource$Zoneoperations$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Operation>,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(params: Params$Resource$Zoneoperations$Get,
        callback: BodyResponseCallback<Schema$Operation>): void;
    get(callback: BodyResponseCallback<Schema$Operation>): void;
    get(paramsOrCallback?: Params$Resource$Zoneoperations$Get|
        BodyResponseCallback<Schema$Operation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Operation>,
        callback?: BodyResponseCallback<Schema$Operation>):
        void|AxiosPromise<Schema$Operation> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Zoneoperations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneoperations$Get;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/operations/{operation}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'zone', 'operation'],
        pathParams: ['operation', 'project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Operation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Operation>(parameters);
      }
    }


    /**
     * replicapool.zoneOperations.list
     * @desc Retrieves the list of operation resources contained within the
     * specified zone.
     * @alias replicapool.zoneOperations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
     * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
     * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
     * @param {string} params.project Name of the project scoping this request.
     * @param {string} params.zone Name of the zone scoping this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Zoneoperations$List, options?: MethodOptions):
        AxiosPromise<Schema$OperationList>;
    list(
        params: Params$Resource$Zoneoperations$List,
        options: MethodOptions|BodyResponseCallback<Schema$OperationList>,
        callback: BodyResponseCallback<Schema$OperationList>): void;
    list(
        params: Params$Resource$Zoneoperations$List,
        callback: BodyResponseCallback<Schema$OperationList>): void;
    list(callback: BodyResponseCallback<Schema$OperationList>): void;
    list(
        paramsOrCallback?: Params$Resource$Zoneoperations$List|
        BodyResponseCallback<Schema$OperationList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$OperationList>,
        callback?: BodyResponseCallback<Schema$OperationList>):
        void|AxiosPromise<Schema$OperationList> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Zoneoperations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Zoneoperations$List;
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
              url:
                  (rootUrl +
                   '/replicapool/v1beta2/projects/{project}/zones/{zone}/operations')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['project', 'zone'],
        pathParams: ['project', 'zone'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$OperationList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$OperationList>(parameters);
      }
    }
  }

  export interface Params$Resource$Zoneoperations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the operation resource to return.
     */
    operation?: string;
    /**
     * Name of the project scoping this request.
     */
    project?: string;
    /**
     * Name of the zone scoping this request.
     */
    zone?: string;
  }
  export interface Params$Resource$Zoneoperations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Optional. Filter expression for filtering listed resources.
     */
    filter?: string;
    /**
     * Optional. Maximum count of results to be returned. Maximum value is 500
     * and default value is 500.
     */
    maxResults?: number;
    /**
     * Optional. Tag returned by a previous list request truncated by
     * maxResults. Used to continue a previous list request.
     */
    pageToken?: string;
    /**
     * Name of the project scoping this request.
     */
    project?: string;
    /**
     * Name of the zone scoping this request.
     */
    zone?: string;
  }
}
