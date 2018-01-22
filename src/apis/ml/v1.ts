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

import {createAPIRequest} from '../../lib/apirequest';

/**
 * Google Cloud Machine Learning Engine
 *
 * An API to enable creating and using machine learning models.
 *
 * @example
 * const google = require('googleapis');
 * const ml = google.ml('v1');
 *
 * @namespace ml
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Ml
 */
function Ml(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    /**
     * ml.projects.getConfig
     * @desc Get the service account information associated with your project.
     * You need this information in order to grant the service account
     * persmissions for the Google Cloud Storage location where you put your
     * model training code for training the model with Google Cloud Machine
     * Learning.
     * @alias ml.projects.getConfig
     * @memberOf! ml(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Required. The project name.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}:getConfig')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    }, /**
        * ml.projects.predict
        * @desc Performs prediction on the data in the request. Cloud ML Engine
        * implements a custom `predict` verb on top of an HTTP POST method.
        * <p>For details of the request and response format, see the **guide to
        * the [predict request format](/ml-engine/docs/v1/predict-request)**.
        * @alias ml.projects.predict
        * @memberOf! ml(v1)
        *
        * @param {object} params Parameters for request
        * @param {string} params.name Required. The resource name of a model or a version.  Authorization: requires the `predict` permission on the specified resource.
        * @param {ml(v1).GoogleCloudMlV1__PredictRequest} params.resource Request body data
        * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
        * @param {callback} callback The callback that handles the response.
        * @return {object} Request object
        */
    predict(params, options, callback) {
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }
      options = options || {};
      const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{name}:predict')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: self
      };
      return createAPIRequest(parameters, callback);
    },
    jobs: {
      /**
       * ml.projects.jobs.cancel
       * @desc Cancels a running job.
       * @alias ml.projects.jobs.cancel
       * @memberOf! ml(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The name of the job to cancel.
       * @param {ml(v1).GoogleCloudMlV1__CancelJobRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}:cancel')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.create
          * @desc Creates a training or a batch prediction job.
          * @alias ml.projects.jobs.create
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.parent Required. The project name.
          * @param {ml(v1).GoogleCloudMlV1__Job} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/jobs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.get
          * @desc Describes a job.
          * @alias ml.projects.jobs.get
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The name of the job to get the description of.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.getIamPolicy
          * @desc Gets the access control policy for a resource. Returns an
          * empty policy if the resource exists and does not have a policy set.
          * @alias ml.projects.jobs.getIamPolicy
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      getIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:getIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.list
          * @desc Lists the jobs in the project.  If there are no jobs that
          * match the request parameters, the list request returns an empty
          * response body: {}.
          * @alias ml.projects.jobs.list
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.filter Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': <p><code>gcloud ml-engine jobs list --filter='jobId:census*'</code> <p>List all failed jobs with names that start with 'rnn': <p><code>gcloud ml-engine jobs list --filter='jobId:rnn* AND state:FAILED'</code> <p>For more examples, see the guide to <a href="/ml-engine/docs/monitor-training">monitoring jobs</a>.
          * @param {integer=} params.pageSize Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
          * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
          * @param {string} params.parent Required. The name of the project for which to list jobs.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/jobs')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.patch
          * @desc Updates a specific job resource.  Currently the only supported
          * fields to update are `labels`.
          * @alias ml.projects.jobs.patch
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The job name.
          * @param {string=} params.updateMask Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource.  For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows:     {       "labels": {          "owner": "Google",          "color": "Blue"       }       "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4"     } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated.  Currently the only supported update masks are `labels` and `etag`.
          * @param {ml(v1).GoogleCloudMlV1__Job} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      patch(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.setIamPolicy
          * @desc Sets the access control policy on the specified resource.
          * Replaces any existing policy.
          * @alias ml.projects.jobs.setIamPolicy
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
          * @param {ml(v1).GoogleIamV1__SetIamPolicyRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      setIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:setIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.jobs.testIamPermissions
          * @desc Returns permissions that a caller has on the specified
          * resource. If the resource does not exist, this will return an empty
          * set of permissions, not a NOT_FOUND error.  Note: This operation is
          * designed to be used for building permission-aware UIs and
          * command-line tools, not for authorization checking. This operation
          * may "fail open" without warning.
          * @alias ml.projects.jobs.testIamPermissions
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
          * @param {ml(v1).GoogleIamV1__TestIamPermissionsRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      testIamPermissions(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:testIamPermissions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    locations: {
      /**
       * ml.projects.locations.get
       * @desc Get the complete list of CMLE capabilities in a location, along
       * with their location-specific properties.
       * @alias ml.projects.locations.get
       * @memberOf! ml(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Required. The name of the location.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.locations.list
          * @desc List all locations that provides at least one type of CMLE
          * capability.
          * @alias ml.projects.locations.list
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
          * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
          * @param {string} params.parent Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/locations')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    },
    models: {
      /**
       * ml.projects.models.create
       * @desc Creates a model which will later contain one or more versions.
       * You must add at least one version before you can request predictions
       * from the model. Add versions by calling
       * [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create).
       * @alias ml.projects.models.create
       * @memberOf! ml(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.parent Required. The project name.
       * @param {ml(v1).GoogleCloudMlV1__Model} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      create(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/models')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.delete
          * @desc Deletes a model.  You can only delete a model if there are no
          * versions in it. You can delete versions by calling
          * [projects.models.versions.delete](/ml-engine/reference/rest/v1/projects.models.versions/delete).
          * @alias ml.projects.models.delete
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The name of the model.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.get
          * @desc Gets information about a model, including its name, the
          * description (if set), and the default version (if at least one
          * version of the model has been deployed).
          * @alias ml.projects.models.get
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The name of the model.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.getIamPolicy
          * @desc Gets the access control policy for a resource. Returns an
          * empty policy if the resource exists and does not have a policy set.
          * @alias ml.projects.models.getIamPolicy
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      getIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:getIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.list
          * @desc Lists the models in a project.  Each project can contain
          * multiple models, and each model can have multiple versions.  If
          * there are no models that match the request parameters, the list
          * request returns an empty response body: {}.
          * @alias ml.projects.models.list
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.filter Optional. Specifies the subset of models to retrieve.
          * @param {integer=} params.pageSize Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
          * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
          * @param {string} params.parent Required. The name of the project whose models are to be listed.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{parent}/models')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['parent'],
          pathParams: ['parent'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.patch
          * @desc Updates a specific model resource.  Currently the only
          * supported fields to update are `description` and
          * `default_version.name`.
          * @alias ml.projects.models.patch
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name Required. The project name.
          * @param {string=} params.updateMask Required. Specifies the path, relative to `Model`, of the field to update.  For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo",       "defaultVersion": {         "name":"version_1"       }     } In this example, the model is blindly overwritten since no etag is given.  To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your model resource.  Currently the supported update masks are `description`, `default_version.name`, `labels`, and `etag`.
          * @param {ml(v1).GoogleCloudMlV1__Model} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      patch(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PATCH'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.setIamPolicy
          * @desc Sets the access control policy on the specified resource.
          * Replaces any existing policy.
          * @alias ml.projects.models.setIamPolicy
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
          * @param {ml(v1).GoogleIamV1__SetIamPolicyRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      setIamPolicy(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:setIamPolicy')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.models.testIamPermissions
          * @desc Returns permissions that a caller has on the specified
          * resource. If the resource does not exist, this will return an empty
          * set of permissions, not a NOT_FOUND error.  Note: This operation is
          * designed to be used for building permission-aware UIs and
          * command-line tools, not for authorization checking. This operation
          * may "fail open" without warning.
          * @alias ml.projects.models.testIamPermissions
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
          * @param {ml(v1).GoogleIamV1__TestIamPermissionsRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      testIamPermissions(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{resource}:testIamPermissions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['resource'],
          pathParams: ['resource'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      },
      versions: {
        /**
         * ml.projects.models.versions.create
         * @desc Creates a new version of a model from a trained TensorFlow
         * model.  If the version created in the cloud by this call is the first
         * deployed version of the specified model, it will be made the default
         * version of the model. When you add a version to a model that already
         * has one or more versions, the default version does not automatically
         * change. If you want a new version to be the default, you must call
         * [projects.models.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
         * @alias ml.projects.models.versions.create
         * @memberOf! ml(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required. The name of the model.
         * @param {ml(v1).GoogleCloudMlV1__Version} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{parent}/versions')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * ml.projects.models.versions.delete
            * @desc Deletes a model version.  Each model can have multiple
            * versions deployed and in use at any given time. Use this method to
            * remove a single version.  Note: You cannot delete the version that
            * is set as the default version of the model unless it is the only
            * remaining version.
            * @alias ml.projects.models.versions.delete
            * @memberOf! ml(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Required. The name of the version. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        delete (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'DELETE'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * ml.projects.models.versions.get
            * @desc Gets information about a model version.  Models can have
            * multiple versions. You can call
            * [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list)
            * to get the same information that this method returns for all of
            * the versions of a model.
            * @alias ml.projects.models.versions.get
            * @memberOf! ml(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Required. The name of the version.
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        get(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * ml.projects.models.versions.list
            * @desc Gets basic information about all the versions of a model.
            * If you expect that a model has many versions, or if you need to
            * handle only a limited number of results at a time, you can request
            * that the list be retrieved in batches (called pages).  If there
            * are no versions that match the request parameters, the list
            * request returns an empty response body: {}.
            * @alias ml.projects.models.versions.list
            * @memberOf! ml(v1)
            *
            * @param {object} params Parameters for request
            * @param {string=} params.filter Optional. Specifies the subset of versions to retrieve.
            * @param {integer=} params.pageSize Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field.  The default value is 20, and the maximum page size is 100.
            * @param {string=} params.pageToken Optional. A page token to request the next page of results.  You get the token from the `next_page_token` field of the response from the previous call.
            * @param {string} params.parent Required. The name of the model for which to list the version.
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        list(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{parent}/versions')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'GET'
                },
                options),
            params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * ml.projects.models.versions.patch
            * @desc Updates the specified Version resource.  Currently the only
            * supported field to update is `description`.
            * @alias ml.projects.models.versions.patch
            * @memberOf! ml(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Required. The name of the model.
            * @param {string=} params.updateMask Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty.  For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows:     {       "description": "foo"     } In this example, the version is blindly overwritten since no etag is given.  To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your version resource.  Currently the only supported update masks are `description`, `labels`, and `etag`, and `expire_time`.
            * @param {ml(v1).GoogleCloudMlV1__Version} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        patch(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                  method: 'PATCH'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }, /**
            * ml.projects.models.versions.setDefault
            * @desc Designates a version to be the default for the model.  The
            * default version is used for prediction requests made against the
            * model that don't specify a version.  The first version to be
            * created for a model is automatically set as the default. You must
            * make any subsequent changes to the default version setting
            * manually using this method.
            * @alias ml.projects.models.versions.setDefault
            * @memberOf! ml(v1)
            *
            * @param {object} params Parameters for request
            * @param {string} params.name Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling [projects.models.versions.list](/ml-engine/reference/rest/v1/projects.models.versions/list).
            * @param {ml(v1).GoogleCloudMlV1__SetDefaultVersionRequest} params.resource Request body data
            * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
            * @param {callback} callback The callback that handles the response.
            * @return {object} Request object
            */
        setDefault(params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options = options || {};
          const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
          const parameters = {
            options: Object.assign(
                {
                  url: (rootUrl + '/v1/{name}:setDefault')
                           .replace(/([^:]\/)\/+/g, '$1'),
                  method: 'POST'
                },
                options),
            params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };
          return createAPIRequest(parameters, callback);
        }

      }
    },
    operations: {
      /**
       * ml.projects.operations.cancel
       * @desc Starts asynchronous cancellation on a long-running operation.
       * The server makes a best effort to cancel the operation, but success is
       * not guaranteed.  If the server doesn't support this method, it returns
       * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
       * Operations.GetOperation or other methods to check whether the
       * cancellation succeeded or whether the operation completed despite
       * cancellation. On successful cancellation, the operation is not deleted;
       * instead, it becomes an operation with an Operation.error value with a
       * google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
       * @alias ml.projects.operations.cancel
       * @memberOf! ml(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name The name of the operation resource to be cancelled.
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      cancel(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}:cancel')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.operations.delete
          * @desc Deletes a long-running operation. This method indicates that
          * the client is no longer interested in the operation result. It does
          * not cancel the operation. If the server doesn't support this method,
          * it returns `google.rpc.Code.UNIMPLEMENTED`.
          * @alias ml.projects.operations.delete
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the operation resource to be deleted.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      delete (params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.operations.get
          * @desc Gets the latest state of a long-running operation.  Clients
          * can use this method to poll the operation result at intervals as
          * recommended by the API service.
          * @alias ml.projects.operations.get
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the operation resource.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      get(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * ml.projects.operations.list
          * @desc Lists operations that match the specified filter in the
          * request. If the server doesn't support this method, it returns
          * `UNIMPLEMENTED`.  NOTE: the `name` binding allows API services to
          * override the binding to use different resource name schemes, such as
          * `users/x/operations`. To override the binding, API services can add
          * a binding such as `"/v1/{name=users/x}/operations"` to their service
          * configuration. For backwards compatibility, the default name
          * includes the operations collection id, however overriding users must
          * ensure the name binding is the parent resource, without the
          * operations collection id.
          * @alias ml.projects.operations.list
          * @memberOf! ml(v1)
          *
          * @param {object} params Parameters for request
          * @param {string=} params.filter The standard list filter.
          * @param {string} params.name The name of the operation's parent resource.
          * @param {integer=} params.pageSize The standard list page size.
          * @param {string=} params.pageToken The standard list page token.
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      list(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://ml.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}/operations')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }

    }
  };
}
/**
 * @typedef GoogleApi__HttpBody
 * @memberOf! ml(v1)
 * @type object
 * @property {string} contentType The HTTP Content-Type string representing the content type of the body.
 * @property {string} data HTTP body binary data.
 * @property {object[]} extensions Application specific response metadata. Must be set in the first response for streaming APIs.
 */
/**
 * @typedef GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric
 * @memberOf! ml(v1)
 * @type object
 * @property {number} objectiveValue The objective value at this training step.
 * @property {string} trainingStep The global training step for this metric.
 */
/**
 * @typedef GoogleCloudMlV1__AutoScaling
 * @memberOf! ml(v1)
 * @type object
 * @property {integer} minNodes Optional. The minimum number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be at least `rate` * `min_nodes` * number of hours since last billing cycle, where `rate` is the cost per node-hour as documented in [pricing](https://cloud.google.com/ml-engine/pricing#prediction_pricing), even if no predictions are performed. There is additional cost for each prediction performed.  Unlike manual scaling, if the load gets too heavy for the nodes that are up, the service will automatically add nodes to handle the increased load as well as scale back as traffic drops, always maintaining at least `min_nodes`. You will be charged for the time in which additional nodes are used.  If not specified, `min_nodes` defaults to 0, in which case, when traffic to a model stops (and after a cool-down period), nodes will be shut down and no charges will be incurred until traffic to the model resumes.
 */
/**
 * @typedef GoogleCloudMlV1__CancelJobRequest
 * @memberOf! ml(v1)
 * @type object
 */
/**
 * @typedef GoogleCloudMlV1__Capability
 * @memberOf! ml(v1)
 * @type object
 * @property {string[]} availableAccelerators Available accelerators for the capability.
 * @property {string} type
 */
/**
 * @typedef GoogleCloudMlV1__GetConfigResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {string} serviceAccount The service account Cloud ML uses to access resources in the project.
 * @property {string} serviceAccountProject The project number for `service_account`.
 */
/**
 * @typedef GoogleCloudMlV1__HyperparameterOutput
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric[]} allMetrics All recorded object metrics for this trial. This field is not currently populated.
 * @property {ml(v1).GoogleCloudMlV1_HyperparameterOutput_HyperparameterMetric} finalMetric The final objective metric seen for this trial.
 * @property {object} hyperparameters The hyperparameters given to this trial.
 * @property {string} trialId The trial id for these results.
 */
/**
 * @typedef GoogleCloudMlV1__HyperparameterSpec
 * @memberOf! ml(v1)
 * @type object
 * @property {string} goal Required. The type of goal to use for tuning. Available types are `MAXIMIZE` and `MINIMIZE`.  Defaults to `MAXIMIZE`.
 * @property {string} hyperparameterMetricTag Optional. The Tensorflow summary tag name to use for optimizing trials. For current versions of Tensorflow, this tag name should exactly match what is shown in Tensorboard, including all scopes.  For versions of Tensorflow prior to 0.12, this should be only the tag passed to tf.Summary. By default, &quot;training/hptuning/metric&quot; will be used.
 * @property {integer} maxParallelTrials Optional. The number of training trials to run concurrently. You can reduce the time it takes to perform hyperparameter tuning by adding trials in parallel. However, each trail only benefits from the information gained in completed trials. That means that a trial does not get access to the results of trials running at the same time, which could reduce the quality of the overall optimization.  Each trial will use the same scale tier and machine types.  Defaults to one.
 * @property {integer} maxTrials Optional. How many training trials should be attempted to optimize the specified hyperparameters.  Defaults to one.
 * @property {ml(v1).GoogleCloudMlV1__ParameterSpec[]} params Required. The set of parameters to tune.
 */
/**
 * @typedef GoogleCloudMlV1__Job
 * @memberOf! ml(v1)
 * @type object
 * @property {string} createTime Output only. When the job was created.
 * @property {string} endTime Output only. When the job processing was completed.
 * @property {string} errorMessage Output only. The details of a failure or a cancellation.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a job from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform job updates in order to avoid race conditions: An `etag` is returned in the response to `GetJob`, and systems are expected to put that etag in the request to `UpdateJob` to ensure that their change will be applied to the same version of the job.
 * @property {string} jobId Required. The user-specified id of the job.
 * @property {object} labels Optional. One or more labels that you can add, to organize your jobs. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/how-tos/resource-labels&quot;&gt;using labels&lt;/a&gt;.
 * @property {ml(v1).GoogleCloudMlV1__PredictionInput} predictionInput Input parameters to create a prediction job.
 * @property {ml(v1).GoogleCloudMlV1__PredictionOutput} predictionOutput The current prediction job result.
 * @property {string} startTime Output only. When the job processing was started.
 * @property {string} state Output only. The detailed state of a job.
 * @property {ml(v1).GoogleCloudMlV1__TrainingInput} trainingInput Input parameters to create a training job.
 * @property {ml(v1).GoogleCloudMlV1__TrainingOutput} trainingOutput The current training job result.
 */
/**
 * @typedef GoogleCloudMlV1__ListJobsResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1__Job[]} jobs The list of jobs.
 * @property {string} nextPageToken Optional. Pass this token as the `page_token` field of the request for a subsequent call.
 */
/**
 * @typedef GoogleCloudMlV1__ListLocationsResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1__Location[]} locations Locations where at least one type of CMLE capability is available.
 * @property {string} nextPageToken Optional. Pass this token as the `page_token` field of the request for a subsequent call.
 */
/**
 * @typedef GoogleCloudMlV1__ListModelsResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1__Model[]} models The list of models.
 * @property {string} nextPageToken Optional. Pass this token as the `page_token` field of the request for a subsequent call.
 */
/**
 * @typedef GoogleCloudMlV1__ListVersionsResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {string} nextPageToken Optional. Pass this token as the `page_token` field of the request for a subsequent call.
 * @property {ml(v1).GoogleCloudMlV1__Version[]} versions The list of versions.
 */
/**
 * @typedef GoogleCloudMlV1__Location
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1__Capability[]} capabilities Capabilities available in the location.
 * @property {string} name
 */
/**
 * @typedef GoogleCloudMlV1__ManualScaling
 * @memberOf! ml(v1)
 * @type object
 * @property {integer} nodes The number of nodes to allocate for this model. These nodes are always up, starting from the time the model is deployed, so the cost of operating this model will be proportional to `nodes` * number of hours since last billing cycle plus the cost for each prediction performed.
 */
/**
 * @typedef GoogleCloudMlV1__Model
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1__Version} defaultVersion Output only. The default version of the model. This version will be used to handle prediction requests that do not specify a version.  You can change the default version by calling [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
 * @property {string} description Optional. The description specified for the model when it was created.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetModel`, and systems are expected to put that etag in the request to `UpdateModel` to ensure that their change will be applied to the model as intended.
 * @property {object} labels Optional. One or more labels that you can add, to organize your models. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/how-tos/resource-labels&quot;&gt;using labels&lt;/a&gt;.
 * @property {string} name Required. The name specified for the model when it was created.  The model name must be unique within the project it is created in.
 * @property {boolean} onlinePredictionLogging Optional. If true, enables StackDriver Logging for online prediction. Default is false.
 * @property {string[]} regions Optional. The list of regions where the model is going to be deployed. Currently only one region per model is supported. Defaults to &#39;us-central1&#39; if nothing is set. See the &lt;a href=&quot;/ml-engine/docs/regions&quot;&gt;available regions&lt;/a&gt; for ML Engine services. Note: *   No matter where a model is deployed, it can always be accessed by     users from anywhere, both for online and batch prediction. *   The region for a batch prediction job is set by the region field when     submitting the batch prediction job and does not take its value from     this field.
 */
/**
 * @typedef GoogleCloudMlV1__OperationMetadata
 * @memberOf! ml(v1)
 * @type object
 * @property {string} createTime The time the operation was submitted.
 * @property {string} endTime The time operation processing completed.
 * @property {boolean} isCancellationRequested Indicates whether a request to cancel this operation has been made.
 * @property {object} labels The user labels, inherited from the model or the model version being operated on.
 * @property {string} modelName Contains the name of the model associated with the operation.
 * @property {string} operationType The operation type.
 * @property {string} projectNumber Contains the project number associated with the operation.
 * @property {string} startTime The time operation processing started.
 * @property {ml(v1).GoogleCloudMlV1__Version} version Contains the version associated with the operation.
 */
/**
 * @typedef GoogleCloudMlV1__ParameterSpec
 * @memberOf! ml(v1)
 * @type object
 * @property {string[]} categoricalValues Required if type is `CATEGORICAL`. The list of possible categories.
 * @property {number[]} discreteValues Required if type is `DISCRETE`. A list of feasible points. The list should be in strictly increasing order. For instance, this parameter might have possible settings of 1.5, 2.5, and 4.0. This list should not contain more than 1,000 values.
 * @property {number} maxValue Required if typeis `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is `INTEGER`.
 * @property {number} minValue Required if type is `DOUBLE` or `INTEGER`. This field should be unset if type is `CATEGORICAL`. This value should be integers if type is INTEGER.
 * @property {string} parameterName Required. The parameter name must be unique amongst all ParameterConfigs in a HyperparameterSpec message. E.g., &quot;learning_rate&quot;.
 * @property {string} scaleType Optional. How the parameter should be scaled to the hypercube. Leave unset for categorical parameters. Some kind of scaling is strongly recommended for real or integral parameters (e.g., `UNIT_LINEAR_SCALE`).
 * @property {string} type Required. The type of the parameter.
 */
/**
 * @typedef GoogleCloudMlV1__PredictionInput
 * @memberOf! ml(v1)
 * @type object
 * @property {string} batchSize Optional. Number of records per batch, defaults to 64. The service will buffer batch_size number of records in memory before invoking one Tensorflow prediction call internally. So take the record size and memory available into consideration when setting this parameter.
 * @property {string} dataFormat Required. The format of the input data files.
 * @property {string[]} inputPaths Required. The Google Cloud Storage location of the input data files. May contain wildcards.
 * @property {string} maxWorkerCount Optional. The maximum number of workers to be used for parallel processing. Defaults to 10 if not specified.
 * @property {string} modelName Use this field if you want to use the default version for the specified model. The string must use the following format:  `&quot;projects/&lt;var&gt;[YOUR_PROJECT]&lt;/var&gt;/models/&lt;var&gt;[YOUR_MODEL]&lt;/var&gt;&quot;`
 * @property {string} outputPath Required. The output Google Cloud Storage location.
 * @property {string} region Required. The Google Compute Engine region to run the prediction job in. See the &lt;a href=&quot;/ml-engine/docs/regions&quot;&gt;available regions&lt;/a&gt; for ML Engine services.
 * @property {string} runtimeVersion Optional. The Google Cloud ML runtime version to use for this batch prediction. If not set, Google Cloud ML will pick the runtime version used during the CreateVersion request for this model version, or choose the latest stable version when model version information is not available such as when the model is specified by uri.
 * @property {string} signatureName Optional. The name of the signature defined in the SavedModel to use for this job. Please refer to [SavedModel](https://tensorflow.github.io/serving/serving_basic.html) for information about how to use signatures.  Defaults to [DEFAULT_SERVING_SIGNATURE_DEF_KEY](https://www.tensorflow.org/api_docs/python/tf/saved_model/signature_constants) , which is &quot;serving_default&quot;.
 * @property {string} uri Use this field if you want to specify a Google Cloud Storage path for the model to use.
 * @property {string} versionName Use this field if you want to specify a version of the model to use. The string is formatted the same way as `model_version`, with the addition of the version information:  `&quot;projects/&lt;var&gt;[YOUR_PROJECT]&lt;/var&gt;/models/&lt;var&gt;YOUR_MODEL/versions/&lt;var&gt;[YOUR_VERSION]&lt;/var&gt;&quot;`
 */
/**
 * @typedef GoogleCloudMlV1__PredictionOutput
 * @memberOf! ml(v1)
 * @type object
 * @property {string} errorCount The number of data instances which resulted in errors.
 * @property {number} nodeHours Node hours used by the batch prediction job.
 * @property {string} outputPath The output Google Cloud Storage location provided at the job creation time.
 * @property {string} predictionCount The number of generated predictions.
 */
/**
 * @typedef GoogleCloudMlV1__PredictRequest
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleApi__HttpBody} httpBody  Required. The prediction request body.
 */
/**
 * @typedef GoogleCloudMlV1__SetDefaultVersionRequest
 * @memberOf! ml(v1)
 * @type object
 */
/**
 * @typedef GoogleCloudMlV1__TrainingInput
 * @memberOf! ml(v1)
 * @type object
 * @property {string[]} args Optional. Command line arguments to pass to the program.
 * @property {ml(v1).GoogleCloudMlV1__HyperparameterSpec} hyperparameters Optional. The set of Hyperparameters to tune.
 * @property {string} jobDir Optional. A Google Cloud Storage path in which to store training outputs and other data needed for training. This path is passed to your TensorFlow program as the &#39;job_dir&#39; command-line argument. The benefit of specifying this field is that Cloud ML validates the path for use in training.
 * @property {string} masterType Optional. Specifies the type of virtual machine to use for your training job&#39;s master worker.  The following types are supported:  &lt;dl&gt;   &lt;dt&gt;standard&lt;/dt&gt;   &lt;dd&gt;   A basic machine configuration suitable for training simple models with   small to moderate datasets.   &lt;/dd&gt;   &lt;dt&gt;large_model&lt;/dt&gt;   &lt;dd&gt;   A machine with a lot of memory, specially suited for parameter servers   when your model is large (having many hidden layers or layers with very   large numbers of nodes).   &lt;/dd&gt;   &lt;dt&gt;complex_model_s&lt;/dt&gt;   &lt;dd&gt;   A machine suitable for the master and workers of the cluster when your   model requires more computation than the standard machine can handle   satisfactorily.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m&lt;/dt&gt;   &lt;dd&gt;   A machine with roughly twice the number of cores and roughly double the   memory of &lt;code suppresswarning=&quot;true&quot;&gt;complex_model_s&lt;/code&gt;.   &lt;/dd&gt;   &lt;dt&gt;complex_model_l&lt;/dt&gt;   &lt;dd&gt;   A machine with roughly twice the number of cores and roughly double the   memory of &lt;code suppresswarning=&quot;true&quot;&gt;complex_model_m&lt;/code&gt;.   &lt;/dd&gt;   &lt;dt&gt;standard_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;code suppresswarning=&quot;true&quot;&gt;standard&lt;/code&gt; that   also includes a single NVIDIA Tesla K80 GPU. See more about   &lt;a href=&quot;/ml-engine/docs/how-tos/using-gpus&quot;&gt;   using GPUs for training your model&lt;/a&gt;.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to   &lt;code suppresswarning=&quot;true&quot;&gt;complex_model_m&lt;/code&gt; that also includes   four NVIDIA Tesla K80 GPUs.   &lt;/dd&gt;   &lt;dt&gt;complex_model_l_gpu&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to   &lt;code suppresswarning=&quot;true&quot;&gt;complex_model_l&lt;/code&gt; that also includes   eight NVIDIA Tesla K80 GPUs.   &lt;/dd&gt;   &lt;dt&gt;standard_p100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to &lt;code suppresswarning=&quot;true&quot;&gt;standard&lt;/code&gt; that   also includes a single NVIDIA Tesla P100 GPU. The availability of these   GPUs is in the Beta launch stage.   &lt;/dd&gt;   &lt;dt&gt;complex_model_m_p100&lt;/dt&gt;   &lt;dd&gt;   A machine equivalent to   &lt;code suppresswarning=&quot;true&quot;&gt;complex_model_m&lt;/code&gt; that also includes   four NVIDIA Tesla P100 GPUs. The availability of these GPUs is in   the Beta launch stage.   &lt;/dd&gt; &lt;/dl&gt;  You must set this value when `scaleTier` is set to `CUSTOM`.
 * @property {string[]} packageUris Required. The Google Cloud Storage location of the packages with the training program and any additional dependencies. The maximum number of package URIs is 100.
 * @property {string} parameterServerCount Optional. The number of parameter server replicas to use for the training job. Each replica in the cluster will be of the type specified in `parameter_server_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`.If you set this value, you must also set `parameter_server_type`.
 * @property {string} parameterServerType Optional. Specifies the type of virtual machine to use for your training job&#39;s parameter server.  The supported values are the same as those described in the entry for `master_type`.  This value must be present when `scaleTier` is set to `CUSTOM` and `parameter_server_count` is greater than zero.
 * @property {string} pythonModule Required. The Python module name to run after installing the packages.
 * @property {string} pythonVersion Optional. The version of Python used in training. If not set, the default version is &#39;2.7&#39;. Python &#39;3.5&#39; is available when `runtime_version` is set to &#39;1.4&#39; and above. Python &#39;2.7&#39; works with all supported runtime versions.
 * @property {string} region Required. The Google Compute Engine region to run the training job in. See the &lt;a href=&quot;/ml-engine/docs/regions&quot;&gt;available regions&lt;/a&gt; for ML Engine services.
 * @property {string} runtimeVersion Optional. The Google Cloud ML runtime version to use for training.  If not set, Google Cloud ML will choose the latest stable version.
 * @property {string} scaleTier Required. Specifies the machine types, the number of replicas for workers and parameter servers.
 * @property {string} workerCount Optional. The number of worker replicas to use for the training job. Each replica in the cluster will be of the type specified in `worker_type`.  This value can only be used when `scale_tier` is set to `CUSTOM`. If you set this value, you must also set `worker_type`.
 * @property {string} workerType Optional. Specifies the type of virtual machine to use for your training job&#39;s worker nodes.  The supported values are the same as those described in the entry for `masterType`.  This value must be present when `scaleTier` is set to `CUSTOM` and `workerCount` is greater than zero.
 */
/**
 * @typedef GoogleCloudMlV1__TrainingOutput
 * @memberOf! ml(v1)
 * @type object
 * @property {string} completedTrialCount The number of hyperparameter tuning trials that completed successfully. Only set for hyperparameter tuning jobs.
 * @property {number} consumedMLUnits The amount of ML units consumed by the job.
 * @property {boolean} isHyperparameterTuningJob Whether this job is a hyperparameter tuning job.
 * @property {ml(v1).GoogleCloudMlV1__HyperparameterOutput[]} trials Results for individual Hyperparameter trials. Only set for hyperparameter tuning jobs.
 */
/**
 * @typedef GoogleCloudMlV1__Version
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleCloudMlV1__AutoScaling} autoScaling Automatically scale the number of nodes used to serve the model in response to increases and decreases in traffic. Care should be taken to ramp up traffic according to the model&#39;s ability to scale or you will start seeing increases in latency and 429 response codes.
 * @property {string} createTime Output only. The time the version was created.
 * @property {string} deploymentUri Required. The Google Cloud Storage location of the trained model used to create the version. See the [overview of model deployment](/ml-engine/docs/concepts/deployment-overview) for more information.  When passing Version to [projects.models.versions.create](/ml-engine/reference/rest/v1/projects.models.versions/create) the model service uses the specified location as the source of the model. Once deployed, the model version is hosted by the prediction service, so this location is useful only as a historical record. The total number of model files can&#39;t exceed 1000.
 * @property {string} description Optional. The description specified for the version when it was created.
 * @property {string} errorMessage Output only. The details of a failure or a cancellation.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a model from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform model updates in order to avoid race conditions: An `etag` is returned in the response to `GetVersion`, and systems are expected to put that etag in the request to `UpdateVersion` to ensure that their change will be applied to the model as intended.
 * @property {boolean} isDefault Output only. If true, this version will be used to handle prediction requests that do not specify a version.  You can change the default version by calling [projects.methods.versions.setDefault](/ml-engine/reference/rest/v1/projects.models.versions/setDefault).
 * @property {object} labels Optional. One or more labels that you can add, to organize your model versions. Each label is a key-value pair, where both the key and the value are arbitrary strings that you supply. For more information, see the documentation on &lt;a href=&quot;/ml-engine/docs/how-tos/resource-labels&quot;&gt;using labels&lt;/a&gt;.
 * @property {string} lastUseTime Output only. The time the version was last used for prediction.
 * @property {ml(v1).GoogleCloudMlV1__ManualScaling} manualScaling Manually select the number of nodes to use for serving the model. You should generally use `auto_scaling` with an appropriate `min_nodes` instead, but this option is available if you want more predictable billing. Beware that latency and error rates will increase if the traffic exceeds that capability of the system to serve it based on the selected number of nodes.
 * @property {string} name Required.The name specified for the version when it was created.  The version name must be unique within the model it is created in.
 * @property {string} runtimeVersion Optional. The Google Cloud ML runtime version to use for this deployment. If not set, Google Cloud ML will choose a version.
 * @property {string} state Output only. The state of a version.
 */
/**
 * @typedef GoogleIamV1__AuditConfig
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleIamV1__AuditLogConfig[]} auditLogConfigs The configuration for logging of each type of permission. Next ID: 4
 * @property {string[]} exemptedMembers
 * @property {string} service Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.
 */
/**
 * @typedef GoogleIamV1__AuditLogConfig
 * @memberOf! ml(v1)
 * @type object
 * @property {string[]} exemptedMembers Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
 * @property {string} logType The log type that this config enables.
 */
/**
 * @typedef GoogleIamV1__Binding
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleType__Expr} condition The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings, including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that represents all the    users of that domain. For example, `google.com` or `example.com`.
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
 */
/**
 * @typedef GoogleIamV1__Policy
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleIamV1__AuditConfig[]} auditConfigs Specifies cloud audit logging configuration for this policy.
 * @property {ml(v1).GoogleIamV1__Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 * @property {boolean} iamOwned
 * @property {integer} version Deprecated.
 */
/**
 * @typedef GoogleIamV1__SetIamPolicyRequest
 * @memberOf! ml(v1)
 * @type object
 * @property {ml(v1).GoogleIamV1__Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 * @property {string} updateMask OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: paths: &quot;bindings, etag&quot; This field is only used by Cloud IAM.
 */
/**
 * @typedef GoogleIamV1__TestIamPermissionsRequest
 * @memberOf! ml(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
/**
 * @typedef GoogleIamV1__TestIamPermissionsResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */
/**
 * @typedef GoogleLongrunning__ListOperationsResponse
 * @memberOf! ml(v1)
 * @type object
 * @property {string} nextPageToken The standard List next-page token.
 * @property {ml(v1).GoogleLongrunning__Operation[]} operations A list of operations that matches the specified filter in the request.
 */
/**
 * @typedef GoogleLongrunning__Operation
 * @memberOf! ml(v1)
 * @type object
 * @property {boolean} done If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
 * @property {ml(v1).GoogleRpc__Status} error The error result of the operation in case of failure or cancellation.
 * @property {object} metadata Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
 * @property {string} name The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
 * @property {object} response The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
 */
/**
 * @typedef GoogleProtobuf__Empty
 * @memberOf! ml(v1)
 * @type object
 */
/**
 * @typedef GoogleRpc__Status
 * @memberOf! ml(v1)
 * @type object
 * @property {integer} code The status code, which should be an enum value of google.rpc.Code.
 * @property {object[]} details A list of messages that carry the error details.  There is a common set of message types for APIs to use.
 * @property {string} message A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
 */
/**
 * @typedef GoogleType__Expr
 * @memberOf! ml(v1)
 * @type object
 * @property {string} description An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
 * @property {string} expression Textual representation of an expression in Common Expression Language syntax.  The application context of the containing message determines which well-known feature set of CEL is supported.
 * @property {string} location An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
 * @property {string} title An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
 */

export = Ml;
