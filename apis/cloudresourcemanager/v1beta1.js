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
 * @classdesc The Google Cloud Resource Manager API provides methods for creating, reading, and updating of project metadata, including IAM policies, and will shortly provide the same for other high-level entities (e.g. customers and resource groups). Longer term, we expect the cloudresourcemanager API to encompass other Cloud resources as well.
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
     * @param  {string=} params.filter - An expression for filtering the results of the request. Filter rules are case insensitive. The fields eligible for filtering are: name id labels. where  is a the name of a label Examples: name:* ==> The project has a name. name:Howl ==> The project’s name is `Howl` or 'howl'. name:HOWL ==> Equivalent to above. NAME:howl ==> Equivalent to above. labels.color:* ==> The project has the label "color". labels.color:red ==> The project’s label `color` has the value `red`. labels.color:red label.size:big ==> The project's label `color` has the value `red` and its label `size` has the value `big`. Optional.
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
     * @desc Marks the project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the project if it has a lifecycle state of [ACTIVE][cloudresourcemanager.projects.v1beta2.LifecycleState.ACTIVE] when this method is called. Otherwise this method does nothing (since all other states are phases of deletion). This method changes the project's lifecycle state from [ACTIVE][cloudresourcemanager.projects.v1beta2.LifecycleState.ACTIVE] to [DELETE_REQUESTED] [cloudresourcemanager.projects.v1beta2.LifecycleState.DELETE_REQUESTED]. The deletion starts at an unspecified time, at which point the lifecycle state changes to [DELETE_IN_PROGRESS] [cloudresourcemanager.projects.v1beta2.LifecycleState.DELETE_IN_PROGRESS]. Until the deletion completes, you can check the lifecycle state checked by retrieving the project with [GetProject] [cloudresourcemanager.projects.v1beta2.Projects.GetProject], and the project remains visible to [ListProjects] [cloudresourcemanager.projects.v1beta2.Projects.ListProjects]. However, you cannot update the project. After the deletion completes, the project is not retrievable by the [GetProject] [cloudresourcemanager.projects.v1beta2.Projects.GetProject] and [ListProjects] [cloudresourcemanager.projects.v1beta2.Projects.ListProjects] methods. The caller must have modify permissions for this project.
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
     * @desc Restores the project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a project that has a lifecycle state of [DELETE_REQUESTED] [cloudresourcemanager.projects.v1beta2.LifecycleState.DELETE_REQUESTED]. After deletion starts, as indicated by a lifecycle state of [DELETE_IN_PROGRESS] [cloudresourcemanager.projects.v1beta2.LifecycleState.DELETE_IN_PROGRESS], the project cannot be restored. The caller must have modify permissions for this project.
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
    }

  };
}

/**
 * Exports Cloudresourcemanager object
 * @type Cloudresourcemanager
 */
module.exports = Cloudresourcemanager;