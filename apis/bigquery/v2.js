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
 * BigQuery API
 *
 * A data platform for customers to create, manage, share and query data.
 *
 * @example
 * var google = require('googleapis');
 * var bigquery = google.bigquery('v2');
 *
 * @namespace bigquery
 * @type {Function}
 * @version v2
 * @variation v2
 * @param {object=} options Options for Bigquery
 */
function Bigquery(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.datasets = {

    /**
     * bigquery.datasets.delete
     *
     * @desc Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the dataset being deleted
     *     projectId: "",
     *     // Dataset ID of dataset being deleted
     *     datasetId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.datasets.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.datasets.delete
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of dataset being deleted
     * @param {boolean=} params.deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
     * @param {string} params.projectId Project ID of the dataset being deleted
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.datasets.get
     *
     * @desc Returns the dataset specified by datasetID.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the requested dataset
     *     projectId: "",
     *     // Dataset ID of the requested dataset
     *     datasetId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.datasets.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.datasets.get
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the requested dataset
     * @param {string} params.projectId Project ID of the requested dataset
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.datasets.insert
     *
     * @desc Creates a new empty dataset.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the new dataset
     *     projectId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.datasets.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.datasets.insert
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID of the new dataset
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets',
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
     * bigquery.datasets.list
     *
     * @desc Lists all datasets in the specified project to which you have been granted the READER dataset role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the datasets to be listed
     *     projectId: "",
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
     *         bigquery.datasets.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   bigquery.datasets.list(request, recur);
     * });
     *
     * @alias bigquery.datasets.list
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.all Whether to list all datasets, including hidden ones
     * @param {integer=} params.maxResults The maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId Project ID of the datasets to be listed
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets',
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
     * bigquery.datasets.patch
     *
     * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the dataset being updated
     *     projectId: "",
     *     // Dataset ID of the dataset being updated
     *     datasetId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.datasets.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.datasets.patch
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the dataset being updated
     * @param {string} params.projectId Project ID of the dataset being updated
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.datasets.update
     *
     * @desc Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the dataset being updated
     *     projectId: "",
     *     // Dataset ID of the dataset being updated
     *     datasetId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.datasets.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.datasets.update
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the dataset being updated
     * @param {string} params.projectId Project ID of the dataset being updated
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.jobs = {

    /**
     * bigquery.jobs.cancel
     *
     * @desc Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // [Required] Project ID of the job to cancel
     *     projectId: "",
     *     // [Required] Job ID of the job to cancel
     *     jobId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.jobs.cancel(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.jobs.cancel
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId [Required] Job ID of the job to cancel
     * @param {string} params.projectId [Required] Project ID of the job to cancel
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancel: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/project/{projectId}/jobs/{jobId}/cancel',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.jobs.get
     *
     * @desc Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // [Required] Project ID of the requested job
     *     projectId: "",
     *     // [Required] Job ID of the requested job
     *     jobId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.jobs.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.jobs.get
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId [Required] Job ID of the requested job
     * @param {string} params.projectId [Required] Project ID of the requested job
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/jobs/{jobId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.jobs.getQueryResults
     *
     * @desc Retrieves the results of a query job.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'getQueryResults' method:
     *
     *     // [Required] Project ID of the query job
     *     projectId: "",
     *     // [Required] Job ID of the query job
     *     jobId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.jobs.getQueryResults(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.jobs.getQueryResults
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.jobId [Required] Job ID of the query job
     * @param {integer=} params.maxResults Maximum number of results to read
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId [Required] Project ID of the query job
     * @param {string=} params.startIndex Zero-based index of the starting row
     * @param {integer=} params.timeoutMs How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getQueryResults: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/queries/{jobId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'jobId'],
        pathParams: ['jobId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.jobs.insert
     *
     * @desc Starts a new asynchronous job. Requires the Can View project role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the project that will be billed for the job
     *     projectId: "",
     *     resource: {},
     *     media: {
     *       // See https://github.com/google/google-api-nodejs-client#media-uploads
     *       mimeType: 'text/plain',
     *       body: 'Hello World!'
     *     },
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.jobs.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.jobs.insert
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID of the project that will be billed for the job
     * @param  {object} params.resource Media resource metadata
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/jobs',
          method: 'POST'
        },
        params: params,
        mediaUrl: 'https://www.googleapis.com/upload/bigquery/v2/projects/{projectId}/jobs',
        requiredParams: ['projectId'],
        pathParams: ['projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.jobs.list
     *
     * @desc Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the jobs to list
     *     projectId: "",
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
     *         bigquery.jobs.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   bigquery.jobs.list(request, recur);
     * });
     *
     * @alias bigquery.jobs.list
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.allUsers Whether to display jobs owned by all users in the project. Default false
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId Project ID of the jobs to list
     * @param {string=} params.projection Restrict information returned to a set of selected fields
     * @param {string=} params.stateFilter Filter for job state
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/jobs',
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
     * bigquery.jobs.query
     *
     * @desc Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'query' method:
     *
     *     // Project ID of the project billed for the query
     *     projectId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.jobs.query(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.jobs.query
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.projectId Project ID of the project billed for the query
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    query: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/queries',
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

  self.projects = {

    /**
     * bigquery.projects.list
     *
     * @desc Lists all projects to which you have been granted any project role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *         bigquery.projects.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   bigquery.projects.list(request, recur);
     * });
     *
     * @alias bigquery.projects.list
     * @memberOf! bigquery(v2)
     *
     * @param {object=} params Parameters for request
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects',
          method: 'GET'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.tabledata = {

    /**
     * bigquery.tabledata.insertAll
     *
     * @desc Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // TODO: Change placeholders below to appropriate parameter values for the 'insertAll' method:
     *
     *     // Project ID of the destination table.
     *     projectId: "",
     *     // Dataset ID of the destination table.
     *     datasetId: "",
     *     // Table ID of the destination table.
     *     tableId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tabledata.insertAll(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tabledata.insertAll
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the destination table.
     * @param {string} params.projectId Project ID of the destination table.
     * @param {string} params.tableId Table ID of the destination table.
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insertAll: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.tabledata.list
     *
     * @desc Retrieves table data from a specified set of rows. Requires the READER dataset role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the table to read
     *     projectId: "",
     *     // Dataset ID of the table to read
     *     datasetId: "",
     *     // Table ID of the table to read
     *     tableId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tabledata.list(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tabledata.list
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to read
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, identifying the result set
     * @param {string} params.projectId Project ID of the table to read
     * @param {string=} params.startIndex Zero-based index of the starting row to read
     * @param {string} params.tableId Table ID of the table to read
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };

  self.tables = {

    /**
     * bigquery.tables.delete
     *
     * @desc Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the table to delete
     *     projectId: "",
     *     // Dataset ID of the table to delete
     *     datasetId: "",
     *     // Table ID of the table to delete
     *     tableId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tables.delete(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tables.delete
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to delete
     * @param {string} params.projectId Project ID of the table to delete
     * @param {string} params.tableId Table ID of the table to delete
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
          method: 'DELETE'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.tables.get
     *
     * @desc Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the requested table
     *     projectId: "",
     *     // Dataset ID of the requested table
     *     datasetId: "",
     *     // Table ID of the requested table
     *     tableId: "",
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tables.get(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tables.get
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the requested table
     * @param {string} params.projectId Project ID of the requested table
     * @param {string} params.tableId Table ID of the requested table
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.tables.insert
     *
     * @desc Creates a new, empty table in the dataset.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the new table
     *     projectId: "",
     *     // Dataset ID of the new table
     *     datasetId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tables.insert(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tables.insert
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the new table
     * @param {string} params.projectId Project ID of the new table
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables',
          method: 'POST'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.tables.list
     *
     * @desc Lists all tables in the specified dataset. Requires the READER dataset role.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the tables to list
     *     projectId: "",
     *     // Dataset ID of the tables to list
     *     datasetId: "",
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
     *         bigquery.tables.list(request, recur);
     *       }
     *     }
     *   };
     *
     *   bigquery.tables.list(request, recur);
     * });
     *
     * @alias bigquery.tables.list
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the tables to list
     * @param {integer=} params.maxResults Maximum number of results to return
     * @param {string=} params.pageToken Page token, returned by a previous call, to request the next page of results
     * @param {string} params.projectId Project ID of the tables to list
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables',
          method: 'GET'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId'],
        pathParams: ['datasetId', 'projectId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.tables.patch
     *
     * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the table to update
     *     projectId: "",
     *     // Dataset ID of the table to update
     *     datasetId: "",
     *     // Table ID of the table to update
     *     tableId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tables.patch(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tables.patch
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to update
     * @param {string} params.projectId Project ID of the table to update
     * @param {string} params.tableId Table ID of the table to update
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
          method: 'PATCH'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * bigquery.tables.update
     *
     * @desc Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
     *
     * @example
     * // PRE-REQUISITES:
     * // ---------------
     * // 1. If not already done, enable the BigQuery API and check the quota for your project at
     * //    https://console.developers.google.com/apis/api/bigquery_component/quotas
     * // 2. This sample uses Application Default Credentials for Auth. If not already done, install the gcloud CLI from
     * //    https://cloud.google.com/sdk/ and run 'gcloud beta auth application-default login'
     * // 3. To install the client library and Application Default Credentials library, run:
     * //    'npm install googleapis --save'
     * var google = require('googleapis');
     * var bigquery = google.bigquery('v2');
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
     *     // Project ID of the table to update
     *     projectId: "",
     *     // Dataset ID of the table to update
     *     datasetId: "",
     *     // Table ID of the table to update
     *     tableId: "",
     *     resource: {},
     *     // Auth client
     *     auth: authClient
     *   };
     *
     *   bigquery.tables.update(request, function(err, result) {
     *     if (err) {
     *       console.log(err);
     *     } else {
     *       console.log(result);
     *     }
     *   });
     * });
     *
     * @alias bigquery.tables.update
     * @memberOf! bigquery(v2)
     *
     * @param {object} params Parameters for request
     * @param {string} params.datasetId Dataset ID of the table to update
     * @param {string} params.projectId Project ID of the table to update
     * @param {string} params.tableId Table ID of the table to update
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://www.googleapis.com/bigquery/v2/projects/{projectId}/datasets/{datasetId}/tables/{tableId}',
          method: 'PUT'
        },
        params: params,
        requiredParams: ['projectId', 'datasetId', 'tableId'],
        pathParams: ['datasetId', 'projectId', 'tableId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

module.exports = Bigquery;
