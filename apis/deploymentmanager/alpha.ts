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

import {
  createAPIRequest
} from '../../lib/apirequest';

/**
 * Google Cloud Deployment Manager Alpha API
 *
 * The Deployment Manager API allows users to declaratively configure, deploy and run complex solutions on the Google Cloud Platform.
 *
 * @example
 * const google = require('googleapis');
 * const deploymentmanager = google.deploymentmanager('alpha');
 *
 * @namespace deploymentmanager
 * @type {Function}
 * @version alpha
 * @variation alpha
 * @param {object=} options Options for Deploymentmanager
 */
function Deploymentmanager(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.compositeTypes = {

    /**
     * deploymentmanager.compositeTypes.delete
     *
     * @desc Deletes a composite type.
     *
     * @alias deploymentmanager.compositeTypes.delete
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.compositeType The name of the type for this request.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.compositeTypes.get
     *
     * @desc Gets information about a specific composite type.
     *
     * @alias deploymentmanager.compositeTypes.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.compositeType The name of the composite type for this request.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.compositeTypes.insert
     *
     * @desc Creates a composite type.
     *
     * @alias deploymentmanager.compositeTypes.insert
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).CompositeType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/compositeTypes').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.compositeTypes.list
     *
     * @desc Lists all composite types for Deployment Manager.
     *
     * @alias deploymentmanager.compositeTypes.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/compositeTypes').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.compositeTypes.patch
     *
     * @desc Updates a composite type. This method supports patch semantics.
     *
     * @alias deploymentmanager.compositeTypes.patch
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.compositeType The name of the composite type for this request.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).CompositeType} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.compositeTypes.update
     *
     * @desc Updates a composite type.
     *
     * @alias deploymentmanager.compositeTypes.update
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.compositeType The name of the composite type for this request.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).CompositeType} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['project', 'compositeType'],
        pathParams: ['compositeType', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.deployments = {

    /**
     * deploymentmanager.deployments.cancelPreview
     *
     * @desc Cancels and removes the preview currently associated with the deployment.
     *
     * @alias deploymentmanager.deployments.cancelPreview
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).DeploymentsCancelPreviewRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelPreview: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/cancelPreview').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.delete
     *
     * @desc Deletes a deployment and all of the resources in the deployment.
     *
     * @alias deploymentmanager.deployments.delete
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.get
     *
     * @desc Gets information about a specific deployment.
     *
     * @alias deploymentmanager.deployments.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.getIamPolicy
     *
     * @desc Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     *
     * @alias deploymentmanager.deployments.getIamPolicy
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.insert
     *
     * @desc Creates a deployment and all of the resources described by the deployment manifest.
     *
     * @alias deploymentmanager.deployments.insert
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.preview If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).Deployment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.list
     *
     * @desc Lists all deployments for a given project.
     *
     * @alias deploymentmanager.deployments.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.patch
     *
     * @desc Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
     *
     * @alias deploymentmanager.deployments.patch
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
     * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).Deployment} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.setIamPolicy
     *
     * @desc Sets the access control policy on the specified resource. Replaces any existing policy.
     *
     * @alias deploymentmanager.deployments.setIamPolicy
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {deploymentmanager(alpha).Policy} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.stop
     *
     * @desc Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
     *
     * @alias deploymentmanager.deployments.stop
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).DeploymentsStopRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/stop').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.testIamPermissions
     *
     * @desc Returns permissions that a caller has on the specified resource.
     *
     * @alias deploymentmanager.deployments.testIamPermissions
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project Project ID for this request.
     * @param {string} params.resource_ Name of the resource for this request.
     * @param {deploymentmanager(alpha).TestPermissionsRequest} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project', 'resource'],
        pathParams: ['project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.update
     *
     * @desc Updates a deployment and all of the resources described by the deployment manifest.
     *
     * @alias deploymentmanager.deployments.update
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
     * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).Deployment} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.manifests = {

    /**
     * deploymentmanager.manifests.get
     *
     * @desc Gets information about a specific manifest.
     *
     * @alias deploymentmanager.manifests.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.manifest The name of the manifest for this request.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/manifests/{manifest}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment', 'manifest'],
        pathParams: ['deployment', 'manifest', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.manifests.list
     *
     * @desc Lists all manifests for a given deployment.
     *
     * @alias deploymentmanager.manifests.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/manifests').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.operations = {

    /**
     * deploymentmanager.operations.get
     *
     * @desc Gets information about a specific operation.
     *
     * @alias deploymentmanager.operations.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation The name of the operation for this request.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/operations/{operation}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'operation'],
        pathParams: ['operation', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.operations.list
     *
     * @desc Lists all operations for a project.
     *
     * @alias deploymentmanager.operations.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/operations').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.resources = {

    /**
     * deploymentmanager.resources.get
     *
     * @desc Gets information about a single resource.
     *
     * @alias deploymentmanager.resources.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {string} params.resource_ The name of the resource for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources/{resource}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment', 'resource'],
        pathParams: ['deployment', 'project', 'resource'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.resources.list
     *
     * @desc Lists all resources in a given deployment.
     *
     * @alias deploymentmanager.resources.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.typeProviders = {

    /**
     * deploymentmanager.typeProviders.delete
     *
     * @desc Deletes a type provider.
     *
     * @alias deploymentmanager.typeProviders.delete
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.get
     *
     * @desc Gets information about a specific type provider.
     *
     * @alias deploymentmanager.typeProviders.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.getType
     *
     * @desc Gets a type info for a type provided by a TypeProvider.
     *
     * @alias deploymentmanager.typeProviders.getType
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type provider for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getType: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types/{type}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'typeProvider', 'type'],
        pathParams: ['project', 'type', 'typeProvider'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.insert
     *
     * @desc Creates a type provider.
     *
     * @alias deploymentmanager.typeProviders.insert
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).TypeProvider} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.list
     *
     * @desc Lists all resource type providers for Deployment Manager.
     *
     * @alias deploymentmanager.typeProviders.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.listTypes
     *
     * @desc Lists all the type info for a TypeProvider.
     *
     * @alias deploymentmanager.typeProviders.listTypes
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listTypes: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.patch
     *
     * @desc Updates a type provider. This method supports patch semantics.
     *
     * @alias deploymentmanager.typeProviders.patch
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
     * @param {deploymentmanager(alpha).TypeProvider} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.typeProviders.update
     *
     * @desc Updates a type provider.
     *
     * @alias deploymentmanager.typeProviders.update
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.typeProvider The name of the type provider for this request.
     * @param {deploymentmanager(alpha).TypeProvider} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['project', 'typeProvider'],
        pathParams: ['project', 'typeProvider'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.types = {

    /**
     * deploymentmanager.types.delete
     *
     * @desc Deletes a type and all of the resources in the type.
     *
     * @alias deploymentmanager.types.delete
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/types/{type}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'DELETE'
        }, options),
        params: params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.types.get
     *
     * @desc Gets information about a specific type.
     *
     * @alias deploymentmanager.types.get
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/types/{type}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.types.insert
     *
     * @desc Creates a type.
     *
     * @alias deploymentmanager.types.insert
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {deploymentmanager(alpha).Type} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/types').replace(/([^:]\/)\/+/g, '$1'),
          method: 'POST'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.types.list
     *
     * @desc Lists all resource types for Deployment Manager.
     *
     * @alias deploymentmanager.types.list
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.  You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
     * @param {string=} params.orderBy Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.  You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first.  Currently, only sorting by name or creationTimestamp desc is supported.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/types').replace(/([^:]\/)\/+/g, '$1'),
          method: 'GET'
        }, options),
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.types.patch
     *
     * @desc Updates a type. This method supports patch semantics.
     *
     * @alias deploymentmanager.types.patch
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
     * @param {deploymentmanager(alpha).Type} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options || (options = {});

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/types/{type}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PATCH'
        }, options),
        params: params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.types.update
     *
     * @desc Updates a type.
     *
     * @alias deploymentmanager.types.update
     * @memberOf! deploymentmanager(alpha)
     *
     * @param {object} params Parameters for request
     * @param {string} params.project The project ID for this request.
     * @param {string} params.type The name of the type for this request.
     * @param {deploymentmanager(alpha).Type} params.resource Request body data
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

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';

      const parameters = {
        options: Object.assign({
          url: (rootUrl + '/deploymentmanager/alpha/projects/{project}/global/types/{type}').replace(/([^:]\/)\/+/g, '$1'),
          method: 'PUT'
        }, options),
        params: params,
        requiredParams: ['project', 'type'],
        pathParams: ['project', 'type'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef AsyncOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} methodMatch Method regex where this policy will apply.
 * @property {deploymentmanager(alpha).PollingOptions} pollingOptions Deployment manager will poll instances for this API resource setting a RUNNING state, and blocking until polling conditions tell whether the resource is completed or failed.
 */

/**
 * @typedef AuditConfig
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission.
 * @property {string[]} exemptedMembers 
 * @property {string} service Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
 */

/**
 * @typedef AuditLogConfig
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][].
 * @property {string} logType The log type that this config enables.
 */

/**
 * @typedef AuthorizationLoggingOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} permissionType The type of the permission that was checked.
 */

/**
 * @typedef BasicAuth
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} password 
 * @property {string} user 
 */

/**
 * @typedef Binding
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {deploymentmanager(alpha).Expr} condition The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
* @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:

* `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account.

* `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account.

* `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`.



* `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`.

* `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`.



* `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
* @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
*/

/**
 * @typedef CollectionOverride
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} collection The collection that identifies this resource within its service.
 * @property {deploymentmanager(alpha).Options} options The options to apply to this resource-level override
 */

/**
 * @typedef CompositeType
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} description An optional textual description of the resource; provided by the client when the resource is created.
 * @property {string} id Output only. Unique identifier for the resource; defined by the server.
 * @property {string} insertTime Output only. Timestamp when the composite type was created, in RFC3339 text format.
 * @property {deploymentmanager(alpha).CompositeTypeLabelEntry[]} labels Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
 * @property {string} name Name of the composite type, must follow the expression: [a-z]([-a-z0-9_.]{0,61}[a-z0-9])?.
 * @property {deploymentmanager(alpha).Operation} operation Output only. The Operation that most recently ran, or is currently running, on this composite type.
 * @property {string} selfLink Output only. Self link for the type provider.
 * @property {string} status 
 * @property {deploymentmanager(alpha).TemplateContents} templateContents Files for the template type.
 */

/**
 * @typedef CompositeTypeLabelEntry
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef CompositeTypesListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).CompositeType[]} compositeTypes Output only. A list of resource composite types supported by Deployment Manager.
 * @property {string} nextPageToken A token used to continue a truncated list request.
 */

/**
 * @typedef Condition
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} iam Trusted attributes supplied by the IAM system.
 * @property {string} op An operator to apply the subject with.
 * @property {string} svc Trusted attributes discharged by the service.
 * @property {string} sys Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
 * @property {string} value DEPRECATED. Use &#39;values&#39; instead.
 * @property {string[]} values The objects of the condition. This is mutually exclusive with &#39;value&#39;.
 */

/**
 * @typedef ConfigFile
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} content The contents of the file.
 */

/**
 * @typedef ConfigurableService
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).CollectionOverride[]} collectionOverrides Allows resource handling overrides for specific collections
 * @property {deploymentmanager(alpha).Credential} credential Credential used when interacting with this type.
 * @property {string} descriptorUrl Descriptor Url for the this type.
 * @property {deploymentmanager(alpha).Options} options Options to apply when handling any resources in this service.
 */

/**
 * @typedef Credential
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).BasicAuth} basicAuth Basic Auth Credential, only used by TypeProvider.
 * @property {deploymentmanager(alpha).ServiceAccount} serviceAccount Service Account Credential, only used by Deployment.
 * @property {boolean} useProjectDefault Specify to use the project default credential, only supported by Deployment.
 */

/**
 * @typedef Deployment
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {deploymentmanager(alpha).Credential} credential User provided default credential for the deployment.
* @property {string} description An optional user-provided description of the deployment.
* @property {string} fingerprint Provides a fingerprint to use in requests to modify a deployment, such as update(), stop(), and cancelPreview() requests. A fingerprint is a randomly generated value that must be provided with update(), stop(), and cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that only one request happens at a time.

The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value, perform a get() request to a deployment.
* @property {string} id Output only. Unique identifier for the resource; defined by the server.
* @property {string} insertTime Output only. Timestamp when the deployment was created, in RFC3339 text format .
* @property {deploymentmanager(alpha).DeploymentLabelEntry[]} labels Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
* @property {string} manifest Output only. URL of the manifest representing the last manifest that was successfully deployed.
* @property {string} name Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
* @property {deploymentmanager(alpha).Operation} operation Output only. The Operation that most recently ran, or is currently running, on this deployment.
* @property {deploymentmanager(alpha).DeploymentOutputsEntry[]} outputs Output only. Map of outputs from the last manifest that deployed successfully.
* @property {string} selfLink Output only. Self link for the deployment.
* @property {deploymentmanager(alpha).TargetConfiguration} target [Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.
* @property {deploymentmanager(alpha).DeploymentUpdate} update Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.
*/

/**
 * @typedef DeploymentLabelEntry
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef DeploymentOutputsEntry
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef DeploymentUpdate
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).Credential} credential Output only. The user-provided default credential to use when deploying this preview.
 * @property {string} description Output only. An optional user-provided description of the deployment after the current update has been applied.
 * @property {deploymentmanager(alpha).DeploymentUpdateLabelEntry[]} labels Output only. Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
 * @property {string} manifest Output only. URL of the manifest representing the update configuration of this deployment.
 */

/**
 * @typedef DeploymentUpdateLabelEntry
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef DeploymentsCancelPreviewRequest
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {string} fingerprint Specifies a fingerprint for cancelPreview() requests. A fingerprint is a randomly generated value that must be provided in cancelPreview() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to cancel a preview, this would prevent one of the requests).

The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
*/

/**
 * @typedef DeploymentsListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).Deployment[]} deployments Output only. The deployments contained in this response.
 * @property {string} nextPageToken Output only. A token used to continue a truncated list request.
 */

/**
 * @typedef DeploymentsStopRequest
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {string} fingerprint Specifies a fingerprint for stop() requests. A fingerprint is a randomly generated value that must be provided in stop() requests to perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update request while another user attempts to stop an ongoing update request, this would prevent a collision).

The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint value, perform a get() request on the deployment.
*/

/**
 * @typedef Diagnostic
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} field JsonPath expression on the resource that if non empty, indicates that this field needs to be extracted as a diagnostic.
 * @property {string} level Level to record this diagnostic.
 */

/**
 * @typedef Expr
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {string} description An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
* @property {string} expression Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.
* @property {string} location An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
* @property {string} title An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
*/

/**
 * @typedef ImportFile
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} content The contents of the file.
 * @property {string} name The name of the file.
 */

/**
 * @typedef InputMapping
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} fieldName The name of the field that is going to be injected.
 * @property {string} location The location where this mapping applies.
 * @property {string} methodMatch Regex to evaluate on method to decide if input applies.
 * @property {string} value A jsonPath expression to select an element.
 */

/**
 * @typedef LogConfig
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).LogConfigCloudAuditOptions} cloudAudit Cloud audit options.
 * @property {deploymentmanager(alpha).LogConfigCounterOptions} counter Counter options.
 * @property {deploymentmanager(alpha).LogConfigDataAccessOptions} dataAccess Data access options.
 */

/**
 * @typedef LogConfigCloudAuditOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).AuthorizationLoggingOptions} authorizationLoggingOptions Information used by the Cloud Audit Logging pipeline.
 * @property {string} logName The log_name to populate in the Cloud Audit Record.
 */

/**
 * @typedef LogConfigCounterOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} field The field value to attribute.
 * @property {string} metric The metric to update.
 */

/**
 * @typedef LogConfigDataAccessOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} logMode Whether Gin logging should happen in a fail-closed manner at the caller. This is relevant only in the LocalIAM implementation, for now.
 */

/**
 * @typedef Manifest
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {deploymentmanager(alpha).ConfigFile} config Output only. The YAML configuration for this manifest.
* @property {string} expandedConfig Output only. The fully-expanded configuration file, including any templates and references.
* @property {string} id Output only. Unique identifier for the resource; defined by the server.
* @property {deploymentmanager(alpha).ImportFile[]} imports Output only. The imported files for this manifest.
* @property {string} insertTime Output only. Timestamp when the manifest was created, in RFC3339 text format.
* @property {string} layout Output only. The YAML layout for this manifest.
* @property {string} name Output only.

The name of the manifest.
* @property {string} selfLink Output only. Self link for the manifest.
*/

/**
 * @typedef ManifestsListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).Manifest[]} manifests Output only. Manifests contained in this list response.
 * @property {string} nextPageToken Output only. A token used to continue a truncated list request.
 */

/**
 * @typedef Operation
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} clientOperationId [Output Only] Reserved for future use.
 * @property {string} creationTimestamp [Deprecated] This field is deprecated.
 * @property {string} description [Output Only] A textual description of the operation, which is set when the operation is created.
 * @property {string} endTime [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
 * @property {object} error [Output Only] If errors are generated during processing of the operation, this field will be populated.
 * @property {string} httpErrorMessage [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
 * @property {integer} httpErrorStatusCode [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not found.
 * @property {string} id [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 * @property {string} insertTime [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
 * @property {string} kind [Output Only] Type of the resource. Always compute#operation for Operation resources.
 * @property {string} name [Output Only] Name of the resource.
 * @property {string} operationType [Output Only] The type of operation, such as insert, update, or delete, and so on.
 * @property {integer} progress [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation progresses.
 * @property {string} region [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
 * @property {string} selfLink [Output Only] Server-defined URL for the resource.
 * @property {string} startTime [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
 * @property {string} status [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
 * @property {string} statusMessage [Output Only] An optional textual description of the current status of the operation.
 * @property {string} targetId [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
 * @property {string} targetLink [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk that the snapshot was created from.
 * @property {string} user [Output Only] User who requested the operation, for example: user@example.com.
 * @property {object[]} warnings [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
 * @property {string} zone [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
 */

/**
 * @typedef OperationsListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} nextPageToken Output only. A token used to continue a truncated list request.
 * @property {deploymentmanager(alpha).Operation[]} operations Output only. Operations contained in this list response.
 */

/**
 * @typedef Options
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).AsyncOptions[]} asyncOptions Options regarding how to thread async requests.
 * @property {deploymentmanager(alpha).InputMapping[]} inputMappings The mappings that apply for requests.
 * @property {string} nameProperty The json path to the field in the resource JSON body into which the resource name should be mapped. Leaving this empty indicates that there should be no mapping performed.
 * @property {deploymentmanager(alpha).ValidationOptions} validationOptions Options for how to validate and process properties on a resource.
 */

/**
 * @typedef Policy
 * @memberOf! deploymentmanager(alpha)
 * @type object
* @property {deploymentmanager(alpha).AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
* @property {deploymentmanager(alpha).Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
* @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.

If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
* @property {boolean} iamOwned 
* @property {deploymentmanager(alpha).Rule[]} rules If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no rule applies, permission is denied.
* @property {integer} version Version of the `Policy`. The default version is 0.
*/

/**
 * @typedef PollingOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).Diagnostic[]} diagnostics An array of diagnostics to be collected by Deployment Manager, these diagnostics will be displayed to the user.
 * @property {string} failCondition JsonPath expression that determines if the request failed.
 * @property {string} finishCondition JsonPath expression that determines if the request is completed.
 * @property {string} pollingLink JsonPath expression that evaluates to string, it indicates where to poll.
 * @property {string} targetLink JsonPath expression, after polling is completed, indicates where to fetch the resource.
 */

/**
 * @typedef Resource
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).ResourceAccessControl} accessControl The Access Control Policy set on this resource.
 * @property {string} finalProperties Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.
 * @property {string} id Output only. Unique identifier for the resource; defined by the server.
 * @property {string} insertTime Output only. Timestamp when the resource was created or acquired, in RFC3339 text format .
 * @property {deploymentmanager(alpha).Credential} lastUsedCredential Output only. The last used credential that successfully created/updated the resource.
 * @property {string} manifest Output only. URL of the manifest representing the current configuration of this resource.
 * @property {string} name Output only. The name of the resource as it appears in the YAML config.
 * @property {string} properties Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.
 * @property {string} type Output only. The type of the resource, for example compute.v1.instance, or cloudfunctions.v1beta1.function.
 * @property {deploymentmanager(alpha).ResourceUpdate} update Output only. If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here.
 * @property {string} updateTime Output only. Timestamp when the resource was updated, in RFC3339 text format .
 * @property {string} url Output only. The URL of the actual resource.
 * @property {object[]} warnings Output only. If warning messages are generated during processing of this resource, this field will be populated.
 */

/**
 * @typedef ResourceAccessControl
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} gcpIamPolicy The GCP IAM Policy to set on the resource.
 */

/**
 * @typedef ResourceUpdate
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).ResourceAccessControl} accessControl The Access Control Policy to set on this resource after updating the resource itself.
 * @property {deploymentmanager(alpha).Credential} credential Output only. The credential that will be used creating/updating this resource.
 * @property {object} error Output only. If errors are generated during update of the resource, this field will be populated.
 * @property {string} finalProperties Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
 * @property {string} intent Output only. The intent of the resource: PREVIEW, UPDATE, or CANCEL.
 * @property {string} manifest Output only. URL of the manifest representing the update configuration of this resource.
 * @property {string} properties Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
 * @property {string} state Output only. The state of the resource.
 * @property {object[]} warnings Output only. If warning messages are generated during processing of this resource, this field will be populated.
 */

/**
 * @typedef ResourcesListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} nextPageToken A token used to continue a truncated list request.
 * @property {deploymentmanager(alpha).Resource[]} resources Resources contained in this list response.
 */

/**
 * @typedef Rule
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} action Required
 * @property {deploymentmanager(alpha).Condition[]} conditions Additional restrictions that must be met. All conditions must pass for the rule to match.
 * @property {string} description Human-readable description of the rule.
 * @property {string[]} ins If one or more &#39;in&#39; clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
 * @property {deploymentmanager(alpha).LogConfig[]} logConfigs The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
 * @property {string[]} notIns If one or more &#39;not_in&#39; clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
 * @property {string[]} permissions A permission is a string of form &#39;..&#39; (e.g., &#39;storage.buckets.list&#39;). A value of &#39;*&#39; matches all permissions, and a verb part of &#39;*&#39; (e.g., &#39;storage.buckets.*&#39;) matches all verbs.
 */

/**
 * @typedef ServiceAccount
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} email The IAM service account email address like test@myproject.iam.gserviceaccount.com
 */

/**
 * @typedef TargetConfiguration
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).ConfigFile} config The configuration to use for this deployment.
 * @property {deploymentmanager(alpha).ImportFile[]} imports Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in order to use the file in a template.
 */

/**
 * @typedef TemplateContents
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).ImportFile[]} imports Import files referenced by the main template.
 * @property {string} interpreter Which interpreter (python or jinja) should be used during expansion.
 * @property {string} mainTemplate The filename of the mainTemplate
 * @property {string} schema The contents of the template schema.
 * @property {string} template The contents of the main template file.
 */

/**
 * @typedef TestPermissionsRequest
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the &#39;resource&#39;. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
 */

/**
 * @typedef TestPermissionsResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */

/**
 * @typedef Type
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).ConfigurableService} configurableService Base Type (configurable service) that backs this Type.
 * @property {string} description An optional textual description of the resource; provided by the client when the resource is created.
 * @property {string} id Output only. Unique identifier for the resource; defined by the server.
 * @property {string} insertTime Output only. Timestamp when the type was created, in RFC3339 text format.
 * @property {deploymentmanager(alpha).TypeLabelEntry[]} labels Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
 * @property {string} name Name of the type.
 * @property {deploymentmanager(alpha).Operation} operation Output only. The Operation that most recently ran, or is currently running, on this type.
 * @property {string} selfLink Output only. Self link for the type.
 */

/**
 * @typedef TypeInfo
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} description The description of the type.
 * @property {string} documentationLink For swagger 2.0 externalDocs field will be used. For swagger 1.2 this field will be empty.
 * @property {string} kind Output only. Type of the output. Always deploymentManager#TypeInfo for TypeInfo.
 * @property {string} name The base type or composite type name.
 * @property {deploymentmanager(alpha).TypeInfoSchemaInfo} schema For base types with a collection, we return a schema and documentation link For template types, we return only a schema
 * @property {string} selfLink Output only. Server-defined URL for the resource.
 * @property {string} title The title on the API descriptor URL provided.
 */

/**
 * @typedef TypeInfoSchemaInfo
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} input The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4
 * @property {string} output The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4
 */

/**
 * @typedef TypeLabelEntry
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef TypeProvider
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {deploymentmanager(alpha).CollectionOverride[]} collectionOverrides Allows resource handling overrides for specific collections
 * @property {deploymentmanager(alpha).Credential} credential Credential used when interacting with this type.
 * @property {string} description An optional textual description of the resource; provided by the client when the resource is created.
 * @property {string} descriptorUrl Descriptor Url for the this type provider.
 * @property {string} id Output only. Unique identifier for the resource; defined by the server.
 * @property {string} insertTime Output only. Timestamp when the type provider was created, in RFC3339 text format.
 * @property {deploymentmanager(alpha).TypeProviderLabelEntry[]} labels Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?
 * @property {string} name Name of the type provider.
 * @property {deploymentmanager(alpha).Operation} operation Output only. The Operation that most recently ran, or is currently running, on this type provider.
 * @property {deploymentmanager(alpha).Options} options Options to apply when handling any resources in this service.
 * @property {string} selfLink Output only. Self link for the type provider.
 */

/**
 * @typedef TypeProviderLabelEntry
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} key 
 * @property {string} value 
 */

/**
 * @typedef TypeProvidersListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} nextPageToken A token used to continue a truncated list request.
 * @property {deploymentmanager(alpha).TypeProvider[]} typeProviders Output only. A list of resource type providers supported by Deployment Manager.
 */

/**
 * @typedef TypeProvidersListTypesResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} nextPageToken A token used to continue a truncated list request.
 * @property {deploymentmanager(alpha).TypeInfo[]} types Output only. A list of resource type info.
 */

/**
 * @typedef TypesListResponse
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} nextPageToken A token used to continue a truncated list request.
 * @property {deploymentmanager(alpha).Type[]} types Output only. A list of resource types supported by Deployment Manager.
 */

/**
 * @typedef ValidationOptions
 * @memberOf! deploymentmanager(alpha)
 * @type object
 * @property {string} schemaValidation Customize how deployment manager will validate the resource against schema errors.
 * @property {string} undeclaredProperties Specify what to do with extra properties when executing a request.
 */
export = Deploymentmanager;
