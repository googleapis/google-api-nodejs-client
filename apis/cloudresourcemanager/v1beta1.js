/**
 * Copyright 2014 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Resource Manager API
 *
 * @classdesc The Google Cloud Resource Manager API provides methods for creating, reading, and updating of project metadata.
 * @namespace cloudresourcemanager
 * @version  v1beta1
 * @variation v1beta1
 * @this Cloudresourcemanager
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) {

  var self = this;
  this._options = options || {};

  this.projects = {

    /**
     * cloudresourcemanager.projects.create
     *
     * @desc Creates a project resource. Initially, the project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the project. Several APIs are activated automatically for the project, including Google Cloud Storage.
     *
     * @alias cloudresourcemanager.projects.create
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    create: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.list
     *
     * @desc Lists projects that are visible to the user and satisfy the specified filter. This method returns projects in an unspecified order. New projects do not necessarily appear at the end of the list.
     *
     * @alias cloudresourcemanager.projects.list
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.pageToken - A pagination token returned from a previous call to ListProject that indicates from where listing should continue. Note: pagination is not yet supported; the server ignores this field. Optional.
     * @param  {integer=} params.pageSize - The maximum number of Projects to return in the response. The server can return fewer projects than requested. If unspecified, server picks an appropriate default. Note: pagination is not yet supported; the server ignores this field. Optional.
     * @param  {string=} params.filter - An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: + `name` + `id` + labels.key where *key* is the name of a label Some examples of using labels as filters: |Filter|Description| |------|-----------| |name:*|The project has a name.| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red label.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`. Optional.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.get
     *
     * @desc Retrieves the project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this project.
     *
     * @alias cloudresourcemanager.projects.get
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - The project ID (for example, `my-project-123`). Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.update
     *
     * @desc Updates the attributes of the project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this project.
     *
     * @alias cloudresourcemanager.projects.update
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - The project ID (for example, `my-project-123`). Required.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.delete
     *
     * @desc Marks the project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the project if the following criteria are met: + The project does not have a billing account associated with it. + The project has a lifecycle state of [ACTIVE][google.cloudresourcemanager.projects.v1beta1.LifecycleState.ACTIVE]. This method changes the project's lifecycle state from [ACTIVE][google.cloudresourcemanager.projects.v1beta1.LifecycleState.ACTIVE] to [DELETE_REQUESTED] [google.cloudresourcemanager.projects.v1beta1.LifecycleState.DELETE_REQUESTED]. The deletion starts at an unspecified time, at which point the lifecycle state changes to [DELETE_IN_PROGRESS] [google.cloudresourcemanager.projects.v1beta1.LifecycleState.DELETE_IN_PROGRESS]. Until the deletion completes, you can check the lifecycle state checked by retrieving the project with [GetProject] [google.cloudresourcemanager.projects.v1beta1.DeveloperProjects.GetProject], and the project remains visible to [ListProjects] [google.cloudresourcemanager.projects.v1beta1.DeveloperProjects.ListProjects]. However, you cannot update the project. After the deletion completes, the project is not retrievable by the [GetProject] [google.cloudresourcemanager.projects.v1beta1.DeveloperProjects.GetProject] and [ListProjects] [google.cloudresourcemanager.projects.v1beta1.DeveloperProjects.ListProjects] methods. The caller must have modify permissions for this project.
     *
     * @alias cloudresourcemanager.projects.delete
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - The project ID (for example, `foo-bar-123`). Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    delete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.undelete
     *
     * @desc Restores the project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a project that has a lifecycle state of [DELETE_REQUESTED] [google.cloudresourcemanager.projects.v1beta1.LifecycleState.DELETE_REQUESTED]. After deletion starts, as indicated by a lifecycle state of [DELETE_IN_PROGRESS] [google.cloudresourcemanager.projects.v1beta1.LifecycleState.DELETE_IN_PROGRESS], the project cannot be restored. The caller must have modify permissions for this project.
     *
     * @alias cloudresourcemanager.projects.undelete
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.projectId - The project ID (for example, `foo-bar-123`). Required.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{projectId}:undelete',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.getIamPolicy
     *
     * @desc Returns the IAM access control policy for specified project.
     *
     * @alias cloudresourcemanager.projects.getIamPolicy
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resource_ - REQUIRED: The resource for which policy is being requested. Resource is usually specified as a path, such as, `projects/{project}`.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{resource}:getIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.setIamPolicy
     *
     * @desc Sets the IAM access control policy for the specified project. We do not currently support 'domain:' prefixed members in a Binding of a Policy. Calling this method requires enabling the App Engine Admin API.
     *
     * @alias cloudresourcemanager.projects.setIamPolicy
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resource_ - REQUIRED: The resource for which policy is being specified. `resource` is usually specified as a path, such as, `projects/{project}/zones/{zone}/disks/{disk}`.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{resource}:setIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.testIamPermissions
     *
     * @desc Tests the specified permissions against the IAM access control policy for the specified project.
     *
     * @alias cloudresourcemanager.projects.testIamPermissions
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resource_ - REQUIRED: The resource for which policy detail is being requested. `resource` is usually specified as a path, such as, `projects/{project}`.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/projects/{resource}:testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  this.organizations = {

    /**
     * cloudresourcemanager.organizations.list
     *
     * @desc Query Organization resources.
     *
     * @alias cloudresourcemanager.organizations.list
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.pageSize - The maximum number of Organizations to return in the response. This field is optional.
     * @param  {string=} params.pageToken - A pagination token returned from a previous call to ListOrganizations that indicates from where listing should continue. This field is optional.
     * @param  {string=} params.filter - An optional query string used to filter the Organizations to be return in the response. Filter rules are case-insensitive. Organizations may be filtered by `owner.directoryCustomerId` or by `domain`, where the domain is a Google for Work domain, for example: |Filter|Description| |------|-----------| |owner.directorycustomerid:123456789|Organizations with `owner.directory_customer_id` equal to `123456789`.| |domain:google.com|Organizations corresponding to the domain `google.com`.| This field is optional.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.get
     *
     * @desc Fetches an Organization resource by id.
     *
     * @alias cloudresourcemanager.organizations.get
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.organizationId - The id of the Organization resource to fetch.
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations/{organizationId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['organizationId'],
        pathParams: ['organizationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.update
     *
     * @desc Updates an Organization resource.
     *
     * @alias cloudresourcemanager.organizations.update
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.organizationId - An immutable id for the Organization that is assigned on creation. This should be omitted when creating a new Organization. This field is read-only.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    update: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations/{organizationId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['organizationId'],
        pathParams: ['organizationId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.setIamPolicy
     *
     * @desc Sets the access control policy on a Organization resource. Replaces any existing policy.
     *
     * @alias cloudresourcemanager.organizations.setIamPolicy
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resource_ - REQUIRED: The resource for which policy is being specified. `resource` is usually specified as a path, such as, `projects/{project}/zones/{zone}/disks/{disk}`.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations/{resource}:setIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.getIamPolicy
     *
     * @desc Gets the access control policy for a Organization resource. May be empty if no such policy or resource exists.
     *
     * @alias cloudresourcemanager.organizations.getIamPolicy
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resource_ - REQUIRED: The resource for which policy is being requested. Resource is usually specified as a path, such as, `projects/{project}`.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations/{resource}:getIamPolicy',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified Organization.
     *
     * @alias cloudresourcemanager.organizations.testIamPermissions
     * @memberOf! cloudresourcemanager(v1beta1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.resource_ - REQUIRED: The resource for which policy detail is being requested. `resource` is usually specified as a path, such as, `projects/{project}`.
     * @param  {object} params.resource - Request body data
     * @param  {callback} callback - The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function(params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1beta1/organizations/{resource}:testIamPermissions',
          method: 'POST'
        },
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * Exports Cloudresourcemanager object
 * @type Cloudresourcemanager
 */
module.exports = Cloudresourcemanager;