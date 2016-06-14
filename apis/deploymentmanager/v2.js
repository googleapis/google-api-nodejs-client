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
 * Google Cloud Deployment Manager API
 *
 * Declares, configures, and deploys complex solutions on Google Cloud Platform.
 *
 * @example
 * var google = require('googleapis');
 * var deploymentmanager = google.deploymentmanager('v2');
 *
 * @namespace deploymentmanager
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Deploymentmanager
 */
function Deploymentmanager(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.deployments = {

    /**
     * deploymentmanager.deployments.cancelPreview
     *
     * @desc Cancels and removes the preview currently associated with the deployment.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'cancelPreview' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.cancelPreview(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.cancelPreview
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelPreview: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/cancelPreview',
          method: 'POST'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'delete' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.delete
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
          method: 'DELETE'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.get
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.insert
     *
     * @desc Creates a deployment and all of the resources described by the deployment manifest.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insert' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.insert
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.preview If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments',
          method: 'POST'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         deploymentmanager.deployments.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   deploymentmanager.deployments.list(request, recur);
     * });
     *
     * @alias deploymentmanager.deployments.list
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments',
          method: 'GET'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'patch' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.patch
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
     * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.stop
     *
     * @desc Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'stop' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.stop(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.stop
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stop: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/stop',
          method: 'POST'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * deploymentmanager.deployments.update
     *
     * @desc Updates a deployment and all of the resources described by the deployment manifest.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'update' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.deployments.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.deployments.update
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.createPolicy Sets the policy to use for creating new resources.
     * @param {string=} params.deletePolicy Sets the policy to use for deleting resources.
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {boolean=} params.preview If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it.
     * @param {string} params.project The project ID for this request.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}',
          method: 'PUT'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     // The name of the manifest for this request.
     *     manifest: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.manifests.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.manifests.get
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.manifest The name of the manifest for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests/{manifest}',
          method: 'GET'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         deploymentmanager.manifests.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   deploymentmanager.manifests.list(request, recur);
     * });
     *
     * @alias deploymentmanager.manifests.list
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests',
          method: 'GET'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the operation for this request.
     *     operation: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.operations.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.operations.get
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.operation The name of the operation for this request.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/operations/{operation}',
          method: 'GET'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         deploymentmanager.operations.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   deploymentmanager.operations.list(request, recur);
     * });
     *
     * @alias deploymentmanager.operations.list
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/operations',
          method: 'GET'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'get' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     // The name of the resource for this request.
     *     resource_: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   deploymentmanager.resources.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias deploymentmanager.resources.get
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string} params.project The project ID for this request.
     * @param {string} params.resource_ The name of the resource for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources/{resource}',
          method: 'GET'
        },
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
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // The name of the deployment for this request.
     *     deployment: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         deploymentmanager.resources.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   deploymentmanager.resources.list(request, recur);
     * });
     *
     * @alias deploymentmanager.resources.list
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.deployment The name of the deployment for this request.
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project', 'deployment'],
        pathParams: ['deployment', 'project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.types = {

    /**
     * deploymentmanager.types.list
     *
     * @desc Lists all resource types for Deployment Manager.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the Google Cloud Deployment Manager API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/deploymentmanager_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var deploymentmanager = google.deploymentmanager('v2');
     *
     * google.auth.getApplicationDefault(function(err, authClient) {
     *   if (err) {
     *     console.log('Authentication failed because of ', err);
     *     return;
     *   }
     *   if (authClient.createScopedRequired && authClient.createScopedRequired()) {
     *     var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
     *     authClient = authClient.createScoped(scopes);
     *   }
     *
     *   var request = {
     *     // TODO: Change placeholders below to appropriate parameter values for the 'list' method:
     *
     *     // The project ID for this request.
     *     project: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *
     *   var recur = function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *       if (result.nextPageToken) {
     *         request.pageToken = result.nextPageToken;
     *         deploymentmanager.types.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   deploymentmanager.types.list(request, recur);
     * });
     *
     * @alias deploymentmanager.types.list
     * @memberOf! deploymentmanager(v2)
     *
     * @param {object} params Parameters for request
     * @param {string=} params.filter Sets a filter expression for filtering listed resources, in the form filter={expression}. Your {expression} must be in the format: field_name comparison_string literal_string.  The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The literal value must match the entire field.  For example, to filter for instances that do not have a name of example-instance, you would use filter=name ne example-instance.  Compute Engine Beta API Only: When filtering in the Beta API, you can also filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering on nested fields to take advantage of labels to organize and search for results based on label values.  The Beta API also supports filtering on multiple expressions by providing each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
     * @param {integer=} params.maxResults The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a nextPageToken that can be used to get the next page of results in subsequent list requests.
     * @param {string=} params.pageToken Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
     * @param {string} params.project The project ID for this request.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/deploymentmanager/v2/projects/{project}/global/types',
          method: 'GET'
        },
        params: params,
        requiredParams: ['project'],
        pathParams: ['project'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Deploymentmanager;
