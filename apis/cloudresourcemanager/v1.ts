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

import createAPIRequest from '../../lib/apirequest';

/**
 * Google Cloud Resource Manager API
 *
 * The Google Cloud Resource Manager API provides methods for creating, reading, and updating project metadata.
 *
 * @example
 * const google = require('googleapis');
 * const cloudresourcemanager = google.cloudresourcemanager('v1');
 *
 * @namespace cloudresourcemanager
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Cloudresourcemanager
 */
function Cloudresourcemanager(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.folders = {

    /**
     * cloudresourcemanager.folders.clearOrgPolicy
     *
     * @desc Clears a `Policy` from a resource.
     *
     * @alias cloudresourcemanager.folders.clearOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource for the `Policy` to clear.
     * @param {cloudresourcemanager(v1).ClearOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:clearOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.folders.setOrgPolicy
     *
     * @desc Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist.  Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     *
     * @alias cloudresourcemanager.folders.setOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Resource name of the resource to attach the `Policy`.
     * @param {cloudresourcemanager(v1).SetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:setOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.folders.listAvailableOrgPolicyConstraints
     *
     * @desc Lists `Constraints` that could be applied on the specified resource.
     *
     * @alias cloudresourcemanager.folders.listAvailableOrgPolicyConstraints
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list `Constraints` for.
     * @param {cloudresourcemanager(v1).ListAvailableOrgPolicyConstraintsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listAvailableOrgPolicyConstraints: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:listAvailableOrgPolicyConstraints').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.folders.listOrgPolicies
     *
     * @desc Lists all the `Policies` set for a particular resource.
     *
     * @alias cloudresourcemanager.folders.listOrgPolicies
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list Policies for.
     * @param {cloudresourcemanager(v1).ListOrgPoliciesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOrgPolicies: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:listOrgPolicies').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.folders.getOrgPolicy
     *
     * @desc Gets a `Policy` on a resource.  If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     *
     * @alias cloudresourcemanager.folders.getOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource the `Policy` is set on.
     * @param {cloudresourcemanager(v1).GetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.folders.getEffectiveOrgPolicy
     *
     * @desc Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources.
     *
     * @alias cloudresourcemanager.folders.getEffectiveOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ The name of the resource to start computing the effective `Policy`.
     * @param {cloudresourcemanager(v1).GetEffectiveOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEffectiveOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getEffectiveOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.projects = {

    /**
     * cloudresourcemanager.projects.getIamPolicy
     *
     * @desc Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist.  Authorization requires the Google IAM permission `resourcemanager.projects.getIamPolicy` on the project
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // `resource` is usually specified as a path. For example, a Project
     *     // resource is specified as `projects/{project}`.
     *     resource_: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.getIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.getIamPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {cloudresourcemanager(v1).GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.getOrgPolicy
     *
     * @desc Gets a `Policy` on a resource.  If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     *
     * @alias cloudresourcemanager.projects.getOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource the `Policy` is set on.
     * @param {cloudresourcemanager(v1).GetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.getEffectiveOrgPolicy
     *
     * @desc Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources.
     *
     * @alias cloudresourcemanager.projects.getEffectiveOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ The name of the resource to start computing the effective `Policy`.
     * @param {cloudresourcemanager(v1).GetEffectiveOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEffectiveOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getEffectiveOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.undelete
     *
     * @desc Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored.  The caller must have modify permissions for this Project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project ID (for example, `foo-bar-123`).
     *     // Required.
     *     projectId: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.undelete(request, function(err) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.undelete
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `foo-bar-123`).  Required.
     * @param {cloudresourcemanager(v1).UndeleteProjectRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    undelete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{projectId}:undelete').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
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
     * @desc Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`).  The caller must have modify permissions for this Project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body. All existing properties
     *       // will be replaced.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.update(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.update
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The project ID (for example, `my-project-123`).  Required.
     * @param {cloudresourcemanager(v1).Project} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{projectId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
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
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     auth: authClient
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     var projectsPage = response['projects'];
     *     if (!projectsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < projectsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `projectsPage`:
     *       console.log(JSON.stringify(projectsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudResourceManager.projects.list(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.projects.list(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.list
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter An expression for filtering the results of the request.  Filter rules are case insensitive. The fields eligible for filtering are:  + `name` + `id` + <code>labels.<em>key</em></code> where *key* is the name of a label  Some examples of using labels as filters:  |Filter|Description| |------|-----------| |name:how*|The project's name starts with "how".| |name:Howl|The project's name is `Howl` or `howl`.| |name:HOWL|Equivalent to above.| |NAME:howl|Equivalent to above.| |labels.color:*|The project has the label `color`.| |labels.color:red|The project's label `color` has the value `red`.| |labels.color:red&nbsp;labels.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`.  If you specify a filter that has both `parent.type` and `parent.id`, then the `resourcemanager.projects.list` permission is checked on the parent. If the user has this permission, all projects under the parent will be returned after remaining filters have been applied. If the user lacks this permission, then all projects for which the user has the `resourcemanager.projects.get` permission will be returned after remaining filters have been applied. If no filter is specified, the call will return projects for which the user has `resourcemanager.projects.get` permissions.  Optional.
     * @param {string=} params.pageToken A pagination token returned from a previous call to ListProjects that indicates from where listing should continue.  Optional.
     * @param {integer=} params.pageSize The maximum number of Projects to return in the response. The server can return fewer Projects than requested. If unspecified, server picks an appropriate default.  Optional.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.setOrgPolicy
     *
     * @desc Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist.  Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     *
     * @alias cloudresourcemanager.projects.setOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Resource name of the resource to attach the `Policy`.
     * @param {cloudresourcemanager(v1).SetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:setOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.create
     *
     * @desc Request that a new Project be created. The result is an Operation which can be used to track the creation process. It is automatically deleted after a few hours, so there is no need to call DeleteOperation.  Our SLO permits Project creation to take up to 30 seconds at the 90th percentile. As of 2016-08-29, we are observing 6 seconds 50th percentile latency. 95th percentile latency is around 11 seconds. We recommend polling at the 5th second with an exponential backoff.  Authorization requires the Google IAM permission `resourcemanager.projects.create` on the specified parent for the new project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.create(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.create
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {cloudresourcemanager(v1).Project} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.listOrgPolicies
     *
     * @desc Lists all the `Policies` set for a particular resource.
     *
     * @alias cloudresourcemanager.projects.listOrgPolicies
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list Policies for.
     * @param {cloudresourcemanager(v1).ListOrgPoliciesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOrgPolicies: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:listOrgPolicies').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.get
     *
     * @desc Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`).  The caller must have read permissions for this Project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: '',  // TODO: Update placeholder value.
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.get(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.get
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{projectId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.getAncestry
     *
     * @desc Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`).  The caller must have read permissions for this Project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `my-project-123`).
     *     // Required.
     *     projectId: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.getAncestry(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.getAncestry
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `my-project-123`).  Required.
     * @param {cloudresourcemanager(v1).GetAncestryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getAncestry: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{projectId}:getAncestry').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified Project.  There are no permissions required for making this API call.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // `resource` is usually specified as a path. For example, a Project
     *     // resource is specified as `projects/{project}`.
     *     resource_: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.testIamPermissions(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.testIamPermissions
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {cloudresourcemanager(v1).TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.delete
     *
     * @desc Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if the following criteria are met:  + The Project does not have a billing account associated with it. + The Project has a lifecycle state of ACTIVE.  This method changes the Project's lifecycle state from ACTIVE to DELETE_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible.  Until the deletion completes, you can check the lifecycle state checked by retrieving the Project with GetProject, and the Project remains visible to ListProjects. However, you cannot update the project.  After the deletion completes, the Project is not retrievable by the  GetProject and ListProjects methods.  The caller must have modify permissions for this Project.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The Project ID (for example, `foo-bar-123`).
     *     // Required.
     *     projectId: '',  // TODO: Update placeholder value.
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.delete(request, function(err) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.delete
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId The Project ID (for example, `foo-bar-123`).  Required.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{projectId}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.clearOrgPolicy
     *
     * @desc Clears a `Policy` from a resource.
     *
     * @alias cloudresourcemanager.projects.clearOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource for the `Policy` to clear.
     * @param {cloudresourcemanager(v1).ClearOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:clearOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
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
     * @desc Sets the IAM access control policy for the specified Project. Replaces any existing policy.  The following constraints apply when using `setIamPolicy()`:  + Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`.  + The owner role can be granted only to `user` and `serviceAccount`.  + Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation.  + A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation.  + Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console.  + Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected.  + If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified.  + Calling this method requires enabling the App Engine Admin API.  Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles.  Authorization requires the Google IAM permission `resourcemanager.projects.setIamPolicy` on the project
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // `resource` is usually specified as a path. For example, a Project
     *     // resource is specified as `projects/{project}`.
     *     resource_: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.projects.setIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.projects.setIamPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {cloudresourcemanager(v1).SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/projects/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.projects.listAvailableOrgPolicyConstraints
     *
     * @desc Lists `Constraints` that could be applied on the specified resource.
     *
     * @alias cloudresourcemanager.projects.listAvailableOrgPolicyConstraints
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list `Constraints` for.
     * @param {cloudresourcemanager(v1).ListAvailableOrgPolicyConstraintsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listAvailableOrgPolicyConstraints: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:listAvailableOrgPolicyConstraints').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.organizations = {

    /**
     * cloudresourcemanager.organizations.getIamPolicy
     *
     * @desc Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. "organizations/123".  Authorization requires the Google IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being requested.
     *     // `resource` is usually specified as a path. For example, a Project
     *     // resource is specified as `projects/{project}`.
     *     resource_: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.organizations.getIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.organizations.getIamPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {cloudresourcemanager(v1).GetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.search
     *
     * @desc Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results.  Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   var handlePage = function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     var organizationsPage = response['organizations'];
     *     if (!organizationsPage) {
     *       return;
     *     }
     *     for (var i = 0; i < organizationsPage.length; i++) {
     *       // TODO: Change code below to process each resource in `organizationsPage`:
     *       console.log(JSON.stringify(organizationsPage[i], null, 2));
     *     }
     *
     *     if (response.nextPageToken) {
     *       request.pageToken = response.nextPageToken;
     *       cloudResourceManager.organizations.search(request, handlePage);
     *     }
     *   };
     *
     *   cloudResourceManager.organizations.search(request, handlePage);
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.organizations.search
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {cloudresourcemanager(v1).SearchOrganizationsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    search: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/organizations:search').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.getOrgPolicy
     *
     * @desc Gets a `Policy` on a resource.  If no `Policy` is set on the resource, a `Policy` is returned with default values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The `etag` value can be used with `SetOrgPolicy()` to create or update a `Policy` during read-modify-write.
     *
     * @alias cloudresourcemanager.organizations.getOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource the `Policy` is set on.
     * @param {cloudresourcemanager(v1).GetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.get
     *
     * @desc Fetches an Organization resource identified by the specified resource name.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The resource name of the Organization to fetch, e.g. "organizations/1234".
     *     name: '',  // TODO: Update placeholder value.
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.organizations.get(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.organizations.get
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The resource name of the Organization to fetch, e.g. "organizations/1234".
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.getEffectiveOrgPolicy
     *
     * @desc Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources.
     *
     * @alias cloudresourcemanager.organizations.getEffectiveOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ The name of the resource to start computing the effective `Policy`.
     * @param {cloudresourcemanager(v1).GetEffectiveOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getEffectiveOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:getEffectiveOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
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
     * @desc Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. "organizations/123".  There are no permissions required for making this API call.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy detail is being requested.
     *     // `resource` is usually specified as a path. For example, a Project
     *     // resource is specified as `projects/{project}`.
     *     resource_: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.organizations.testIamPermissions(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.organizations.testIamPermissions
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {cloudresourcemanager(v1).TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.clearOrgPolicy
     *
     * @desc Clears a `Policy` from a resource.
     *
     * @alias cloudresourcemanager.organizations.clearOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource for the `Policy` to clear.
     * @param {cloudresourcemanager(v1).ClearOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    clearOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:clearOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.setOrgPolicy
     *
     * @desc Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist.  Not supplying an `etag` on the request `Policy` results in an unconditional write of the `Policy`.
     *
     * @alias cloudresourcemanager.organizations.setOrgPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Resource name of the resource to attach the `Policy`.
     * @param {cloudresourcemanager(v1).SetOrgPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setOrgPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:setOrgPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.setIamPolicy
     *
     * @desc Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. "organizations/123".  Authorization requires the Google IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // REQUIRED: The resource for which the policy is being specified.
     *     // `resource` is usually specified as a path. For example, a Project
     *     // resource is specified as `projects/{project}`.
     *     resource_: '',  // TODO: Update placeholder value.
     *
     *     resource: {
     *       // TODO: Add desired properties to the request body.
     *     },
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.organizations.setIamPolicy(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.organizations.setIamPolicy
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {cloudresourcemanager(v1).SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.listAvailableOrgPolicyConstraints
     *
     * @desc Lists `Constraints` that could be applied on the specified resource.
     *
     * @alias cloudresourcemanager.organizations.listAvailableOrgPolicyConstraints
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list `Constraints` for.
     * @param {cloudresourcemanager(v1).ListAvailableOrgPolicyConstraintsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listAvailableOrgPolicyConstraints: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:listAvailableOrgPolicyConstraints').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.organizations.listOrgPolicies
     *
     * @desc Lists all the `Policies` set for a particular resource.
     *
     * @alias cloudresourcemanager.organizations.listOrgPolicies
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ Name of the resource to list Policies for.
     * @param {cloudresourcemanager(v1).ListOrgPoliciesRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listOrgPolicies: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{resource}:listOrgPolicies').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operations = {

    /**
     * cloudresourcemanager.operations.get
     *
     * @desc Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.
     *
     * @example
     * // BEFORE RUNNING:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Resource Manager API
     * //    and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/cloudresourcemanager
     * // 2. This sample uses Application Default Credentials for authentication.
     * //    If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk and run
     * //    `gcloud beta auth application-default login`.
     * //    For more information, see
     * //    https://developers.google.com/identity/protocols/application-default-credentials
     * // 3. Install the Node.js client library by running
     * //    `npm install googleapis --save`
     *
     * var google = require('googleapis');
     * var cloudResourceManager = google.cloudresourcemanager('v1');
     *
     * authorize(function(authClient) {
     *   var request = {
     *     // The name of the operation resource.
     *     name: '',  // TODO: Update placeholder value.
     *
     *     auth: authClient
     *   };
     *
     *   cloudResourceManager.operations.get(request, function(err, response) {
     *     if (err) {
     *       console.log(err);
     *       return;
     *     }
     *
     *     // TODO: Change code below to process the `response` object:
     *     console.log(JSON.stringify(response, null, 2));
     *   });
     * });
     *
     * function authorize(callback) {
     *   google.auth.getApplicationDefault(function(err, authClient)) {
     *     if (err) {
     *       console.log('authentication failed: ', err);
     *       return;
     *     }
     *     if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *       var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *       authClient = authClient.createScoped(scopes);
     *     }
     *     callback(authClient);
     *   });
     * }
     *
     * @alias cloudresourcemanager.operations.get
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the operation resource.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.liens = {

    /**
     * cloudresourcemanager.liens.delete
     *
     * @desc Delete a Lien by `name`.  Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
     *
     * @alias cloudresourcemanager.liens.delete
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name/identifier of the Lien to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.liens.list
     *
     * @desc List all Liens applied to the `parent` resource.  Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.
     *
     * @alias cloudresourcemanager.liens.list
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.pageToken The `next_page_token` value returned from a previous List request, if any.
     * @param {integer=} params.pageSize The maximum number of items to return. This is a suggestion for the server.
     * @param {string=} params.parent The name of the resource to list all attached Liens. For example, `projects/1234`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/liens').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * cloudresourcemanager.liens.create
     *
     * @desc Create a Lien which applies to the resource denoted by the `parent` field.  Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`.  NOTE: Some resources may limit the number of Liens which may be applied.
     *
     * @alias cloudresourcemanager.liens.create
     * @memberOf! cloudresourcemanager(v1)
     *
     * @param {object} params Parameters for request
     * @param {cloudresourcemanager(v1).Lien} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://cloudresourcemanager.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/v1/liens').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef SearchOrganizationsResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} nextPageToken A pagination token to be used to retrieve the next page of results. If the
result is too large to fit within the page size specified in the request,
this field will be set with a token that can be used to fetch the next page
of results. If this field is empty, it indicates that this response
contains the last page of results.
* @property {cloudresourcemanager(v1).Organization[]} organizations The list of Organizations that matched the search query, possibly
paginated.
*/
/**
 * @typedef ListOrgPoliciesResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {cloudresourcemanager(v1).OrgPolicy[]} policies The `Policies` that are set on the resource. It will be empty if no
`Policies` are set.
* @property {string} nextPageToken Page token used to retrieve the next page. This is currently not used, but
the server may at any point start supplying a valid token.
*/
/**
 * @typedef FolderOperationError
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {string} errorMessageId The type of operation error experienced.
 */
/**
 * @typedef BooleanPolicy
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {boolean} enforced If `true`, then the `Policy` is enforced. If `false`, then any
configuration is acceptable.

Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess`
with `constraint_default` set to `ALLOW`. A `Policy` for that
`Constraint` exhibits the following behavior:
  - If the `Policy` at this resource has enforced set to `false`, serial
    port connection attempts will be allowed.
  - If the `Policy` at this resource has enforced set to `true`, serial
    port connection attempts will be refused.
  - If the `Policy` at this resource is `RestoreDefault`, serial port
    connection attempts will be allowed.
  - If no `Policy` is set at this resource or anywhere higher in the
    resource hierarchy, serial port connection attempts will be allowed.
  - If no `Policy` is set at this resource, but one exists higher in the
    resource hierarchy, the behavior is as if the`Policy` were set at
    this resource.

The following examples demonstrate the different possible layerings:

Example 1 (nearest `Constraint` wins):
  `organizations/foo` has a `Policy` with:
    {enforced: false}
  `projects/bar` has no `Policy` set.
The constraint at `projects/bar` and `organizations/foo` will not be
enforced.

Example 2 (enforcement gets replaced):
  `organizations/foo` has a `Policy` with:
    {enforced: false}
  `projects/bar` has a `Policy` with:
    {enforced: true}
The constraint at `organizations/foo` is not enforced.
The constraint at `projects/bar` is enforced.

Example 3 (RestoreDefault):
  `organizations/foo` has a `Policy` with:
    {enforced: true}
  `projects/bar` has a `Policy` with:
    {RestoreDefault: {}}
The constraint at `organizations/foo` is enforced.
The constraint at `projects/bar` is not enforced, because
`constraint_default` for the `Constraint` is `ALLOW`.
*/
/**
 * @typedef OrgPolicy
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {integer} version Version of the `Policy`. Default version is 0;
* @property {cloudresourcemanager(v1).RestoreDefault} restoreDefault Restores the default behavior of the constraint; independent of
`Constraint` type.
* @property {cloudresourcemanager(v1).ListPolicy} listPolicy List of values either allowed or disallowed.
* @property {string} etag An opaque tag indicating the current version of the `Policy`, used for
concurrency control.

When the `Policy` is returned from either a `GetPolicy` or a
`ListOrgPolicy` request, this `etag` indicates the version of the current
`Policy` to use when executing a read-modify-write loop.

When the `Policy` is returned from a `GetEffectivePolicy` request, the
`etag` will be unset.

When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value
that was returned from a `GetOrgPolicy` request as part of a
read-modify-write loop for concurrency control. Not setting the `etag`in a
`SetOrgPolicy` request will result in an unconditional write of the
`Policy`.
* @property {string} constraint The name of the `Constraint` the `Policy` is configuring, for example,
`constraints/serviceuser.services`.

Immutable after creation.
* @property {cloudresourcemanager(v1).BooleanPolicy} booleanPolicy For boolean `Constraints`, whether to enforce the `Constraint` or not.
* @property {string} updateTime The time stamp the `Policy` was previously updated. This is set by the
server, not specified by the caller, and represents the last time a call to
`SetOrgPolicy` was made for that `Policy`. Any value set by the client will
be ignored.
*/
/**
 * @typedef Lien
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} parent A reference to the resource this Lien is attached to. The server will
validate the parent against those for which Liens are supported.

Example: `projects/1234`
* @property {string} createTime The creation time of this Lien.
* @property {string} name A system-generated unique identifier for this Lien.

Example: `liens/1234abcd`
* @property {string} reason Concise user-visible strings indicating why an action cannot be performed
on a resource. Maximum lenth of 200 characters.

Example: &#39;Holds production API key&#39;
* @property {string} origin A stable, user-visible/meaningful string identifying the origin of the
Lien, intended to be inspected programmatically. Maximum length of 200
characters.

Example: &#39;compute.googleapis.com&#39;
* @property {string[]} restrictions The types of operations which should be blocked as a result of this Lien.
Each value should correspond to an IAM permission. The server will
validate the permissions against those for which Liens are supported.

An empty list is meaningless and will be rejected.

Example: [&#39;resourcemanager.projects.delete&#39;]
*/
/**
 * @typedef Ancestor
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {cloudresourcemanager(v1).ResourceId} resourceId Resource id of the ancestor.
 */
/**
 * @typedef ListConstraint
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} suggestedValue Optional. The Google Cloud Console will try to default to a configuration
that matches the value specified in this `Constraint`.
*/
/**
 * @typedef SetOrgPolicyRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {cloudresourcemanager(v1).OrgPolicy} policy `Policy` to set on the resource.
 */
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {cloudresourcemanager(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of
the policy is limited to a few 10s of KB. An empty policy is a
valid policy but certain Cloud Platform services (such as Projects)
might reject them.
* @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
the fields in the mask will be modified. If no mask is provided, the
following default mask is used:
paths: &quot;bindings, etag&quot;
This field is only used by Cloud IAM.
*/
/**
 * @typedef Empty
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 */
/**
 * @typedef Organization
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} name Output Only. The resource name of the organization. This is the
organization&#39;s relative path in the API. Its format is
&quot;organizations/[organization_id]&quot;. For example, &quot;organizations/1234&quot;.
* @property {string} displayName A friendly string to be used to refer to the Organization in the UI.
Assigned by the server, set to the primary domain of the G Suite
customer that owns the organization.
@OutputOnly
* @property {string} creationTime Timestamp when the Organization was created. Assigned by the server.
@OutputOnly
* @property {string} lifecycleState The organization&#39;s current lifecycle state. Assigned by the server.
@OutputOnly
* @property {cloudresourcemanager(v1).OrganizationOwner} owner The owner of this Organization. The owner should be specified on
creation. Once set, it cannot be changed.
This field is required.
*/
/**
 * @typedef ListAvailableOrgPolicyConstraintsResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {cloudresourcemanager(v1).Constraint[]} constraints The collection of constraints that are settable on the request resource.
 * @property {string} nextPageToken Page token used to retrieve the next page. This is currently not used.
 */
/**
 * @typedef ListPolicy
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} allValues The policy all_values state.
* @property {string[]} allowedValues List of values allowed  at this resource. Can only be set if no values
are set for `denied_values` and `all_values` is set to
`ALL_VALUES_UNSPECIFIED`.
* @property {boolean} inheritFromParent Determines the inheritance behavior for this `Policy`.

By default, a `ListPolicy` set at a resource supercedes any `Policy` set
anywhere up the resource hierarchy. However, if `inherit_from_parent` is
set to `true`, then the values from the effective `Policy` of the parent
resource are inherited, meaning the values set in this `Policy` are
added to the values inherited up the hierarchy.

Setting `Policy` hierarchies that inherit both allowed values and denied
values isn&#39;t recommended in most circumstances to keep the configuration
simple and understandable. However, it is possible to set a `Policy` with
`allowed_values` set that inherits a `Policy` with `denied_values` set.
In this case, the values that are allowed must be in `allowed_values` and
not present in `denied_values`.

For example, suppose you have a `Constraint`
`constraints/serviceuser.services`, which has a `constraint_type` of
`list_constraint`, and with `constraint_default` set to `ALLOW`.
Suppose that at the Organization level, a `Policy` is applied that
restricts the allowed API activations to {`E1`, `E2`}. Then, if a
`Policy` is applied to a project below the Organization that has
`inherit_from_parent` set to `false` and field all_values set to DENY,
then an attempt to activate any API will be denied.

The following examples demonstrate different possible layerings:

Example 1 (no inherited values):
  `organizations/foo` has a `Policy` with values:
    {allowed_values: “E1” allowed_values:”E2”}
  ``projects/bar`` has `inherit_from_parent` `false` and values:
    {allowed_values: &quot;E3&quot; allowed_values: &quot;E4&quot;}
The accepted values at `organizations/foo` are `E1`, `E2`.
The accepted values at `projects/bar` are `E3`, and `E4`.

Example 2 (inherited values):
  `organizations/foo` has a `Policy` with values:
    {allowed_values: “E1” allowed_values:”E2”}
  `projects/bar` has a `Policy` with values:
    {value: “E3” value: ”E4” inherit_from_parent: true}
The accepted values at `organizations/foo` are `E1`, `E2`.
The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`.

Example 3 (inheriting both allowed and denied values):
  `organizations/foo` has a `Policy` with values:
    {allowed_values: &quot;E1&quot; allowed_values: &quot;E2&quot;}
  `projects/bar` has a `Policy` with:
    {denied_values: &quot;E1&quot;}
The accepted values at `organizations/foo` are `E1`, `E2`.
The value accepted at `projects/bar` is `E2`.

Example 4 (RestoreDefault):
  `organizations/foo` has a `Policy` with values:
    {allowed_values: “E1” allowed_values:”E2”}
  `projects/bar` has a `Policy` with values:
    {RestoreDefault: {}}
The accepted values at `organizations/foo` are `E1`, `E2`.
The accepted values at `projects/bar` are either all or none depending on
the value of `constraint_default` (if `ALLOW`, all; if
`DENY`, none).

Example 5 (no policy inherits parent policy):
  `organizations/foo` has no `Policy` set.
  `projects/bar` has no `Policy` set.
The accepted values at both levels are either all or none depending on
the value of `constraint_default` (if `ALLOW`, all; if
`DENY`, none).

Example 6 (ListConstraint allowing all):
  `organizations/foo` has a `Policy` with values:
    {allowed_values: “E1” allowed_values: ”E2”}
  `projects/bar` has a `Policy` with:
    {all: ALLOW}
The accepted values at `organizations/foo` are `E1`, E2`.
Any value is accepted at `projects/bar`.

Example 7 (ListConstraint allowing none):
  `organizations/foo` has a `Policy` with values:
    {allowed_values: “E1” allowed_values: ”E2”}
  `projects/bar` has a `Policy` with:
    {all: DENY}
The accepted values at `organizations/foo` are `E1`, E2`.
No value is accepted at `projects/bar`.
* @property {string} suggestedValue Optional. The Google Cloud Console will try to default to a configuration
that matches the value specified in this `Policy`. If `suggested_value`
is not set, it will inherit the value specified higher in the hierarchy,
unless `inherit_from_parent` is `false`.
* @property {string[]} deniedValues List of values denied at this resource. Can only be set if no values are
set for `allowed_values` and `all_values` is set to
`ALL_VALUES_UNSPECIFIED`.
*/
/**
 * @typedef GetAncestryResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {cloudresourcemanager(v1).Ancestor[]} ancestor Ancestors are ordered from bottom to top of the resource hierarchy. The
first ancestor is the project itself, followed by the project&#39;s parent,
etc.
*/
/**
 * @typedef AuditLogConfig
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of
permission.
Follows the same format of Binding.members.
* @property {string} logType The log type that this config enables.
*/
/**
 * @typedef SearchOrganizationsRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} pageToken A pagination token returned from a previous call to `SearchOrganizations`
that indicates from where listing should continue.
This field is optional.
* @property {integer} pageSize The maximum number of Organizations to return in the response.
This field is optional.
* @property {string} filter An optional query string used to filter the Organizations to return in
the response. Filter rules are case-insensitive.


Organizations may be filtered by `owner.directoryCustomerId` or by
`domain`, where the domain is a Google for Work domain, for example:

|Filter|Description|
|------|-----------|
|owner.directorycustomerid:123456789|Organizations with
`owner.directory_customer_id` equal to `123456789`.|
|domain:google.com|Organizations corresponding to the domain `google.com`.|

This field is optional.
*/
/**
 * @typedef GetAncestryRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 */
/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with
wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more
information see
[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
*/
/**
 * @typedef FolderOperation
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} operationType The type of this operation.
* @property {string} sourceParent The resource name of the folder&#39;s parent.
Only applicable when the operation_type is MOVE.
* @property {string} displayName The display name of the folder.
* @property {string} destinationParent The resource name of the folder or organization we are either creating
the folder under or moving the folder to.
*/
/**
 * @typedef Policy
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} etag `etag` is used for optimistic concurrency control as a way to help
prevent simultaneous updates of a policy from overwriting each other.
It is strongly suggested that systems make use of the `etag` in the
read-modify-write cycle to perform policy updates in order to avoid race
conditions: An `etag` is returned in the response to `getIamPolicy`, and
systems are expected to put that etag in the request to `setIamPolicy` to
ensure that their change will be applied to the same version of the policy.

If no `etag` is provided in the call to `setIamPolicy`, then the existing
policy is overwritten blindly.
* @property {integer} version Version of the `Policy`. The default version is 0.
* @property {cloudresourcemanager(v1).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
* @property {cloudresourcemanager(v1).Binding[]} bindings Associates a list of `members` to a `role`.
`bindings` with no members will result in an error.
*/
/**
 * @typedef ListAvailableOrgPolicyConstraintsRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} pageToken Page token used to retrieve the next page. This is currently unsupported
and will be ignored. The server may at any point start using this field.
* @property {integer} pageSize Size of the pages to be returned. This is currently unsupported and will
be ignored. The server may at any point start using this field to limit
page size.
*/
/**
 * @typedef ResourceId
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} type Required field representing the resource type this id is for.
At present, the valid types are: &quot;organization&quot;
* @property {string} id Required field for the type-specific id. This should correspond to the id
used in the type-specific API&#39;s.
*/
/**
 * @typedef GetEffectiveOrgPolicyRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {string} constraint The name of the `Constraint` to compute the effective `Policy`.
 */
/**
 * @typedef ListOrgPoliciesRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} pageToken Page token used to retrieve the next page. This is currently unsupported
and will be ignored. The server may at any point start using this field.
* @property {integer} pageSize Size of the pages to be returned. This is currently unsupported and will
be ignored. The server may at any point start using this field to limit
page size.
*/
/**
 * @typedef AuditConfig
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} service Specifies a service that will be enabled for audit logging.
For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
`allServices` is a special value that covers all services.
* @property {cloudresourcemanager(v1).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission.
Next ID: 4
*/
/**
 * @typedef Operation
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {boolean} done If the value is `false`, it means the operation is still in progress.
If true, the operation is completed, and either `error` or `response` is
available.
* @property {object} response The normal response of the operation in case of success.  If the original
method returns no data on success, such as `Delete`, the response is
`google.protobuf.Empty`.  If the original method is standard
`Get`/`Create`/`Update`, the response should be the resource.  For other
methods, the response should have the type `XxxResponse`, where `Xxx`
is the original method name.  For example, if the original method name
is `TakeSnapshot()`, the inferred response type is
`TakeSnapshotResponse`.
* @property {string} name The server-assigned name, which is only unique within the same service that
originally returns it. If you use the default HTTP mapping, the
`name` should have the format of `operations/some/unique/name`.
* @property {cloudresourcemanager(v1).Status} error The error result of the operation in case of failure or cancellation.
* @property {object} metadata Service-specific metadata associated with the operation.  It typically
contains progress information and common metadata such as create time.
Some services might not provide such metadata.  Any method that returns a
long-running operation should document the metadata type, if any.
*/
/**
 * @typedef Constraint
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} displayName The human readable name.

Mutable.
* @property {string} description Detailed description of what this `Constraint` controls as well as how and
where it is enforced.

Mutable.
* @property {cloudresourcemanager(v1).BooleanConstraint} booleanConstraint Defines this constraint as being a BooleanConstraint.
* @property {string} constraintDefault The evaluation behavior of this constraint in the absense of &#39;Policy&#39;.
* @property {string} name Immutable value, required to globally be unique. For example,
`constraints/serviceuser.services`
* @property {cloudresourcemanager(v1).ListConstraint} listConstraint Defines this constraint as being a ListConstraint.
* @property {integer} version Version of the `Constraint`. Default version is 0;
*/
/**
 * @typedef ListLiensResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} nextPageToken Token to retrieve the next page of results, or empty if there are no more
results in the list.
* @property {cloudresourcemanager(v1).Lien[]} liens A list of Liens.
*/
/**
 * @typedef Status
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
*/
/**
 * @typedef Binding
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource.
`members` can have the following values:

* `allUsers`: A special identifier that represents anyone who is
   on the internet; with or without a Google account.

* `allAuthenticatedUsers`: A special identifier that represents anyone
   who is authenticated with a Google account or a service account.

* `user:{emailid}`: An email address that represents a specific Google
   account. For example, `alice@gmail.com` or `joe@example.com`.


* `serviceAccount:{emailid}`: An email address that represents a service
   account. For example, `my-other-app@appspot.gserviceaccount.com`.

* `group:{emailid}`: An email address that represents a Google group.
   For example, `admins@example.com`.


* `domain:{domain}`: A Google Apps domain name that represents all the
   users of that domain. For example, `google.com` or `example.com`.


* @property {string} role Role that is assigned to `members`.
For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
Required
*/
/**
 * @typedef GetOrgPolicyRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {string} constraint Name of the `Constraint` to get the `Policy`.
 */
/**
 * @typedef RestoreDefault
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 */
/**
 * @typedef ClearOrgPolicyRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string} etag The current version, for concurrency control. Not sending an `etag`
will cause the `Policy` to be cleared blindly.
* @property {string} constraint Name of the `Constraint` of the `Policy` to clear.
*/
/**
 * @typedef UndeleteProjectRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 */
/**
 * @typedef ProjectCreationStatus
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {boolean} ready True if the project creation process is complete.
* @property {boolean} gettable True if the project can be retrieved using GetProject. No other operations
on the project are guaranteed to work until the project creation is
complete.
* @property {string} createTime Creation time of the project creation workflow.
*/
/**
 * @typedef BooleanConstraint
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 */
/**
 * @typedef GetIamPolicyRequest
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is
allowed.
*/
/**
 * @typedef OrganizationOwner
 * @memberOf! cloudresourcemanager(v1)
 * @type object
 * @property {string} directoryCustomerId The Google for Work customer id used in the Directory API.
 */
/**
 * @typedef ListProjectsResponse
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {cloudresourcemanager(v1).Project[]} projects The list of Projects that matched the list filter. This list can
be paginated.
* @property {string} nextPageToken Pagination token.

If the result set is too large to fit in a single response, this token
is returned. It encodes the position of the current result cursor.
Feeding this value into a new list request with the `page_token` parameter
gives the next page of the results.

When `next_page_token` is not filled in, there is no next page and
the list returned is the last page in the result set.

Pagination tokens have a limited lifetime.
*/
/**
 * @typedef Project
 * @memberOf! cloudresourcemanager(v1)
 * @type object
* @property {cloudresourcemanager(v1).ResourceId} parent An optional reference to a parent Resource.

The only supported parent type is &quot;organization&quot;. Once set, the parent
cannot be modified. The `parent` can be set on creation or using the
`UpdateProject` method; the end user must have the
`resourcemanager.projects.create` permission on the parent.

Read-write.
* @property {string} createTime Creation time.

Read-only.
* @property {object} labels The labels associated with this Project.

Label keys must be between 1 and 63 characters long and must conform
to the following regular expression: \[a-z\](\[-a-z0-9\]*\[a-z0-9\])?.

Label values must be between 0 and 63 characters long and must conform
to the regular expression (\[a-z\](\[-a-z0-9\]*\[a-z0-9\])?)?.

No more than 256 labels can be associated with a given resource.

Clients should store labels in a representation such as JSON that does not
depend on specific characters being disallowed.

Example: &lt;code&gt;&quot;environment&quot; : &quot;dev&quot;&lt;/code&gt;
Read-write.
* @property {string} name The user-assigned display name of the Project.
It must be 4 to 30 characters.
Allowed characters are: lowercase and uppercase letters, numbers,
hyphen, single-quote, double-quote, space, and exclamation point.

Example: &lt;code&gt;My Project&lt;/code&gt;
Read-write.
* @property {string} projectId The unique, user-assigned ID of the Project.
It must be 6 to 30 lowercase letters, digits, or hyphens.
It must start with a letter.
Trailing hyphens are prohibited.

Example: &lt;code&gt;tokyo-rain-123&lt;/code&gt;
Read-only after creation.
* @property {string} lifecycleState The Project lifecycle state.

Read-only.
* @property {string} projectNumber The number uniquely identifying the project.

Example: &lt;code&gt;415104041262&lt;/code&gt;
Read-only.
*/
export = Cloudresourcemanager;
