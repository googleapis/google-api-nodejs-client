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
 * Cloud Tasks API
 *
 * Manages the execution of large numbers of distributed requests. Cloud Tasks is in Alpha.
 *
 * @example
 * const google = require('googleapis');
 * const cloudtasks = google.cloudtasks('v2beta2');
 *
 * @namespace cloudtasks
 * @type {Function}
 * @version v2beta2
 * @variation v2beta2
 * @param {object=} options Options for Cloudtasks
 */
function Cloudtasks(options) { // eslint-disable-line
  const self = this;
  self._options = options || {};

  self.projects = {
    locations: {

      /**
       * cloudtasks.projects.locations.get
       *
       * @desc Get information about a location.
       *
       * @alias cloudtasks.projects.locations.get
       * @memberOf! cloudtasks(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Resource name for the location.
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

        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
       * cloudtasks.projects.locations.list
       *
       * @desc Lists information about the supported locations for this service.
       *
       * @alias cloudtasks.projects.locations.list
       * @memberOf! cloudtasks(v2beta2)
       *
       * @param {object} params Parameters for request
       * @param {string=} params.filter The standard list filter.
       * @param {string} params.name The resource that owns the locations collection, if applicable.
       * @param {integer=} params.pageSize The standard list page size.
       * @param {string=} params.pageToken The standard list page token.
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

        const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

        const parameters = {
          options: Object.assign({
            url: (rootUrl + '/v2beta2/{name}/locations').replace(/([^:]\/)\/+/g, '$1'),
            method: 'GET'
          }, options),
          params: params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },
      queues: {

        /**
         * cloudtasks.projects.locations.queues.create
         *
         * @desc Creates a queue.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The location name in which the queue will be created.
         *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
         *     // The list of allowed locations can be obtained by calling Cloud
         *     // Tasks' implementation of
         *     // google.cloud.location.Locations.ListLocations.
         *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.create(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.create
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent Required.  The location name in which the queue will be created. For example: `projects/PROJECT_ID/locations/LOCATION_ID`  The list of allowed locations can be obtained by calling Cloud Tasks' implementation of google.cloud.location.Locations.ListLocations.
         * @param {cloudtasks(v2beta2).Queue} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{parent}/queues').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudtasks.projects.locations.queues.delete
         *
         * @desc Deletes a queue.  This command will delete the queue even if it has tasks in it.  Note: If you delete a queue, a queue with the same name can't be created for 7 days.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The queue name. For example:
         *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
         *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.delete(request, function(err) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.delete
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudtasks.projects.locations.queues.get
         *
         * @desc Gets a queue.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The resource name of the queue. For example:
         *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
         *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.get(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.get
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required.  The resource name of the queue. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudtasks.projects.locations.queues.getIamPolicy
         *
         * @desc Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set.  Authorization requires the following [Google IAM](/iam) permission on the specified resource parent:  * `cloudtasks.queues.getIamPolicy`
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy is being requested.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource_: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.getIamPolicy(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.getIamPolicy
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudtasks(v2beta2).GetIamPolicyRequest} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{resource}:getIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudtasks.projects.locations.queues.list
         *
         * @desc Lists queues.  Queues are returned in lexicographical order.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The location name.
         *     // For example: `projects/PROJECT_ID/locations/LOCATION_ID`
         *     parent: 'projects/my-project/locations/my-location',  // TODO: Update placeholder value.
         *
         *     auth: authClient,
         *   };
         *
         *   var handlePage = function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     var queuesPage = response['queues'];
         *     if (!queuesPage) {
         *       return;
         *     }
         *     for (var i = 0; i < queuesPage.length; i++) {
         *       // TODO: Change code below to process each resource in `queuesPage`:
         *       console.log(JSON.stringify(queuesPage[i], null, 2));
         *     }
         *
         *     if (response.nextPageToken) {
         *       request.pageToken = response.nextPageToken;
         *       cloudTasks.projects.locations.queues.list(request, handlePage);
         *     }
         *   };
         *
         *   cloudTasks.projects.locations.queues.list(request, handlePage);
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.list
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter `filter` can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: `<=, <, >=, >, !=, =, :`. The filter syntax is the same as described in [Stackdriver's Advanced Logs Filters](/logging/docs/view/advanced_filters).  Sample filter "app_engine_http_target: *".  Note that using filters might cause fewer queues than the requested_page size to be returned.
         * @param {integer=} params.pageSize Requested page size.  The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use ListQueuesResponse.next_page_token to determine if more queues exist.
         * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of ListQueuesResponse.next_page_token returned from the previous call to CloudTasks.ListQueues method. It is an error to switch the value of ListQueuesRequest.filter while iterating through pages.
         * @param {string} params.parent Required.  The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{parent}/queues').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            }, options),
            params: params,
            requiredParams: ['parent'],
            pathParams: ['parent'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudtasks.projects.locations.queues.patch
         *
         * @desc Updates a queue.  This method creates the queue if it does not exist and updates the queue if it does exist.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // The queue name.
         *     // The queue name must have the following format:
         *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
         *     // * `PROJECT_ID` can contain uppercase and lowercase letters,
         *     // numbers, hyphens, colons, and periods; that is, it must match
         *     // the regular expression: `[a-zA-Z\\d-:\\.]+`.
         *     // * `QUEUE_ID` can contain uppercase and lowercase letters,
         *     // numbers, and hyphens; that is, it must match the regular
         *     // expression: `[a-zA-Z\\d-]+`. The maximum length is 100
         *     // characters.
         *     // Caller-specified and required in CreateQueueRequest, after which
         *     // it becomes output only.
         *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body. Only these properties
         *       // will be changed.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.patch(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.patch
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The queue name.  The queue name must have the following format: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  * `PROJECT_ID` can contain uppercase and lowercase letters,   numbers, hyphens, colons, and periods; that is, it must match   the regular expression: `[a-zA-Z\\d-:\\.]+`. * `QUEUE_ID` can contain uppercase and lowercase letters,   numbers, and hyphens; that is, it must match the regular   expression: `[a-zA-Z\\d-]+`. The maximum length is 100   characters.  Caller-specified and required in CreateQueueRequest, after which it becomes output only.
         * @param {string=} params.updateMask A mask used to specify which fields of the queue are being updated.  If empty, then all fields will be updated.
         * @param {cloudtasks(v2beta2).Queue} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudtasks.projects.locations.queues.pause
         *
         * @desc Pauses the queue.  If a queue is paused then the system will stop executing the tasks in the queue until it is resumed via CloudTasks.ResumeQueue. Tasks can still be added when the queue is paused. The state of the queue is stored in Queue.queue_state; if paused it will be set to Queue.QueueState.PAUSED.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The queue name. For example:
         *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
         *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.pause(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.pause
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
         * @param {cloudtasks(v2beta2).PauseQueueRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        pause: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{name}:pause').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudtasks.projects.locations.queues.purge
         *
         * @desc Purges a queue by deleting all of its tasks.  All tasks created before this method is called are permanently deleted.  Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The queue name. For example:
         *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
         *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.purge(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.purge
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
         * @param {cloudtasks(v2beta2).PurgeQueueRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        purge: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{name}:purge').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudtasks.projects.locations.queues.resume
         *
         * @desc Resume a queue.  This method resumes a queue after it has been Queue.QueueState.PAUSED or Queue.QueueState.DISABLED. The state of a queue is stored in Queue.queue_state; after calling this method it will be set to Queue.QueueState.RUNNING.  WARNING: This method is only available to whitelisted users. Using this method carries some risk. Read [Overview of Queue Management and queue.yaml](/cloud-tasks/docs/queue-yaml) carefully and then sign up for [whitelist access to this method](https://goo.gl/Fe5mUy).  WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in [Managing Cloud Tasks Scaling Risks](/cloud-tasks/pdfs/managing-cloud-tasks-scaling-risks-2017-06-05.pdf).
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // Required.
         *     // The queue name. For example:
         *     // `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
         *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.resume(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.resume
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/location/LOCATION_ID/queues/QUEUE_ID`
         * @param {cloudtasks(v2beta2).ResumeQueueRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resume: function (params, options, callback) {
          if (typeof options === 'function') {
            callback = options;
            options = {};
          }
          options || (options = {});

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{name}:resume').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['name'],
            pathParams: ['name'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * cloudtasks.projects.locations.queues.setIamPolicy
         *
         * @desc Sets the access control policy for a Queue. Replaces any existing policy.  Authorization requires the following [Google IAM](/iam) permission on the specified resource parent:  * `cloudtasks.queues.setIamPolicy`
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy is being specified.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource_: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.setIamPolicy(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.setIamPolicy
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {cloudtasks(v2beta2).SetIamPolicyRequest} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{resource}:setIamPolicy').replace(/([^:]\/)\/+/g, '$1'),
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
         * cloudtasks.projects.locations.queues.testIamPermissions
         *
         * @desc Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a google.rpc.Code.NOT_FOUND error.  Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @example
         * // BEFORE RUNNING:
         * // ---------------
         * // 1. If not already done, enable the Cloud Tasks API
         * //    and check the quota for your project at
         * //    https://console.developers.google.com/apis/api/cloudtasks
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
         * var cloudTasks = google.cloudtasks('v2beta2');
         *
         * authorize(function(authClient) {
         *   var request = {
         *     // REQUIRED: The resource for which the policy detail is being requested.
         *     // See the operation documentation for the appropriate value for this field.
         *     resource_: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
         *
         *     resource: {
         *       // TODO: Add desired properties to the request body.
         *     },
         *
         *     auth: authClient,
         *   };
         *
         *   cloudTasks.projects.locations.queues.testIamPermissions(request, function(err, response) {
         *     if (err) {
         *       console.error(err);
         *       return;
         *     }
         *
         *     // TODO: Change code below to process the `response` object:
         *     console.log(JSON.stringify(response, null, 2));
         *   });
         * });
         *
         * function authorize(callback) {
         *   google.auth.getApplicationDefault(function(err, authClient) {
         *     if (err) {
         *       console.error('authentication failed: ', err);
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
         * @alias cloudtasks.projects.locations.queues.testIamPermissions
         * @memberOf! cloudtasks(v2beta2)
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {cloudtasks(v2beta2).TestIamPermissionsRequest} params.resource Request body data
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

          const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

          const parameters = {
            options: Object.assign({
              url: (rootUrl + '/v2beta2/{resource}:testIamPermissions').replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            }, options),
            params: params,
            requiredParams: ['resource'],
            pathParams: ['resource'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },
        tasks: {

          /**
           * cloudtasks.projects.locations.queues.tasks.acknowledge
           *
           * @desc Acknowledges a pull task.  The lease holder, that is, the entity that received this task in a PullTasksResponse, must call this method to indicate that the work associated with the task has finished.  The lease holder must acknowledge a task within the PullTasksRequest.lease_duration or the lease will expire and the task will become ready to be returned in a different PullTasksResponse. After the task is acknowledged, it will not be returned by a later CloudTasks.PullTasks, CloudTasks.GetTask, or CloudTasks.ListTasks.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The task name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.acknowledge(request, function(err) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.acknowledge
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           * @param {cloudtasks(v2beta2).AcknowledgeTaskRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          acknowledge: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}:acknowledge').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudtasks.projects.locations.queues.tasks.cancelLease
           *
           * @desc Cancel a pull task's lease.  The lease holder can use this method to cancel a task's lease by setting Task.schedule_time to now. This will make the task available to be leased to the next caller of CloudTasks.PullTasks.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The task name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.cancelLease(request, function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.cancelLease
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           * @param {cloudtasks(v2beta2).CancelLeaseRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          cancelLease: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}:cancelLease').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudtasks.projects.locations.queues.tasks.create
           *
           * @desc Creates a task and adds it to a queue.  To add multiple tasks at the same time, use [HTTP batching](/storage/docs/json_api/v1/how-tos/batch) or the batching documentation for your client library, for example https://developers.google.com/api-client-library/python/guide/batch.  Tasks cannot be updated after creation; there is no UpdateTask command.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The queue name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
           *     // The queue must already exist.
           *     parent: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.create(request, function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.create
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`  The queue must already exist.
           * @param {cloudtasks(v2beta2).CreateTaskRequest} params.resource Request body data
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

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{parent}/tasks').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudtasks.projects.locations.queues.tasks.delete
           *
           * @desc Deletes a task.  A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has completed successfully or permanently failed.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The task name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.delete(request, function(err) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.delete
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
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

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudtasks.projects.locations.queues.tasks.get
           *
           * @desc Gets a task.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The task name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.get(request, function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.get
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is Task.View.BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView` [Google IAM](/iam/) permission on the Task.name resource.
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

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}').replace(/([^:]\/)\/+/g, '$1'),
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
           * cloudtasks.projects.locations.queues.tasks.list
           *
           * @desc Lists the tasks in a queue.  By default response_view is Task.View.BASIC; not all information is retrieved by default due to performance considerations; ListTasksRequest.response_view controls the subset of information which is returned.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The queue name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
           *     parent: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
           *
           *     auth: authClient,
           *   };
           *
           *   var handlePage = function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     var tasksPage = response['tasks'];
           *     if (!tasksPage) {
           *       return;
           *     }
           *     for (var i = 0; i < tasksPage.length; i++) {
           *       // TODO: Change code below to process each resource in `tasksPage`:
           *       console.log(JSON.stringify(tasksPage[i], null, 2));
           *     }
           *
           *     if (response.nextPageToken) {
           *       request.pageToken = response.nextPageToken;
           *       cloudTasks.projects.locations.queues.tasks.list(request, handlePage);
           *     }
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.list(request, handlePage);
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.list
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string=} params.orderBy  Sort order used for the query. The fields supported for sorting are Task.schedule_time and PullMessage.tag. All results will be returned in ascending order. The default ordering is by Task.schedule_time.
           * @param {integer=} params.pageSize Requested page size. Fewer tasks than requested might be returned.  The maximum page size is 1000. If unspecified, the page size will be the maximum. Fewer tasks than requested might be returned, even if more tasks exist; use ListTasksResponse.next_page_token to determine if more tasks exist.
           * @param {string=} params.pageToken A token identifying the page of results to return.  To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of ListTasksResponse.next_page_token returned from the previous call to CloudTasks.ListTasks method.  The page token is valid for only 2 hours.
           * @param {string} params.parent Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
           * @param {string=} params.responseView The response_view specifies which subset of the Task will be returned.  By default response_view is Task.View.BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains.  Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView` [Google IAM](/iam/) permission on the Task.name resource.
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

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{parent}/tasks').replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              }, options),
              params: params,
              requiredParams: ['parent'],
              pathParams: ['parent'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudtasks.projects.locations.queues.tasks.pull
           *
           * @desc Pulls tasks from a pull queue and acquires a lease on them for a specified PullTasksRequest.lease_duration.  This method is invoked by the lease holder to obtain the lease. The lease holder must acknowledge the task via CloudTasks.AcknowledgeTask after they have performed the work associated with the task.  The payload is intended to store data that the lease holder needs to perform the work associated with the task. To return the payloads in the PullTasksResponse, set PullTasksRequest.response_view to Task.View.FULL.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The queue name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.pull(request, function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.pull
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The queue name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
           * @param {cloudtasks(v2beta2).PullTasksRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          pull: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}/tasks:pull').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudtasks.projects.locations.queues.tasks.renewLease
           *
           * @desc Renew the current lease of a pull task.  The lease holder can use this method to extend the lease by a new duration, starting from now. The new task lease will be returned in Task.schedule_time.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The task name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.renewLease(request, function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.renewLease
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           * @param {cloudtasks(v2beta2).RenewLeaseRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          renewLease: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}:renewLease').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          },

          /**
           * cloudtasks.projects.locations.queues.tasks.run
           *
           * @desc Forces a task to run now.  This command is meant to be used for manual debugging. For example, CloudTasks.RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now.  When this method is called, Cloud Tasks will dispatch the task to its target, even if the queue is Queue.QueueState.PAUSED.  The dispatched task is returned. That is, the task that is returned contains the Task.task_status after the task is dispatched but before the task is received by its target.  If Cloud Tasks receives a successful response from the task's handler, then the task will be deleted; otherwise the task's Task.schedule_time will be reset to the time that CloudTasks.RunTask was called plus the retry delay specified in the queue and task's RetryConfig.  CloudTasks.RunTask returns google.rpc.Code.NOT_FOUND when it is called on a task that has already succeeded or permanently failed. google.rpc.Code.FAILED_PRECONDITION is returned when CloudTasks.RunTask is called on task that is dispatched or already running.
           *
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Cloud Tasks API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/cloudtasks
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
           * var cloudTasks = google.cloudtasks('v2beta2');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // Required.
           *     // The task name. For example:
           *     // `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           *     name: 'projects/my-project/locations/my-location/queues/my-queue/tasks/my-task',  // TODO: Update placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   cloudTasks.projects.locations.queues.tasks.run(request, function(err, response) {
           *     if (err) {
           *       console.error(err);
           *       return;
           *     }
           *
           *     // TODO: Change code below to process the `response` object:
           *     console.log(JSON.stringify(response, null, 2));
           *   });
           * });
           *
           * function authorize(callback) {
           *   google.auth.getApplicationDefault(function(err, authClient) {
           *     if (err) {
           *       console.error('authentication failed: ', err);
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
           * @alias cloudtasks.projects.locations.queues.tasks.run
           * @memberOf! cloudtasks(v2beta2)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name Required.  The task name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`
           * @param {cloudtasks(v2beta2).RunTaskRequest} params.resource Request body data
           * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          run: function (params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options || (options = {});

            const rootUrl = options.rootUrl || 'https://cloudtasks.googleapis.com/';

            const parameters = {
              options: Object.assign({
                url: (rootUrl + '/v2beta2/{name}:run').replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              }, options),
              params: params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      }
    }
  };
}

/**
 * @typedef AcknowledgeTaskRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} scheduleTime Required.

The task&#39;s current schedule time, available in the Task.schedule_time
returned in PullTasksResponse.tasks or
CloudTasks.RenewLease. This restriction is to check that
the caller is acknowledging the correct task.
*/

/**
 * @typedef AppEngineHttpRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {cloudtasks(v2beta2).AppEngineRouting} appEngineRouting Task-level setting for App Engine routing.

If set, AppEngineHttpTarget.app_engine_routing_override is used for
all tasks in the queue, no matter what the setting is for the
task-level app_engine_routing.
* @property {object} headers HTTP request headers.

This map contains the header field names and values.
Headers can be set when the
[task is created](google.cloud.tasks.v2beta2.CloudTasks.CreateTask).
Repeated headers are not supported but a header value can contain commas.

Cloud Tasks sets some headers to default values:

* `User-Agent`: By default, this header is
  `&quot;AppEngine-Google; (+http://code.google.com/appengine)&quot;`.
  This header can be modified, but Cloud Tasks will append
  `&quot;AppEngine-Google; (+http://code.google.com/appengine)&quot;` to the
  modified `User-Agent`.

If the task has an AppEngineHttpRequest.payload, Cloud Tasks sets the
following headers:

* `Content-Type`: By default, the `Content-Type` header is set to
  `&quot;application/octet-stream&quot;`. The default can be overridden by explictly
  setting `Content-Type` to a particular media type when the
  [task is created](google.cloud.tasks.v2beta2.CloudTasks.CreateTask).
  For example, `Content-Type` can be set to `&quot;application/json&quot;`.
* `Content-Length`: This is computed by Cloud Tasks. This value is
  output only. It cannot be changed.

The headers below cannot be set or overridden:

* `Host`
* `X-Google-*`
* `X-AppEngine-*`

In addition, some App Engine headers, which contain
task-specific information, are also be sent to the task handler; see
[request headers](/appengine/docs/python/taskqueue/push/creating-handlers#reading_request_headers).
* @property {string} httpMethod The HTTP method to use for the request. The default is POST.

The app&#39;s request handler for the task&#39;s target URL must be able to handle
HTTP requests with this http_method, otherwise the task attempt will fail
with error code 405 &quot;Method Not Allowed&quot; because &quot;the method specified in
the Request-Line is not allowed for the resource identified by the
Request-URI&quot;. See
[Writing a push task request handler](/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
and the documentation for the request handlers in the language your app is
written in e.g.
[python RequestHandler](/appengine/docs/python/tools/webapp/requesthandlerclass).
* @property {string} payload Payload.

The payload will be sent as the HTTP message body. A message
body, and thus a payload, is allowed only if the HTTP method is
POST or PUT. It is an error to set a data payload on a task with
an incompatible HttpMethod.
* @property {string} relativeUrl The relative URL.

The relative URL must begin with &quot;/&quot; and must be a valid HTTP relative URL.
It can contain a path, query string arguments, and `#` fragments.
If the relative URL is empty, then the root path &quot;/&quot; will be used.
No spaces are allowed, and the maximum length allowed is 2083 characters.
*/

/**
 * @typedef AppEngineHttpTarget
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {cloudtasks(v2beta2).AppEngineRouting} appEngineRoutingOverride Overrides for the
task-level app_engine_routing.

If set, AppEngineHttpTarget.app_engine_routing_override is used for
all tasks in the queue, no matter what the setting is for the
task-level app_engine_routing.
*/

/**
 * @typedef AppEngineQueueConfig
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 * @property {cloudtasks(v2beta2).AppEngineRouting} appEngineRoutingOverride Deprecated. Use AppEngineTarget.app_engine_routing_override.
 */

/**
 * @typedef AppEngineRouting
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} host Output only.

The host that the task is sent to. For more information, see
[How Requests are Routed](/appengine/docs/standard/python/how-requests-are-routed).

The host is constructed as:


* `host = [application_domain_name]`&lt;/br&gt;
  `| [service] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
  `| [version] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
  `| [version_dot_service]+ &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
  `| [instance] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
  `| [instance_dot_service] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
  `| [instance_dot_version] + &#39;.&#39; + [application_domain_name]`&lt;/br&gt;
  `| [instance_dot_version_dot_service] + &#39;.&#39; + [application_domain_name]`

* `application_domain_name` = The domain name of the app, for
  example &lt;app-id&gt;.appspot.com, which is associated with the
  queue&#39;s project ID. Some tasks which were created using the App Engine
  SDK use a custom domain name.

* `service =` AppEngineRouting.service

* `version =` AppEngineRouting.version

* `version_dot_service =`
  AppEngineRouting.version `+ &#39;.&#39; +` AppEngineRouting.service

* `instance =` AppEngineRouting.instance

* `instance_dot_service =`
  AppEngineRouting.instance `+ &#39;.&#39; +` AppEngineRouting.service

* `instance_dot_version =`
  AppEngineRouting.instance `+ &#39;.&#39; +` AppEngineRouting.version

* `instance_dot_version_dot_service =`
  AppEngineRouting.instance `+ &#39;.&#39; +`
  AppEngineRouting.version `+ &#39;.&#39; +` AppEngineRouting.service

If AppEngineRouting.service is empty, then the task will be sent
to the service which is the default service when the task is attempted.

If AppEngineRouting.version is empty, then the task will be sent
to the version which is the default version when the task is attempted.

If AppEngineRouting.instance is empty, then the task will be sent
to an instance which is available when the task is attempted.

When AppEngineRouting.service is &quot;default&quot;,
AppEngineRouting.version is &quot;default&quot;, and
AppEngineRouting.instance is empty, AppEngineRouting.host is
shortened to just the `application_domain_name`.

If AppEngineRouting.service, AppEngineRouting.version, or
AppEngineRouting.instance is invalid, then the task will be sent
to the default version of the default service when the task is attempted.
* @property {string} instance App instance.

By default, the task is sent to an instance which is available when
the task is attempted.

Requests can only be sent to a specific instance if
[manual scaling is used in App Engine Standard](/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
App Engine Flex does not support instances. For more information, see
[App Engine Standard request routing](/appengine/docs/standard/python/how-requests-are-routed)
and [App Engine Flex request routing](/appengine/docs/flexible/python/how-requests-are-routed).
* @property {string} service App service.

By default, the task is sent to the service which is the default
service when the task is attempted (&quot;default&quot;).

For some queues or tasks which were created using the App Engine Task Queue
API, AppEngineRouting.host is not parsable into
AppEngineRouting.service, AppEngineRouting.version, and
AppEngineRouting.instance. For example, some tasks which were created
using the App Engine SDK use a custom domain name; custom domains are not
parsed by Cloud Tasks. If AppEngineRouting.host is not parsable, then
AppEngineRouting.service, AppEngineRouting.version, and
AppEngineRouting.instance are the empty string.
* @property {string} version App version.

By default, the task is sent to the version which is the default
version when the task is attempted (&quot;default&quot;).

For some queues or tasks which were created using the App Engine Task Queue
API, AppEngineRouting.host is not parsable into
AppEngineRouting.service, AppEngineRouting.version, and
AppEngineRouting.instance. For example, some tasks which were created
using the App Engine SDK use a custom domain name; custom domains are not
parsed by Cloud Tasks. If AppEngineRouting.host is not parsable, then
AppEngineRouting.service, AppEngineRouting.version, and
AppEngineRouting.instance are the empty string.
*/

/**
 * @typedef AppEngineTaskTarget
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 * @property {cloudtasks(v2beta2).AppEngineRouting} appEngineRouting Deprecated. Use AppEngineHttpRequest.app_engine_routing.
 * @property {object} headers Deprecated. Use AppEngineHttpRequest.headers.
 * @property {string} httpMethod Deprecated. Use AppEngineHttpRequest.http_method.
 * @property {string} payload Deprecated. Use AppEngineHttpRequest.payload.
 * @property {string} relativeUrl Deprecated. Use AppEngineHttpRequest.relative_url.
 */

/**
 * @typedef AttemptStatus
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} dispatchTime Output only.

The time that this attempt was dispatched.

`dispatch_time` will be truncated to the nearest microsecond.
* @property {cloudtasks(v2beta2).Status} responseStatus Output only.

The response from the target for this attempt.

If the task has not been attempted or the task is currently running
then the response status is google.rpc.Code.UNKNOWN.
* @property {string} responseTime Output only.

The time that this attempt response was received.

`response_time` will be truncated to the nearest microsecond.
* @property {string} scheduleTime Output only.

The time that this attempt was scheduled.

`schedule_time` will be truncated to the nearest microsecond.
*/

/**
 * @typedef Binding
 * @memberOf! cloudtasks(v2beta2)
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
 * @typedef CancelLeaseRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} responseView The response_view specifies which subset of the Task will be
returned.

By default response_view is Task.View.BASIC; not all
information is retrieved by default because some data, such as
payloads, might be desirable to return only when needed because
of its large size or because of the sensitivity of data that it
contains.

Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
[Google IAM](/iam/) permission on the
Task.name resource.
* @property {string} scheduleTime Required.

The task&#39;s current schedule time, available in the Task.schedule_time
returned in PullTasksResponse.tasks or
CloudTasks.RenewLease. This restriction is to check that
the caller is canceling the correct task.
*/

/**
 * @typedef CreateTaskRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} responseView The response_view specifies which subset of the Task will be
returned.

By default response_view is Task.View.BASIC; not all
information is retrieved by default because some data, such as
payloads, might be desirable to return only when needed because
of its large size or because of the sensitivity of data that it
contains.

Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
[Google IAM](/iam/) permission on the
Task.name resource.
* @property {cloudtasks(v2beta2).Task} task Required.

The task to add.

Task names have the following format:
`projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`.
The user can optionally specify a name for the task in
Task.name. If a name is not specified then the system will
generate a random unique task id, which will be returned in the
response&#39;s Task.name.

Explicitly specifying a Task.name enables task
de-duplication. If a task&#39;s name is identical to the name of an
existing task or a task that was deleted or completed within the
last ~10 days then the call to CloudTasks.CreateTask will
fail with google.rpc.Code.ALREADY_EXISTS. Because there is an
extra lookup cost to identify duplicate task names, these
CloudTasks.CreateTask calls have significantly increased
latency. Using hashed strings for the task id or for the prefix
of the task id is recommended. Choosing task ids that are
sequential or have sequential prefixes, for example using a
timestamp, causes an increase in latency and error rates in all
task commands. The infrastructure relies on an approximately
uniform distribution of task ids to store and serve tasks
efficiently.

If Task.schedule_time is not set or is in the past then Cloud
Tasks will set it to the current time.
*/

/**
 * @typedef Empty
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef GetIamPolicyRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef ListLocationsResponse
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 * @property {cloudtasks(v2beta2).Location[]} locations A list of locations that matches the specified filter in the request.
 * @property {string} nextPageToken The standard List next-page token.
 */

/**
 * @typedef ListQueuesResponse
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} nextPageToken A token to retrieve next page of results.

To return the next page of results, call
CloudTasks.ListQueues with this value as the
ListQueuesRequest.page_token.

If the next_page_token is empty, there are no more results.

The page token is valid for only 2 hours.
* @property {cloudtasks(v2beta2).Queue[]} queues The list of queues.
*/

/**
 * @typedef ListTasksResponse
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} nextPageToken A token to retrieve next page of results.

To return the next page of results, call
CloudTasks.ListTasks with this value as the
ListTasksRequest.page_token.

If the next_page_token is empty, there are no more results.
* @property {cloudtasks(v2beta2).Task[]} tasks The list of tasks.
*/

/**
 * @typedef Location
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {object} labels Cross-service attributes for the location. For example

    {&quot;cloud.googleapis.com/region&quot;: &quot;us-east1&quot;}
* @property {string} locationId The canonical id for this location. For example: `&quot;us-east1&quot;`.
* @property {object} metadata Service-specific metadata. For example the available capacity at the given
location.
* @property {string} name Resource name for the location, which may vary between implementations.
For example: `&quot;projects/example-project/locations/us-east1&quot;`
*/

/**
 * @typedef PauseQueueRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef Policy
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {cloudtasks(v2beta2).Binding[]} bindings Associates a list of `members` to a `role`.
`bindings` with no members will result in an error.
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
*/

/**
 * @typedef PullMessage
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} payload A data payload consumed by the task worker to execute the task.
* @property {string} tag A meta-data tag for this task.

This value is used by CloudTasks.PullTasks calls when
PullTasksRequest.filter is `tag=&lt;tag&gt;`.

The tag must be less than 500 bytes.
*/

/**
 * @typedef PullQueueConfig
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef PullTarget
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef PullTaskTarget
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 * @property {string} payload Deprecated. Use PullMessage.payload.
 * @property {string} tag Deprecated. Use PullMessage.tag.
 */

/**
 * @typedef PullTasksRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} filter `filter` can be used to specify a subset of tasks to lease.

When `filter` is set to `tag=&lt;my-tag&gt;` then the
PullTasksResponse will contain only tasks whose
PullMessage.tag is equal to `&lt;my-tag&gt;`. `&lt;my-tag&gt;` can be
a bytes encoded as a string and must be less than 500 bytes.
If `&lt;my-tag&gt;` includes whitespace or special characters (characters which
aren&#39;t letters, numbers, or underscores), then it must be double-quoted.
Double quotes and backslashes in quoted strings must be escaped by
preceding it with a backslash (`\`).

When `filter` is set to `tag=oldest_tag()`, only tasks which have the same
tag as the task with the oldest schedule_time will be returned.

Grammar Syntax:

* `filter = &quot;tag=&quot; comparable`

*  `comparable = tag | function`

* `tag = string | bytes`

* `function = &quot;oldest_tag()&quot;`



The `oldest_tag()` function returns tasks which have the same tag as the
oldest task (ordered by schedule time).
* @property {string} leaseDuration The duration of the lease.

Each task returned in the PullTasksResponse will have its
Task.schedule_time set to the current time plus the
`lease_duration`. A task that has been returned in a
PullTasksResponse is leased -- that task will not be
returned in a different PullTasksResponse before the
Task.schedule_time.

After the lease holder has successfully finished the work
associated with the task, the lease holder must call
CloudTasks.AcknowledgeTask. If the task is not acknowledged
via CloudTasks.AcknowledgeTask before the
Task.schedule_time then it will be returned in a later
PullTasksResponse so that another lease holder can process
it.

The maximum lease duration is 1 week.
`lease_duration` will be truncated to the nearest second.
* @property {integer} maxTasks The maximum number of tasks to lease. The maximum that can be
requested is 1000.
* @property {string} responseView The response_view specifies which subset of the Task will be
returned.

By default response_view is Task.View.BASIC; not all
information is retrieved by default because some data, such as
payloads, might be desirable to return only when needed because
of its large size or because of the sensitivity of data that it
contains.

Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
[Google IAM](/iam/) permission on the
Task.name resource.
*/

/**
 * @typedef PullTasksResponse
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 * @property {cloudtasks(v2beta2).Task[]} tasks The leased tasks.
 */

/**
 * @typedef PurgeQueueRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef Queue
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {cloudtasks(v2beta2).AppEngineHttpTarget} appEngineHttpTarget App Engine HTTP target.

An App Engine queue is a queue that has an AppEngineHttpTarget.
* @property {cloudtasks(v2beta2).AppEngineQueueConfig} appEngineQueueConfig Deprecated. Use Queue.app_engine_http_target.
* @property {string} name The queue name.

The queue name must have the following format:
`projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`

* `PROJECT_ID` can contain uppercase and lowercase letters,
  numbers, hyphens, colons, and periods; that is, it must match
  the regular expression: `[a-zA-Z\\d-:\\.]+`.
* `QUEUE_ID` can contain uppercase and lowercase letters,
  numbers, and hyphens; that is, it must match the regular
  expression: `[a-zA-Z\\d-]+`. The maximum length is 100
  characters.

Caller-specified and required in CreateQueueRequest, after which
it becomes output only.
* @property {cloudtasks(v2beta2).PullQueueConfig} pullQueueConfig Deprecated. Use Queue.pull_target.
* @property {cloudtasks(v2beta2).PullTarget} pullTarget Pull target.

A pull queue is a queue that has a PullTarget.
* @property {string} purgeTime Output only.

The last time this queue was purged. All tasks that were
created before this time were purged.

A queue can be purged using CloudTasks.PurgeQueue, the
[App Engine Task Queue SDK, or the Cloud Console](/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).

Purge time will be truncated to the nearest microsecond. Purge
time will be zero if the queue has never been purged.
* @property {string} queueState Output only.

The state of the queue.

`queue_state` can only be changed by called
CloudTasks.PauseQueue, CloudTasks.ResumeQueue, or uploading
[queue.yaml](/appengine/docs/python/config/queueref).
CloudTasks.UpdateQueue cannot be used to change `queue_state`.
* @property {cloudtasks(v2beta2).RetryConfig} retryConfig Settings that determine the retry behavior.

* For tasks created using Cloud Tasks: the queue-level retry settings
  apply to all tasks in the queue that were created using Cloud Tasks.
  Retry settings cannot be set on individual tasks.
* For tasks created using the App Engine SDK: the queue-level retry
  settings apply to all tasks in the queue which do not have retry settings
  explicitly set on the task and were created by the App Engine SDK. See
  [App Engine documentation](/appengine/docs/standard/python/taskqueue/push/retrying-tasks).
* @property {cloudtasks(v2beta2).ThrottleConfig} throttleConfig Config for throttling task dispatches.
*/

/**
 * @typedef RenewLeaseRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} newLeaseDuration Required.

The desired new lease duration, starting from now.


The maximum lease duration is 1 week.
`new_lease_duration` will be truncated to the nearest second.
* @property {string} responseView The response_view specifies which subset of the Task will be
returned.

By default response_view is Task.View.BASIC; not all
information is retrieved by default because some data, such as
payloads, might be desirable to return only when needed because
of its large size or because of the sensitivity of data that it
contains.

Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
[Google IAM](/iam/) permission on the
Task.name resource.
* @property {string} scheduleTime Required.

The task&#39;s current schedule time, available in the Task.schedule_time
returned in PullTasksResponse.tasks or
CloudTasks.RenewLease. This restriction is to check that
the caller is renewing the correct task.
*/

/**
 * @typedef ResumeQueueRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
 */

/**
 * @typedef RetryConfig
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {integer} maxAttempts The maximum number of attempts for a task.

Cloud Tasks will attempt the task `max_attempts` times (that
is, if the first attempt fails, then there will be
`max_attempts - 1` retries).  Must be &gt; 0.
* @property {string} maxBackoff The maximum amount of time to wait before retrying a task after
it fails. The default is 1 hour.

* For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
  this field is 1 hour by default.
* For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this field
  is output only and always 0.

`max_backoff` will be truncated to the nearest second.
* @property {integer} maxDoublings The maximum number of times that the interval between failed task
retries will be doubled before the increase becomes constant. The
constant is: 2**(max_doublings - 1) *
RetryConfig.min_backoff.

* For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
  this field is 16 by default.
* For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this field
  is output only and always 0.
* @property {string} minBackoff The minimum amount of time to wait before retrying a task after
it fails.

* For [App Engine queues](google.cloud.tasks.v2beta2.AppEngineHttpTarget),
  this field is 0.1 seconds by default.
* For [pull queues](google.cloud.tasks.v2beta2.PullTarget), this
  field is output only and always 0.

`min_backoff` will be truncated to the nearest second.
* @property {string} taskAgeLimit If positive, task_age_limit specifies the time limit for retrying a failed
task, measured from when the task was first run. If specified with
RetryConfig.max_attempts, the task will be retried until both
limits are reached.

If zero, then the task age is unlimited. This field is zero by default.

`task_age_limit` will be truncated to the nearest second.
* @property {boolean} unlimitedAttempts If true, then the number of attempts is unlimited.
*/

/**
 * @typedef RunTaskRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} responseView The response_view specifies which subset of the Task will be
returned.

By default response_view is Task.View.BASIC; not all
information is retrieved by default because some data, such as
payloads, might be desirable to return only when needed because
of its large size or because of the sensitivity of data that it
contains.

Authorization for Task.View.FULL requires `cloudtasks.tasks.fullView`
[Google IAM](/iam/) permission on the
Task.name resource.
*/

/**
 * @typedef SetIamPolicyRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {cloudtasks(v2beta2).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of
the policy is limited to a few 10s of KB. An empty policy is a
valid policy but certain Cloud Platform services (such as Projects)
might reject them.
*/

/**
 * @typedef Status
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There is a common set of
message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/

/**
 * @typedef Task
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {cloudtasks(v2beta2).AppEngineHttpRequest} appEngineHttpRequest App Engine HTTP request that is sent to the task&#39;s target. Can be set
only if Queue.app_engine_http_target is set.

An App Engine task is a task that has AppEngineHttpRequest set.
* @property {cloudtasks(v2beta2).AppEngineTaskTarget} appEngineTaskTarget Deprecated. Use Task.app_engine_http_request.
* @property {string} createTime Output only.

The time that the task was created.

`create_time` will be truncated to the nearest second.
* @property {string} name The task name.

The task name must have the following format:
`projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID`

* `PROJECT_ID` can contain uppercase and lowercase letters,
  numbers, hyphens, colons, and periods; that is, it must match
  the regular expression: `[a-zA-Z\\d-:\\.]+`.
* `QUEUE_ID` can contain uppercase and lowercase letters,
  numbers, and hyphens; that is, it must match the regular
  expression: `[a-zA-Z\\d-]+`. The maximum length is 100
  characters.
* `TASK_ID` contain uppercase and lowercase letters, numbers,
  underscores, and hyphens; that is, it must match the regular
  expression: `[a-zA-Z\\d_-]+`. The maximum length is 500
  characters.

Optionally caller-specified in CreateTaskRequest.
* @property {cloudtasks(v2beta2).PullMessage} pullMessage Pull message contains data that should be used by the caller of
CloudTasks.PullTasks to process the task. Can be set only if
Queue.pull_target is set.

A pull task is a task that has PullMessage set.
* @property {cloudtasks(v2beta2).PullTaskTarget} pullTaskTarget Deprecated. Use Task.pull_message.
* @property {string} scheduleTime The time when the task is scheduled to be attempted.

For pull queues, this is the time when the task is available to
be leased; if a task is currently leased, this is the time when
the current lease expires, that is, the time that the task was
leased plus the PullTasksRequest.lease_duration.

For App Engine queues, this is when the task will be attempted or retried.

`schedule_time` will be truncated to the nearest microsecond.
* @property {cloudtasks(v2beta2).TaskStatus} taskStatus Output only.

Task status.
* @property {string} view Output only.

The view specifies which subset of the Task has been
returned.
*/

/**
 * @typedef TaskStatus
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string} attemptDispatchCount Output only.

The number of attempts dispatched. This count includes tasks which have
been dispatched but haven&#39;t received a response.
* @property {string} attemptResponseCount Output only.

The number of attempts which have received a response.

This field is not calculated for
[pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
* @property {cloudtasks(v2beta2).AttemptStatus} firstAttemptStatus Output only.

The status of the task&#39;s first attempt.

Only AttemptStatus.dispatch_time will be set.
The other AttemptStatus information is not retained by Cloud Tasks.

This field is not calculated for
[pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
* @property {cloudtasks(v2beta2).AttemptStatus} lastAttemptStatus Output only.

The status of the task&#39;s last attempt.

This field is not calculated for
[pull tasks](google.cloud.tasks.v2beta2.PullTaskTarget).
*/

/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with
wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more
information see
[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
*/

/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is
allowed.
*/

/**
 * @typedef ThrottleConfig
 * @memberOf! cloudtasks(v2beta2)
 * @type object
* @property {integer} maxBurstSize Output only.

The max burst size limits how fast the queue is processed when
many tasks are in the queue and the rate is high. This field
allows the queue to have a high rate so processing starts shortly
after a task is enqueued, but still limits resource usage when
many tasks are enqueued in a short period of time.

* For App Engine queues, if
  ThrottleConfig.max_tasks_dispatched_per_second is 1, this
  field is 10; otherwise this field is
  ThrottleConfig.max_tasks_dispatched_per_second / 5.
* For pull queues, this field is output only and always 10,000.

Note: For App Engine queues that were created through
`queue.yaml/xml`, `max_burst_size` might not have the same
settings as specified above; CloudTasks.UpdateQueue can be
used to set `max_burst_size` only to the values specified above.

This field has the same meaning as
[bucket_size in queue.yaml](/appengine/docs/standard/python/config/queueref#bucket_size).
* @property {integer} maxOutstandingTasks The maximum number of outstanding tasks that Cloud Tasks allows
to be dispatched for this queue. After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
outstanding requests decreases.

The maximum allowed value is 5,000.

* For App Engine queues, this field is 10 by default.
* For pull queues, this field is output only and always -1, which
  indicates no limit.

This field has the same meaning as
[max_concurrent_requests in queue.yaml](/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
* @property {number} maxTasksDispatchedPerSecond The maximum rate at which tasks are dispatched from this
queue.

The maximum allowed value is 500.

* For App Engine queues, this field is 1 by default.
* For pull queues, this field is output only and always 10,000.

This field has the same meaning as
[rate in queue.yaml](/appengine/docs/standard/python/config/queueref#rate).
*/
export = Cloudtasks;
