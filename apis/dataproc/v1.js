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
 * Google Cloud Dataproc API
 *
 * Manages Hadoop-based clusters and jobs on Google Cloud Platform.
 *
 * @example
 * var google = require('googleapis');
 * var dataproc = google.dataproc('v1');
 *
 * @namespace dataproc
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Dataproc
 */
function Dataproc(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.projects = {

    regions: {

      clusters: {

        /**
         * dataproc.projects.regions.clusters.create
         *
         * @desc Creates a cluster in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // TODO: Change placeholders below to appropriate parameter values for the 'create' method:
         *
         *     // * [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     resource: {},
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.clusters.create(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.clusters.create
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'region'],
            pathParams: ['projectId', 'region'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.clusters.patch
         *
         * @desc Updates a cluster in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project the cluster belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The cluster name.
         *     clusterName: "",
         *
         *     resource: {},
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.clusters.patch(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.clusters.patch
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project the cluster belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.clusterName [Required] The cluster name.
         * @param {string=} params.updateMask [Required] Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the update_mask parameter would be specified as config.worker_config.num_instances, and the `PATCH` request body would specify the new value, as follows: { "config":{ "workerConfig":{ "numInstances":"5" } } } Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be config.secondary_worker_config.num_instances, and the `PATCH` request body would be set as follows: { "config":{ "secondaryWorkerConfig":{ "numInstances":"5" } } } Note: Currently, config.worker_config.num_instances and config.secondary_worker_config.num_instances are the only fields that can be updated.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'clusterName'],
            pathParams: ['projectId', 'region', 'clusterName'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.clusters.delete
         *
         * @desc Deletes a cluster in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The cluster name.
         *     clusterName: "",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.clusters.delete(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.clusters.delete
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.clusterName [Required] The cluster name.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'clusterName'],
            pathParams: ['projectId', 'region', 'clusterName'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.clusters.get
         *
         * @desc Gets the resource representation for a cluster in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The cluster name.
         *     clusterName: "",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.clusters.get(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.clusters.get
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.clusterName [Required] The cluster name.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'clusterName'],
            pathParams: ['projectId', 'region', 'clusterName'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.clusters.list
         *
         * @desc Lists all regions/{region}/clusters in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
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
         *         dataproc.projects.regions.clusters.list(request, recur);
         *       }
         *     }
         *   };
         *
         *   dataproc.projects.regions.clusters.list(request, recur);
         * });
         *
         * @alias dataproc.projects.regions.clusters.list
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {integer=} params.pageSize The standard List page size.
         * @param {string=} params.pageToken The standard List page token.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'region'],
            pathParams: ['projectId', 'region'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.clusters.diagnose
         *
         * @desc Gets cluster diagnostic information. After the operation completes, the Operation.response field contains `DiagnoseClusterOutputLocation`.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // TODO: Change placeholders below to appropriate parameter values for the 'diagnose' method:
         *
         *     // * [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The cluster name.
         *     clusterName: "",
         *
         *     resource: {},
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.clusters.diagnose(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.clusters.diagnose
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the cluster belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.clusterName [Required] The cluster name.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        diagnose: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'clusterName'],
            pathParams: ['projectId', 'region', 'clusterName'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      jobs: {

        /**
         * dataproc.projects.regions.jobs.submit
         *
         * @desc Submits a job to a cluster.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // TODO: Change placeholders below to appropriate parameter values for the 'submit' method:
         *
         *     // * [Required] The ID of the Google Cloud Platform project that the job belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     resource: {},
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.jobs.submit(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.jobs.submit
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the job belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        submit: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs:submit',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'region'],
            pathParams: ['projectId', 'region'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.jobs.get
         *
         * @desc Gets the resource representation for a job in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project that the job belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The job ID.
         *     jobId: "",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.jobs.get(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.jobs.get
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the job belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.jobId [Required] The job ID.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'jobId'],
            pathParams: ['projectId', 'region', 'jobId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.jobs.list
         *
         * @desc Lists regions/{region}/jobs in a project.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project that the job belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
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
         *         dataproc.projects.regions.jobs.list(request, recur);
         *       }
         *     }
         *   };
         *
         *   dataproc.projects.regions.jobs.list(request, recur);
         * });
         *
         * @alias dataproc.projects.regions.jobs.list
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the job belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {integer=} params.pageSize [Optional] The number of results to return in each response.
         * @param {string=} params.pageToken [Optional] The page token, returned by a previous call, to request the next page of results.
         * @param {string=} params.clusterName [Optional] If set, the returned jobs list includes only jobs that were submitted to the named cluster.
         * @param {string=} params.jobStateMatcher [Optional] Specifies enumerated categories of jobs to list.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs',
              method: 'GET'
            },
            params: params,
            requiredParams: ['projectId', 'region'],
            pathParams: ['projectId', 'region'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.jobs.cancel
         *
         * @desc Starts a job cancellation request. To access the job resource after cancellation, call [regions/{region}/jobs.list](/dataproc/reference/rest/v1/projects.regions.jobs/list) or [regions/{region}/jobs.get](/dataproc/reference/rest/v1/projects.regions.jobs/get).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // TODO: Change placeholders below to appropriate parameter values for the 'cancel' method:
         *
         *     // * [Required] The ID of the Google Cloud Platform project that the job belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The job ID.
         *     jobId: "",
         *
         *     resource: {},
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.jobs.cancel(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.jobs.cancel
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the job belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.jobId [Required] The job ID.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel',
              method: 'POST'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'jobId'],
            pathParams: ['projectId', 'region', 'jobId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.jobs.delete
         *
         * @desc Deletes the job from the project. If the job is active, the delete fails, and the response returns `FAILED_PRECONDITION`.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * [Required] The ID of the Google Cloud Platform project that the job belongs to.
         *     projectId: "",
         *
         *     // * [Required] The Cloud Dataproc region in which to handle the request.
         *     region: "",
         *
         *     // * [Required] The job ID.
         *     jobId: "",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.jobs.delete(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.jobs.delete
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.projectId [Required] The ID of the Google Cloud Platform project that the job belongs to.
         * @param {string} params.region [Required] The Cloud Dataproc region in which to handle the request.
         * @param {string} params.jobId [Required] The job ID.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/projects/{projectId}/regions/{region}/jobs/{jobId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['projectId', 'region', 'jobId'],
            pathParams: ['projectId', 'region', 'jobId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      },

      operations: {

        /**
         * dataproc.projects.regions.operations.get
         *
         * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * The name of the operation resource.
         *     name: "projects/{MY-PROJECT}/regions/{MY-REGION}/operations/{MY-OPERATION}",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.operations.get(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.operations.get
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/{name}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.operations.list
         *
         * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * The name of the operation collection.
         *     name: "",
         *
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
         *         dataproc.projects.regions.operations.list(request, recur);
         *       }
         *     }
         *   };
         *
         *   dataproc.projects.regions.operations.list(request, recur);
         * });
         *
         * @alias dataproc.projects.regions.operations.list
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation collection.
         * @param {string=} params.filter The standard list filter.
         * @param {integer=} params.pageSize The standard list page size.
         * @param {string=} params.pageToken The standard list page token.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/{name}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.operations.cancel
         *
         * @desc Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // TODO: Change placeholders below to appropriate parameter values for the 'cancel' method:
         *
         *     // * The name of the operation resource to be cancelled.
         *     name: "projects/{MY-PROJECT}/regions/{MY-REGION}/operations/{MY-OPERATION}",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.operations.cancel(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.operations.cancel
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be cancelled.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/{name}:cancel',
              method: 'POST'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * dataproc.projects.regions.operations.delete
         *
         * @desc Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Google Cloud Dataproc API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/dataproc
         * // 2. This sample uses Application Default Credentials for authentication.
         * //    If not already done, install the gcloud CLI from
         * //    https://cloud.google.com/sdk/ and run
         * //    'gcloud auth application-default login'
         * // 3. Install the Node.js client library and Application Default Credentials
         * //    library by running 'npm install googleapis --save'
         * var google = require('googleapis');
         * var dataproc = google.dataproc('v1');
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
         *     // * The name of the operation resource to be deleted.
         *     name: "projects/{MY-PROJECT}/regions/{MY-REGION}/operations/{MY-OPERATION}",
         *
         *     // Auth client
         *     auth: authClient
         *   };
         *
         *   dataproc.projects.regions.operations.delete(request, function(err, result) {
         *     if (err) {
         *       console.log(err);
         *     } else {
         *       console.log(result);
         *     }
         *   });
         * });
         *
         * @alias dataproc.projects.regions.operations.delete
         * @memberOf! dataproc(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the operation resource to be deleted.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://dataproc.googleapis.com/v1/{name}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    }
  };
}

module.exports = Dataproc;
