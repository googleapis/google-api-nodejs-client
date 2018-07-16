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

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace servicebroker_v1alpha1 {
  export interface Options extends GlobalOptions {
    version: 'v1alpha1';
  }

  /**
   * Service Broker API
   *
   * The Google Cloud Platform Service Broker API provides Google hosted
   * implementation of the Open Service Broker API
   * (https://www.openservicebrokerapi.org/).
   *
   * @example
   * const {google} = require('googleapis');
   * const servicebroker = google.servicebroker('v1alpha1');
   *
   * @namespace servicebroker
   * @type {Function}
   * @version v1alpha1
   * @variation v1alpha1
   * @param {object=} options Options for Servicebroker
   */
  export class Servicebroker {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;
    v1alpha1: Resource$V1alpha1;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
      this.v1alpha1 = new Resource$V1alpha1(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Describes the binding.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Binding {
    /**
     * The id of the binding. Must be unique within GCP project. Maximum length
     * is 64, GUID recommended. Required.
     */
    binding_id?: string;
    /**
     * A JSON object that contains data for platform resources associated with
     * the binding to be created.
     */
    bind_resource?: any;
    /**
     * Output only. Timestamp for when the binding was created.
     */
    createTime?: string;
    /**
     * Configuration options for the service binding.
     */
    parameters?: any;
    /**
     * The ID of the plan. See `Service` and `Plan` resources for details.
     * Maximum length is 64, GUID recommended. Required.
     */
    plan_id?: string;
    /**
     * The id of the service. Must be a valid identifier of a service contained
     * in the list from a `ListServices()` call. Maximum length is 64, GUID
     * recommended. Required.
     */
    service_id?: string;
  }
  /**
   * Response for the `CreateBinding()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse {
    /**
     * Credentials to use the binding.
     */
    credentials?: any;
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * If broker executes operation asynchronously, this is the operation ID
     * that can be polled to check the completion status of said operation. This
     * broker always executes all create/delete operations asynchronously.
     */
    operation?: string;
    /**
     * A URL to which the platform may proxy requests for the address sent with
     * bind_resource.route
     */
    route_service_url?: string;
    /**
     * From where to read system logs.
     */
    syslog_drain_url?: string;
    /**
     * An array of configuration for mounting volumes.
     */
    volume_mounts?: any[];
  }
  /**
   * Response for the `CreateServiceInstance()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * If broker executes operation asynchronously, this is the operation ID
     * that can be polled to check the completion status of said operation. This
     * broker always will return a non-empty operation on success.
     */
    operation?: string;
  }
  /**
   * Message containing information required to activate Dashboard SSO feature.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__DashboardClient {
    /**
     * The id of the Oauth client that the dashboard will use.
     */
    id?: string;
    /**
     * A URI for the service dashboard. Validated by the OAuth token server when
     * the dashboard requests a token.
     */
    redirect_uri?: string;
    /**
     * A secret for the dashboard client.
     */
    secret?: string;
  }
  /**
   * Response for the `DeleteBinding()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * If broker executes operation asynchronously, this is the operation ID
     * that can be polled to check the completion status of said operation.
     */
    operation?: string;
  }
  /**
   * Response for the `DeleteServiceInstance()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * If broker executes operation asynchronously, this is the operation ID
     * that can be polled to check the completion status of said operation.
     */
    operation?: string;
  }
  /**
   * Response for the `GetBinding()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse {
    /**
     * Credentials to use the binding.
     */
    credentials?: any;
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * A URL to which the platform may proxy requests for the address sent with
     * bind_resource.route
     */
    route_service_url?: string;
    /**
     * From where to read system logs.
     */
    syslog_drain_url?: string;
    /**
     * An array of configuration for mounting volumes.
     */
    volume_mounts?: any[];
  }
  /**
   * The response for the `ListBindings()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse {
    /**
     * The list of the bindings in the instance.
     */
    bindings?: Schema$GoogleCloudServicebrokerV1alpha1__Binding[];
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the
     * `nextPageToken` as a value for the query parameter `pageToken` in the
     * next list request. Subsequent list requests will have their own
     * `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
  }
  /**
   * Response message for the `ListCatalog()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the
     * `nextPageToken` as a value for the query parameter `pageToken` in the
     * next list request. Subsequent list requests will have their own
     * `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
    /**
     * The services available for the requested GCP project.
     */
    services?: Schema$GoogleCloudServicebrokerV1alpha1__Service[];
  }
  /**
   * The response for the `ListServiceInstances()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * The list of the instances in the broker.
     */
    instances?: Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance[];
    /**
     * This token allows you to get the next page of results for list requests.
     * If the number of results is larger than `pageSize`, use the
     * `nextPageToken` as a value for the query parameter `pageToken` in the
     * next list request. Subsequent list requests will have their own
     * `nextPageToken` to continue paging through the results
     */
    nextPageToken?: string;
  }
  /**
   * Describes a long running operation, which conforms to OpenService API.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Operation {
    /**
     * Optional description of the Operation state.
     */
    description?: string;
    /**
     * The state of the operation. Valid values are: &quot;in progress&quot;,
     * &quot;succeeded&quot;, and &quot;failed&quot;.
     */
    state?: string;
  }
  /**
   * Plan message describes a Service Plan.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Plan {
    /**
     * Specifies whether instances of the service can be bound to applications.
     * If not specified, `Service.bindable` will be presumed.
     */
    bindable?: boolean;
    /**
     * Textual description of the plan. Optional.
     */
    description?: string;
    /**
     * Whether the service is free.
     */
    free?: boolean;
    /**
     * ID is a globally unique identifier used to uniquely identify the plan.
     * User must make no presumption about the format of this field.
     */
    id?: string;
    /**
     * A list of metadata for a service offering. Metadata is an arbitrary JSON
     * object.
     */
    metadata?: any;
    /**
     * User friendly name of the plan. The name must be globally unique within
     * GCP project. Note, which is different from (&quot;This must be globally
     * unique within a platform marketplace&quot;).
     */
    name?: string;
    /**
     * Schema definitions for service instances and bindings for the plan.
     */
    schemas?: any;
  }
  /**
   * The resource model mostly follows the Open Service Broker API, as described
   * here:
   * https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
   * Though due to Google Specifics it has additional optional fields.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__Service {
    /**
     * Specifies whether instances of the service can be bound to applications.
     * Required.
     */
    bindable?: boolean;
    /**
     * Whether the service provides an endpoint to get service bindings.
     */
    binding_retrievable?: boolean;
    /**
     * Information to activate Dashboard SSO feature.
     */
    dashboard_client?: Schema$GoogleCloudServicebrokerV1alpha1__DashboardClient;
    /**
     * Textual description of the service. Required.
     */
    description?: string;
    /**
     * ID is a globally unique identifier used to uniquely identify the service.
     * ID is an opaque string.
     */
    id?: string;
    /**
     * Whether the service provides an endpoint to get service instances.
     */
    instance_retrievable?: boolean;
    /**
     * A list of metadata for a service offering. Metadata is an arbitrary JSON
     * object.
     */
    metadata?: any;
    /**
     * User friendly service name. Name must match [a-z0-9]+ regexp. The name
     * must be globally unique within GCP project. Note, which is different from
     * (&quot;This must be globally unique within a platform marketplace&quot;).
     * Required.
     */
    name?: string;
    /**
     * A list of plans for this service. At least one plan is required.
     */
    plans?: Schema$GoogleCloudServicebrokerV1alpha1__Plan[];
    /**
     * Whether the service supports upgrade/downgrade for some plans.
     */
    plan_updateable?: boolean;
    /**
     * Tags provide a flexible mechanism to expose a classification, attribute,
     * or base technology of a service.
     */
    tags?: string[];
  }
  /**
   * Message describing inputs to Provision and Update Service instance
   * requests.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance {
    /**
     * Platform specific contextual information under which the service instance
     * is to be provisioned. This replaces organization_guid and space_guid. But
     * can also contain anything. Currently only used for logging context
     * information.
     */
    context?: any;
    /**
     * Output only. Timestamp for when the instance was created.
     */
    createTime?: string;
    /**
     * Output only. Name of the Deployment Manager deployment used for
     * provisioning of this service instance.
     */
    deploymentName?: string;
    /**
     * The id of the service instance. Must be unique within GCP project.
     * Maximum length is 64, GUID recommended. Required.
     */
    instance_id?: string;
    /**
     * The platform GUID for the organization under which the service is to be
     * provisioned. Required.
     */
    organization_guid?: string;
    /**
     * Configuration options for the service instance. Parameters is JSON object
     * serialized to string.
     */
    parameters?: any;
    /**
     * The ID of the plan. See `Service` and `Plan` resources for details.
     * Maximum length is 64, GUID recommended. Required.
     */
    plan_id?: string;
    /**
     * Used only in UpdateServiceInstance request to optionally specify previous
     * fields.
     */
    previous_values?: any;
    /**
     * Output only. The resource name of the instance, e.g.
     * projects/project_id/brokers/broker_id/service_instances/instance_id
     */
    resourceName?: string;
    /**
     * The id of the service. Must be a valid identifier of a service contained
     * in the list from a `ListServices()` call. Maximum length is 64, GUID
     * recommended. Required.
     */
    service_id?: string;
    /**
     * The identifier for the project space within the platform organization.
     * Required.
     */
    space_guid?: string;
  }
  /**
   * Response for the `UpdateServiceInstance()` method.
   */
  export interface Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse {
    /**
     * Used to communicate description of the response. Usually for non-standard
     * error codes.
     * https://github.com/openservicebrokerapi/servicebroker/blob/master/spec.md#service-broker-errors
     */
    description?: string;
    /**
     * If broker executes operation asynchronously, this is the operation ID
     * that can be polled to check the completion status of said operation.
     */
    operation?: string;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$GoogleIamV1__Binding {
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: A Google Apps
     * domain name that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`. Required
     */
    role?: string;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$GoogleIamV1__Policy {
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$GoogleIamV1__Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$GoogleIamV1__SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy?: Schema$GoogleIamV1__Policy;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     * For more information see [IAM
     * Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$GoogleIamV1__TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }


  export class Resource$Projects {
    root: Servicebroker;
    brokers: Resource$Projects$Brokers;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
      this.brokers = new Resource$Projects$Brokers(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Brokers {
    root: Servicebroker;
    instances: Resource$Projects$Brokers$Instances;
    service_instances: Resource$Projects$Brokers$Service_instances;
    v2: Resource$Projects$Brokers$V2;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
      this.instances = new Resource$Projects$Brokers$Instances(root);
      this.service_instances =
          new Resource$Projects$Brokers$Service_instances(root);
      this.v2 = new Resource$Projects$Brokers$V2(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Brokers$Instances {
    root: Servicebroker;
    service_bindings: Resource$Projects$Brokers$Instances$Service_bindings;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
      this.service_bindings =
          new Resource$Projects$Brokers$Instances$Service_bindings(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.projects.brokers.instances.get
     * @desc Gets the given service instance from the system. This API is an
     * extension and not part of the OSB spec. Hence the path is a standard
     * Google API URL.
     * @alias servicebroker.projects.brokers.instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the instance to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Brokers$Instances$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>;
    get(params: Params$Resource$Projects$Brokers$Instances$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void;
    get(params: Params$Resource$Projects$Brokers$Instances$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Brokers$Instances$Get|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void|
        AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$Instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$Instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$Instances$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the instance to return.
     */
    name?: string;
  }

  export class Resource$Projects$Brokers$Instances$Service_bindings {
    root: Servicebroker;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.projects.brokers.instances.service_bindings.list
     * @desc Lists all the bindings in the instance
     * @alias servicebroker.projects.brokers.instances.service_bindings.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Projects$Brokers$Instances$Service_bindings$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>;
    list(
        params:
            Params$Resource$Projects$Brokers$Instances$Service_bindings$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>):
        void;
    list(
        params:
            Params$Resource$Projects$Brokers$Instances$Service_bindings$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$Instances$Service_bindings$List|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$Instances$Service_bindings$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$Instances$Service_bindings$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+parent}/service_bindings')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ListBindingsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$Instances$Service_bindings$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer
     * elements than the specified number, returns all elements. Optional. If
     * unset or 0, all the results will be returned.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken`
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * Parent must match
     * `projects/[PROJECT_ID]/brokers/[BROKER_ID]/instances/[INSTANCE_ID]`.
     */
    parent?: string;
  }



  export class Resource$Projects$Brokers$Service_instances {
    root: Servicebroker;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.projects.brokers.service_instances.list
     * @desc Lists all the instances in the brokers This API is an extension and
     * not part of the OSB spec. Hence the path is a standard Google API URL.
     * @alias servicebroker.projects.brokers.service_instances.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Brokers$Service_instances$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>;
    list(
        params: Params$Resource$Projects$Brokers$Service_instances$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>):
        void;
    list(
        params: Params$Resource$Projects$Brokers$Service_instances$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$Service_instances$List|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$Service_instances$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$Service_instances$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+parent}/service_instances')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ListServiceInstancesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$Service_instances$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer
     * elements than the specified number, returns all elements. Optional. If
     * unset or 0, all the results will be returned.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken`
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
  }


  export class Resource$Projects$Brokers$V2 {
    root: Servicebroker;
    catalog: Resource$Projects$Brokers$V2$Catalog;
    service_instances: Resource$Projects$Brokers$V2$Service_instances;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
      this.catalog = new Resource$Projects$Brokers$V2$Catalog(root);
      this.service_instances =
          new Resource$Projects$Brokers$V2$Service_instances(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Projects$Brokers$V2$Catalog {
    root: Servicebroker;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.projects.brokers.v2.catalog.list
     * @desc Lists all the Services registered with this broker for consumption
     * for given service registry broker, which contains an set of services.
     * Note, that Service producer API is separate from Broker API.
     * @alias servicebroker.projects.brokers.v2.catalog.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer=} params.pageSize Specifies the number of results to return per page. If there are fewer elements than the specified number, returns all elements. Optional. If unset or 0, all the results will be returned.
     * @param {string=} params.pageToken Specifies a page token to use. Set `pageToken` to a `nextPageToken` returned by a previous list request to get the next page of results.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Projects$Brokers$V2$Catalog$List,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>;
    list(
        params: Params$Resource$Projects$Brokers$V2$Catalog$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>):
        void;
    list(
        params: Params$Resource$Projects$Brokers$V2$Catalog$List,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>):
        void;
    list(callback: BodyResponseCallback<
         Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Brokers$V2$Catalog$List|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Catalog$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Brokers$V2$Catalog$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+parent}/v2/catalog')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ListCatalogResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$V2$Catalog$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Specifies the number of results to return per page. If there are fewer
     * elements than the specified number, returns all elements. Optional. If
     * unset or 0, all the results will be returned.
     */
    pageSize?: number;
    /**
     * Specifies a page token to use. Set `pageToken` to a `nextPageToken`
     * returned by a previous list request to get the next page of results.
     */
    pageToken?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
  }


  export class Resource$Projects$Brokers$V2$Service_instances {
    root: Servicebroker;
    service_bindings:
        Resource$Projects$Brokers$V2$Service_instances$Service_bindings;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
      this.service_bindings =
          new Resource$Projects$Brokers$V2$Service_instances$Service_bindings(
              root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.create
     * @desc Provisions a service instance. If `request.accepts_incomplete` is
     * false and Broker cannot execute request synchronously HTTP 422 error will
     * be returned along with FAILED_PRECONDITION status. If
     * `request.accepts_incomplete` is true and the Broker decides to execute
     * resource asynchronously then HTTP 202 response code will be returned and
     * a valid polling operation in the response will be included. If Broker
     * executes the request synchronously and it succeeds HTTP 201 response will
     * be furnished. If identical instance exists, then HTTP 200 response will
     * be returned. If an instance with identical ID but mismatching parameters
     * exists, then HTTP 409 status code will be returned.
     * @alias servicebroker.projects.brokers.v2.service_instances.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete Value indicating that API client supports asynchronous operations. If Broker cannot execute the request synchronously HTTP 422 code will be returned to HTTP clients along with FAILED_PRECONDITION error. If true and broker will execute request asynchronously 202 HTTP code will be returned. This broker always requires this to be true as all mutator operations are asynchronous.
     * @param {string} params.instance_id The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {().GoogleCloudServicebrokerV1alpha1__ServiceInstance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Brokers$V2$Service_instances$Create,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>;
    create(
        params: Params$Resource$Projects$Brokers$V2$Service_instances$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>):
        void;
    create(
        params: Params$Resource$Projects$Brokers$V2$Service_instances$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>):
        void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Create|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1alpha1/{+parent}/v2/service_instances/{+instance_id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['parent', 'instance_id'],
        pathParams: ['instance_id', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateServiceInstanceResponse>(
            parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.delete
     * @desc Deprovisions a service instance. For synchronous/asynchronous
     * request details see CreateServiceInstance method. If service instance
     * does not exist HTTP 410 status will be returned.
     * @alias servicebroker.projects.brokers.v2.service_instances.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.instanceId The instance id to deprovision.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId The plan id of the service instance.
     * @param {string=} params.serviceId The service id of the service instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Brokers$V2$Service_instances$Delete,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>;
    delete(
        params: Params$Resource$Projects$Brokers$V2$Service_instances$Delete,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>):
        void;
    delete(
        params: Params$Resource$Projects$Brokers$V2$Service_instances$Delete,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>):
        void;
    delete(callback: BodyResponseCallback<
           Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>):
        void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Delete|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent', 'instanceId'],
        pathParams: ['instanceId', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteServiceInstanceResponse>(
            parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.get
     * @desc Gets the given service instance from the system. This API is an
     * extension and not part of the OSB spec. Hence the path is a standard
     * Google API URL.
     * @alias servicebroker.projects.brokers.v2.service_instances.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the instance to return.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Brokers$V2$Service_instances$Get,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>;
    get(params: Params$Resource$Projects$Brokers$V2$Service_instances$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void;
    get(params: Params$Resource$Projects$Brokers$V2$Service_instances$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Get|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>): void|
        AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1alpha1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance>(
            parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.getLast_operation
     * @desc Returns the state of the last operation for the service instance.
     * Only last (or current) operation can be polled.
     * @alias
     * servicebroker.projects.brokers.v2.service_instances.getLast_operation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.instanceId The instance id for which to return the last operation status.
     * @param {string=} params.operation If `operation` was returned during mutation operation, this field must be populated with the provided value.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId Plan id.
     * @param {string=} params.serviceId Service id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLast_operation(
        params?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__Operation>;
    getLast_operation(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>): void;
    getLast_operation(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>): void;
    getLast_operation(callback: BodyResponseCallback<
                      Schema$GoogleCloudServicebrokerV1alpha1__Operation>):
        void;
    getLast_operation(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>):
        void|AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/last_operation')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent', 'instanceId'],
        pathParams: ['instanceId', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudServicebrokerV1alpha1__Operation>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>(parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.patch
     * @desc Updates an existing service instance. See CreateServiceInstance for
     * possible response codes.
     * @alias servicebroker.projects.brokers.v2.service_instances.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.instance_id The id of the service instance. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {().GoogleCloudServicebrokerV1alpha1__ServiceInstance} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Brokers$V2$Service_instances$Patch,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>;
    patch(
        params: Params$Resource$Projects$Brokers$V2$Service_instances$Patch,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>):
        void;
    patch(
        params: Params$Resource$Projects$Brokers$V2$Service_instances$Patch,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>):
        void;
    patch(callback: BodyResponseCallback<
          Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>):
        void;
    patch(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Patch|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v1alpha1/{+parent}/v2/service_instances/{+instance_id}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['parent', 'instance_id'],
        pathParams: ['instance_id', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__UpdateServiceInstanceResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Value indicating that API client supports asynchronous operations. If
     * Broker cannot execute the request synchronously HTTP 422 code will be
     * returned to HTTP clients along with FAILED_PRECONDITION error. If true
     * and broker will execute request asynchronously 202 HTTP code will be
     * returned. This broker always requires this to be true as all mutator
     * operations are asynchronous.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the service instance. Must be unique within GCP project.
     * Maximum length is 64, GUID recommended. Required.
     */
    instance_id?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The instance id to deprovision.
     */
    instanceId?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * The plan id of the service instance.
     */
    planId?: string;
    /**
     * The service id of the service instance.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The resource name of the instance to return.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Getlast_operation {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The instance id for which to return the last operation status.
     */
    instanceId?: string;
    /**
     * If `operation` was returned during mutation operation, this field must be
     * populated with the provided value.
     */
    operation?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * Plan id.
     */
    planId?: string;
    /**
     * Service id.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the service instance. Must be unique within GCP project.
     * Maximum length is 64, GUID recommended. Required.
     */
    instance_id?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudServicebrokerV1alpha1__ServiceInstance;
  }

  export class Resource$Projects$Brokers$V2$Service_instances$Service_bindings {
    root: Servicebroker;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.create
     * @desc CreateBinding generates a service binding to an existing service
     * instance. See ProviServiceInstance for async operation details.
     * @alias
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.binding_id The id of the binding. Must be unique within GCP project. Maximum length is 64, GUID recommended. Required.
     * @param {string} params.instanceId The service instance to which to bind.
     * @param {string} params.parent The GCP container. Must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {().GoogleCloudServicebrokerV1alpha1__Binding} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>;
    create(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>):
        void;
    create(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>):
        void;
    create(callback: BodyResponseCallback<
           Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>):
        void;
    create(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/service_bindings/{+binding_id}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['parent', 'instanceId', 'binding_id'],
        pathParams: ['binding_id', 'instanceId', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__CreateBindingResponse>(
            parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.delete
     * @desc Unbinds from a service instance. For synchronous/asynchronous
     * request details see CreateServiceInstance method. If binding does not
     * exist HTTP 410 status will be returned.
     * @alias
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.acceptsIncomplete See CreateServiceInstanceRequest for details.
     * @param {string} params.bindingId The id of the binding to delete.
     * @param {string} params.instanceId The service instance id that deleted binding is bound to.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId The plan id of the service instance.
     * @param {string=} params.serviceId Additional query parameter hints. The service id of the service instance.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>;
    delete(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>):
        void;
    delete(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>):
        void;
    delete(callback: BodyResponseCallback<
           Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>):
        void;
    delete(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1alpha1/{+parent}/v2/service_instances/{instanceId}/service_bindings/{bindingId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['parent', 'instanceId', 'bindingId'],
        pathParams: ['bindingId', 'instanceId', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__DeleteBindingResponse>(
            parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.get
     * @desc GetBinding returns the binding information.
     * @alias
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bindingId The binding id.
     * @param {string} params.instanceId Instance id to which the binding is bound.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId Plan id.
     * @param {string=} params.serviceId Service id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get,
        options?: MethodOptions):
        AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>;
    get(params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>): void;
    get(params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>): void;
    get(callback: BodyResponseCallback<
        Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>): void;
    get(paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>):
        void|AxiosPromise<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/service_bindings/{+bindingId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent', 'instanceId', 'bindingId'],
        pathParams: ['bindingId', 'instanceId', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__GetBindingResponse>(
            parameters);
      }
    }


    /**
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation
     * @desc Returns the state of the last operation for the binding. Only last
     * (or current) operation can be polled.
     * @alias
     * servicebroker.projects.brokers.v2.service_instances.service_bindings.getLast_operation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.bindingId The binding id for which to return the last operation
     * @param {string} params.instanceId The instance id that the binding is bound to.
     * @param {string=} params.operation If `operation` was returned during mutation operation, this field must be populated with the provided value.
     * @param {string} params.parent Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     * @param {string=} params.planId Plan id.
     * @param {string=} params.serviceId Service id.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getLast_operation(
        params?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__Operation>;
    getLast_operation(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation,
        options: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>): void;
    getLast_operation(
        params:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation,
        callback: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>): void;
    getLast_operation(callback: BodyResponseCallback<
                      Schema$GoogleCloudServicebrokerV1alpha1__Operation>):
        void;
    getLast_operation(
        paramsOrCallback?:
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation|
        BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>,
        callback?: BodyResponseCallback<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>):
        void|AxiosPromise<Schema$GoogleCloudServicebrokerV1alpha1__Operation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v1alpha1/{+parent}/v2/service_instances/{+instanceId}/service_bindings/{+bindingId}/last_operation')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['parent', 'instanceId', 'bindingId'],
        pathParams: ['bindingId', 'instanceId', 'parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleCloudServicebrokerV1alpha1__Operation>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$GoogleCloudServicebrokerV1alpha1__Operation>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the binding. Must be unique within GCP project. Maximum length
     * is 64, GUID recommended. Required.
     */
    binding_id?: string;
    /**
     * The service instance to which to bind.
     */
    instanceId?: string;
    /**
     * The GCP container. Must match
     * `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleCloudServicebrokerV1alpha1__Binding;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * See CreateServiceInstanceRequest for details.
     */
    acceptsIncomplete?: boolean;
    /**
     * The id of the binding to delete.
     */
    bindingId?: string;
    /**
     * The service instance id that deleted binding is bound to.
     */
    instanceId?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * The plan id of the service instance.
     */
    planId?: string;
    /**
     * Additional query parameter hints. The service id of the service instance.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The binding id.
     */
    bindingId?: string;
    /**
     * Instance id to which the binding is bound.
     */
    instanceId?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * Plan id.
     */
    planId?: string;
    /**
     * Service id.
     */
    serviceId?: string;
  }
  export interface Params$Resource$Projects$Brokers$V2$Service_instances$Service_bindings$Getlast_operation {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The binding id for which to return the last operation
     */
    bindingId?: string;
    /**
     * The instance id that the binding is bound to.
     */
    instanceId?: string;
    /**
     * If `operation` was returned during mutation operation, this field must be
     * populated with the provided value.
     */
    operation?: string;
    /**
     * Parent must match `projects/[PROJECT_ID]/brokers/[BROKER_ID]`.
     */
    parent?: string;
    /**
     * Plan id.
     */
    planId?: string;
    /**
     * Service id.
     */
    serviceId?: string;
  }



  export class Resource$V1alpha1 {
    root: Servicebroker;
    constructor(root: Servicebroker) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * servicebroker.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty
     * policy if the resource exists and does not have a policy set.
     * @alias servicebroker.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?: Params$Resource$V1alpha1$Getiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$GoogleIamV1__Policy>;
    getIamPolicy(
        params: Params$Resource$V1alpha1$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
        callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
    getIamPolicy(
        params: Params$Resource$V1alpha1$Getiampolicy,
        callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
        void;
    getIamPolicy(
        paramsOrCallback?: Params$Resource$V1alpha1$Getiampolicy|
        BodyResponseCallback<Schema$GoogleIamV1__Policy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleIamV1__Policy>,
        callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
        void|AxiosPromise<Schema$GoogleIamV1__Policy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$V1alpha1$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1alpha1$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }


    /**
     * servicebroker.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces
     * any existing policy.
     * @alias servicebroker.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
        params?: Params$Resource$V1alpha1$Setiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$GoogleIamV1__Policy>;
    setIamPolicy(
        params: Params$Resource$V1alpha1$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$GoogleIamV1__Policy>,
        callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
    setIamPolicy(
        params: Params$Resource$V1alpha1$Setiampolicy,
        callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
        void;
    setIamPolicy(
        paramsOrCallback?: Params$Resource$V1alpha1$Setiampolicy|
        BodyResponseCallback<Schema$GoogleIamV1__Policy>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleIamV1__Policy>,
        callback?: BodyResponseCallback<Schema$GoogleIamV1__Policy>):
        void|AxiosPromise<Schema$GoogleIamV1__Policy> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$V1alpha1$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1alpha1$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__Policy>(parameters);
      }
    }


    /**
     * servicebroker.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.  Note: This operation is designed to
     * be used for building permission-aware UIs and command-line tools, not for
     * authorization checking. This operation may "fail open" without warning.
     * @alias servicebroker.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().GoogleIamV1__TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
        params?: Params$Resource$V1alpha1$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$V1alpha1$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
        callback: BodyResponseCallback<
            Schema$GoogleIamV1__TestIamPermissionsResponse>): void;
    testIamPermissions(
        params: Params$Resource$V1alpha1$Testiampermissions,
        callback: BodyResponseCallback<
            Schema$GoogleIamV1__TestIamPermissionsResponse>): void;
    testIamPermissions(callback: BodyResponseCallback<
                       Schema$GoogleIamV1__TestIamPermissionsResponse>): void;
    testIamPermissions(
        paramsOrCallback?: Params$Resource$V1alpha1$Testiampermissions|
        BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$GoogleIamV1__TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<
            Schema$GoogleIamV1__TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$GoogleIamV1__TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$V1alpha1$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$V1alpha1$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://servicebroker.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1alpha1/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$GoogleIamV1__TestIamPermissionsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$V1alpha1$Getiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$V1alpha1$Setiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__SetIamPolicyRequest;
  }
  export interface Params$Resource$V1alpha1$Testiampermissions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$GoogleIamV1__TestIamPermissionsRequest;
  }
}
