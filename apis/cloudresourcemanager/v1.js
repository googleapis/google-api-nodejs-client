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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
 *
 * @example
 * var google = require('googleapis');
 * var cloudresourcemanager = google.cloudresourcemanager('v1');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    /**
     * cloudresourcemanager.projects.get
     *
     * @desc Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have read permissions for this Project.
     *
     * @alias cloudresourcemanager.projects.get
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`). Required.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{projectId}',
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
     * cloudresourcemanager.projects.list
     *
     * @desc Lists Projects that are visible to the user and satisfy the specified filter. This method returns Projects in an unspecified order. New Projects do not necessarily appear at the end of the list.
     *
     * @alias cloudresourcemanager.projects.list
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListProjects that indicates from where listing should continue. Optional.
     * @param {integer=} params.pageSize The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default. Optional.
     * @param {string=} params.filter An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: + `name` + `id` + labels.key where *key* is the name of a label Some examples of using labels as filters: |Filter|Description| |------|-----------| |name:*|The project has a name.| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red label.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`. Optional.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects',
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
     * cloudresourcemanager.projects.update
     *
     * @desc Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`). The caller must have modify permissions for this Project.
     *
     * @alias cloudresourcemanager.projects.update
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `my-project-123`). Required.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{projectId}',
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
     * @desc Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if the following criteria are met: + The Project does not have a billing account associated with it. + The Project has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the lifecycle state changes to DELETE_IN_PROGRESS. Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project. After the deletion completes, the Project is not retrievable by the GetProject and ListProjects methods. The caller must have modify permissions for this Project.
     *
     * @alias cloudresourcemanager.projects.delete
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `foo-bar-123`). Required.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{projectId}',
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
     * @desc Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, as indicated by a lifecycle state of DELETE_IN_PROGRESS, the Project cannot be restored. The caller must have modify permissions for this Project.
     *
     * @alias cloudresourcemanager.projects.undelete
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `foo-bar-123`). Required.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{projectId}:undelete',
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
     * @desc Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist.
     *
     * @alias cloudresourcemanager.projects.getIamPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `getIamPolicy` documentation.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{resource}:getIamPolicy',
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
     * @desc Sets the IAM access control policy for the specified Project. Replaces any existing policy. The following constraints apply when using `setIamPolicy()`: + Project currently supports only `user:{emailid}` and `serviceAccount:{emailid}` members in a `Binding` of a `Policy`. + To be added as an `owner`, a user must be invited via Cloud Platform console and must accept the invitation. + Members cannot be added to more than one role in the same policy. + There must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to to remove the last ToS-accepted owner from the policy will fail. + Calling this method requires enabling the App Engine Admin API. Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles.
     *
     * @alias cloudresourcemanager.projects.setIamPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `setIamPolicy` documentation.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{resource}:setIamPolicy',
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
     * @desc Returns permissions that a caller has on the specified Project.
     *
     * @alias cloudresourcemanager.projects.testIamPermissions
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. `resource` is usually specified as a path, such as `projects/xprojectx/zones/xzonex/disks/xdisk*`. The format for the path specified in this value is resource specific and is specified in the `testIamPermissions` documentation.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://cloudresourcemanager.googleapis.com/v1/projects/{resource}:testIamPermissions',
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

module.exports = Cloudresourcemanager;
