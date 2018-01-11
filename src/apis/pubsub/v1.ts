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
 * Google Cloud Pub/Sub API
 *
 * Provides reliable, many-to-many, asynchronous messaging between applications.
 *
 * @example
 * const google = require('googleapis');
 * const pubsub = google.pubsub('v1');
 *
 * @namespace pubsub
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Pubsub
 */
function Pubsub(options) {
  const self = this;
  self._options = options || {};
  self.projects = {
    snapshots: {
      /**
       * pubsub.projects.snapshots.create
       * @desc Creates a snapshot from the requested subscription. If the
       * snapshot already exists, returns `ALREADY_EXISTS`. If the requested
       * subscription doesn't exist, returns `NOT_FOUND`. If the backlog in the
       * subscription is too old -- and the resulting snapshot would expire in
       * less than 1 hour -- then `FAILED_PRECONDITION` is returned. See also
       * the `Snapshot.expire_time` field.  If the name is not provided in the
       * request, the server will assign a random name for this snapshot on the
       * same project as the subscription, conforming to the [resource name
       * format](https://cloud.google.com/pubsub/docs/overview#names). The
       * generated name is populated in the returned Snapshot object. Note that
       * for REST API requests, you must specify a name in the request.
       * @alias pubsub.projects.snapshots.create
       * @memberOf! pubsub(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.name Optional user-provided name for this snapshot. If the name is not provided in the request, the server will assign a random name for this snapshot on the same project as the subscription. Note that for REST API requests, you must specify a name. Format is `projects/{project}/snapshots/{snap}`.
       * @param {pubsub(v1).CreateSnapshotRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.snapshots.delete
          * @desc Removes an existing snapshot. All messages retained in the
          * snapshot are immediately dropped. After a snapshot is deleted, a new
          * one may be created with the same name, but the new one has no
          * association with the old snapshot or its subscription, unless the
          * same subscription is specified.
          * @alias pubsub.projects.snapshots.delete
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.snapshot The name of the snapshot to delete. Format is `projects/{project}/snapshots/{snap}`.
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{snapshot}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['snapshot'],
          pathParams: ['snapshot'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.snapshots.getIamPolicy
          * @desc Gets the access control policy for a resource. Returns an
          * empty policy if the resource exists and does not have a policy set.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // REQUIRED: The resource for which the policy is being
          * requested.
          *     // See the operation documentation for the appropriate value for
          * this field. resource_: 'projects/my-project/snapshots/my-snapshot',
          * // TODO: Update placeholder value.
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.snapshots.getIamPolicy(request, function(err,
          * response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.snapshots.getIamPolicy
          * @memberOf! pubsub(v1)
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          * pubsub.projects.snapshots.list
          * @desc Lists the existing snapshots.
          * @alias pubsub.projects.snapshots.list
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Maximum number of snapshots to return.
          * @param {string=} params.pageToken The value returned by the last `ListSnapshotsResponse`; indicates that this is a continuation of a prior `ListSnapshots` call, and that the system should return the next page of data.
          * @param {string} params.project The name of the cloud project that snapshots belong to. Format is `projects/{project}`.
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{project}/snapshots')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['project'],
          pathParams: ['project'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.snapshots.patch
          * @desc Updates an existing snapshot. Note that certain properties of
          * a snapshot are not modifiable.
          * @alias pubsub.projects.snapshots.patch
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the snapshot.
          * @param {pubsub(v1).UpdateSnapshotRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          * pubsub.projects.snapshots.setIamPolicy
          * @desc Sets the access control policy on the specified resource.
          * Replaces any existing policy.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // REQUIRED: The resource for which the policy is being
          * specified.
          *     // See the operation documentation for the appropriate value for
          * this field. resource_: 'projects/my-project/snapshots/my-snapshot',
          * // TODO: Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.snapshots.setIamPolicy(request, function(err,
          * response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.snapshots.setIamPolicy
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
          * @param {pubsub(v1).SetIamPolicyRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          * pubsub.projects.snapshots.testIamPermissions
          * @desc Returns permissions that a caller has on the specified
          * resource. If the resource does not exist, this will return an empty
          * set of permissions, not a NOT_FOUND error.  Note: This operation is
          * designed to be used for building permission-aware UIs and
          * command-line tools, not for authorization checking. This operation
          * may "fail open" without warning.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // REQUIRED: The resource for which the policy detail is being
          * requested.
          *     // See the operation documentation for the appropriate value for
          * this field. resource_: 'projects/my-project/snapshots/my-snapshot',
          * // TODO: Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.snapshots.testIamPermissions(request,
          * function(err, response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.snapshots.testIamPermissions
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
          * @param {pubsub(v1).TestIamPermissionsRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
    subscriptions: {
      /**
       * pubsub.projects.subscriptions.acknowledge
       * @desc Acknowledges the messages associated with the `ack_ids` in the
       * `AcknowledgeRequest`. The Pub/Sub system can remove the relevant
       * messages from the subscription.  Acknowledging a message whose ack
       * deadline has expired may succeed, but such a message may be redelivered
       * later. Acknowledging a message more than once will not result in an
       * error.
       * @example
       * // BEFORE RUNNING:
       * // ---------------
       * // 1. If not already done, enable the Google Cloud Pub/Sub API
       * //    and check the quota for your project at
       * //    https://console.developers.google.com/apis/api/pubsub
       * // 2. This sample uses Application Default Credentials for
       * authentication.
       * //    If not already done, install the gcloud CLI from
       * //    https://cloud.google.com/sdk and run
       * //    `gcloud beta auth application-default login`.
       * //    For more information, see
       * //
       * https://developers.google.com/identity/protocols/application-default-credentials
       * // 3. Install the Node.js client library by running
       * //    `npm install googleapis --save`
       *
       * var google = require('googleapis');
       * var pubsub = google.pubsub('v1');
       *
       * authorize(function(authClient) {
       *   var request = {
       *     // The subscription whose message is being acknowledged.
       *     // Format is `projects/{project}/subscriptions/{sub}`.
       *     subscription: 'projects/my-project/subscriptions/my-subscription',
       * // TODO: Update placeholder value.
       *
       *     resource: {
       *       // TODO: Add desired properties to the request body.
       *     },
       *
       *     auth: authClient,
       *   };
       *
       *   pubsub.projects.subscriptions.acknowledge(request, function(err) {
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
       *     if (authClient.createScopedRequired &&
       * authClient.createScopedRequired()) { var scopes =
       * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
       * authClient.createScoped(scopes);
       *     }
       *     callback(authClient);
       *   });
       * }
       * @alias pubsub.projects.subscriptions.acknowledge
       * @memberOf! pubsub(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.subscription The subscription whose message is being acknowledged. Format is `projects/{project}/subscriptions/{sub}`.
       * @param {pubsub(v1).AcknowledgeRequest} params.resource Request body data
       * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      acknowledge(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}:acknowledge')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.create
          * @desc Creates a subscription to a given topic. If the subscription
          * already exists, returns `ALREADY_EXISTS`. If the corresponding topic
          * doesn't exist, returns `NOT_FOUND`.  If the name is not provided in
          * the request, the server will assign a random name for this
          * subscription on the same project as the topic, conforming to the
          * [resource name
          * format](https://cloud.google.com/pubsub/docs/overview#names). The
          * generated name is populated in the returned Subscription object.
          * Note that for REST API requests, you must specify a name in the
          * request.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The name of the subscription. It must have the format
          *     // `"projects/{project}/subscriptions/{subscription}"`.
          * `{subscription}` must
          *     // start with a letter, and contain only letters (`[A-Za-z]`),
          * numbers
          *     // (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`),
          * tildes (`~`),
          *     // plus (`+`) or percent signs (`%`). It must be between 3 and
          * 255 characters
          *     // in length, and it must not start with `"goog"`.
          *     name: 'projects/my-project/subscriptions/my-subscription',  //
          * TODO: Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body. All
          * existing properties
          *       // will be replaced.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.create(request, function(err,
          * response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.create
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
          * @param {pubsub(v1).Subscription} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                method: 'PUT'
              },
              options),
          params,
          requiredParams: ['name'],
          pathParams: ['name'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.delete
          * @desc Deletes an existing subscription. All messages retained in the
          * subscription are immediately dropped. Calls to `Pull` after deletion
          * will return `NOT_FOUND`. After a subscription is deleted, a new one
          * may be created with the same name, but the new one has no
          * association with the old subscription or its topic unless the same
          * topic is specified.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The subscription to delete.
          *     // Format is `projects/{project}/subscriptions/{sub}`.
          *     subscription:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.delete(request, function(err) {
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.delete
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.subscription The subscription to delete. Format is `projects/{project}/subscriptions/{sub}`.
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'DELETE'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.get
          * @desc Gets the configuration details of a subscription.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The name of the subscription to get.
          *     // Format is `projects/{project}/subscriptions/{sub}`.
          *     subscription:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.get(request, function(err, response)
          * { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.get
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.subscription The name of the subscription to get. Format is `projects/{project}/subscriptions/{sub}`.
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.getIamPolicy
          * @desc Gets the access control policy for a resource. Returns an
          * empty policy if the resource exists and does not have a policy set.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // REQUIRED: The resource for which the policy is being
          * requested.
          *     // See the operation documentation for the appropriate value for
          * this field. resource_:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.getIamPolicy(request, function(err,
          * response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.getIamPolicy
          * @memberOf! pubsub(v1)
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          * pubsub.projects.subscriptions.list
          * @desc Lists matching subscriptions.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The name of the cloud project that subscriptions belong to.
          *     // Format is `projects/{project}`.
          *     project: 'projects/my-project',  // TODO: Update placeholder
          * value.
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
          *     var subscriptionsPage = response['subscriptions'];
          *     if (!subscriptionsPage) {
          *       return;
          *     }
          *     for (var i = 0; i < subscriptionsPage.length; i++) {
          *       // TODO: Change code below to process each resource in
          * `subscriptionsPage`:
          *       console.log(JSON.stringify(subscriptionsPage[i], null, 2));
          *     }
          *
          *     if (response.nextPageToken) {
          *       request.pageToken = response.nextPageToken;
          *       pubsub.projects.subscriptions.list(request, handlePage);
          *     }
          *   };
          *
          *   pubsub.projects.subscriptions.list(request, handlePage);
          * });
          *
          * function authorize(callback) {
          *   google.auth.getApplicationDefault(function(err, authClient) {
          *     if (err) {
          *       console.error('authentication failed: ', err);
          *       return;
          *     }
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.list
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {integer=} params.pageSize Maximum number of subscriptions to return.
          * @param {string=} params.pageToken The value returned by the last `ListSubscriptionsResponse`; indicates that this is a continuation of a prior `ListSubscriptions` call, and that the system should return the next page of data.
          * @param {string} params.project The name of the cloud project that subscriptions belong to. Format is `projects/{project}`.
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{project}/subscriptions')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'GET'
              },
              options),
          params,
          requiredParams: ['project'],
          pathParams: ['project'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.modifyAckDeadline
          * @desc Modifies the ack deadline for a specific message. This method
          * is useful to indicate that more time is needed to process a message
          * by the subscriber, or to make the message available for redelivery
          * if the processing was interrupted. Note that this does not modify
          * the subscription-level `ackDeadlineSeconds` used for subsequent
          * messages.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The name of the subscription.
          *     // Format is `projects/{project}/subscriptions/{sub}`.
          *     subscription:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.modifyAckDeadline(request,
          * function(err) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.modifyAckDeadline
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.subscription The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
          * @param {pubsub(v1).ModifyAckDeadlineRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      modifyAckDeadline(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}:modifyAckDeadline')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.modifyPushConfig
          * @desc Modifies the `PushConfig` for a specified subscription.  This
          * may be used to change a push subscription to a pull one (signified
          * by an empty `PushConfig`) or vice versa, or change the endpoint URL
          * and other attributes of a push subscription. Messages will
          * accumulate for delivery continuously through the call regardless of
          * changes to the `PushConfig`.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The name of the subscription.
          *     // Format is `projects/{project}/subscriptions/{sub}`.
          *     subscription:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.modifyPushConfig(request,
          * function(err) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.modifyPushConfig
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.subscription The name of the subscription. Format is `projects/{project}/subscriptions/{sub}`.
          * @param {pubsub(v1).ModifyPushConfigRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      modifyPushConfig(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}:modifyPushConfig')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.patch
          * @desc Updates an existing subscription. Note that certain properties
          * of a subscription, such as its topic, are not modifiable.
          * @alias pubsub.projects.subscriptions.patch
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.name The name of the subscription. It must have the format `"projects/{project}/subscriptions/{subscription}"`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
          * @param {pubsub(v1).UpdateSubscriptionRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          * pubsub.projects.subscriptions.pull
          * @desc Pulls messages from the server. Returns an empty list if there
          * are no messages available in the backlog. The server may return
          * `UNAVAILABLE` if there are too many concurrent pull requests pending
          * for the given subscription.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // The subscription from which messages should be pulled.
          *     // Format is `projects/{project}/subscriptions/{sub}`.
          *     subscription:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.pull(request, function(err,
          * response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.pull
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.subscription The subscription from which messages should be pulled. Format is `projects/{project}/subscriptions/{sub}`.
          * @param {pubsub(v1).PullRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      pull(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}:pull')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.seek
          * @desc Seeks an existing subscription to a point in time or to a
          * given snapshot, whichever is provided in the request.
          * @alias pubsub.projects.subscriptions.seek
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.subscription The subscription to affect.
          * @param {pubsub(v1).SeekRequest} params.resource Request body data
          * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
          * @param {callback} callback The callback that handles the response.
          * @return {object} Request object
          */
      seek(params, options, callback) {
        if (typeof options === 'function') {
          callback = options;
          options = {};
        }
        options = options || {};
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
        const parameters = {
          options: Object.assign(
              {
                url: (rootUrl + '/v1/{subscription}:seek')
                         .replace(/([^:]\/)\/+/g, '$1'),
                method: 'POST'
              },
              options),
          params,
          requiredParams: ['subscription'],
          pathParams: ['subscription'],
          context: self
        };
        return createAPIRequest(parameters, callback);
      }, /**
          * pubsub.projects.subscriptions.setIamPolicy
          * @desc Sets the access control policy on the specified resource.
          * Replaces any existing policy.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // REQUIRED: The resource for which the policy is being
          * specified.
          *     // See the operation documentation for the appropriate value for
          * this field. resource_:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.setIamPolicy(request, function(err,
          * response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.setIamPolicy
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
          * @param {pubsub(v1).SetIamPolicyRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          * pubsub.projects.subscriptions.testIamPermissions
          * @desc Returns permissions that a caller has on the specified
          * resource. If the resource does not exist, this will return an empty
          * set of permissions, not a NOT_FOUND error.  Note: This operation is
          * designed to be used for building permission-aware UIs and
          * command-line tools, not for authorization checking. This operation
          * may "fail open" without warning.
          * @example
          * // BEFORE RUNNING:
          * // ---------------
          * // 1. If not already done, enable the Google Cloud Pub/Sub API
          * //    and check the quota for your project at
          * //    https://console.developers.google.com/apis/api/pubsub
          * // 2. This sample uses Application Default Credentials for
          * authentication.
          * //    If not already done, install the gcloud CLI from
          * //    https://cloud.google.com/sdk and run
          * //    `gcloud beta auth application-default login`.
          * //    For more information, see
          * //
          * https://developers.google.com/identity/protocols/application-default-credentials
          * // 3. Install the Node.js client library by running
          * //    `npm install googleapis --save`
          *
          * var google = require('googleapis');
          * var pubsub = google.pubsub('v1');
          *
          * authorize(function(authClient) {
          *   var request = {
          *     // REQUIRED: The resource for which the policy detail is being
          * requested.
          *     // See the operation documentation for the appropriate value for
          * this field. resource_:
          * 'projects/my-project/subscriptions/my-subscription',  // TODO:
          * Update placeholder value.
          *
          *     resource: {
          *       // TODO: Add desired properties to the request body.
          *     },
          *
          *     auth: authClient,
          *   };
          *
          *   pubsub.projects.subscriptions.testIamPermissions(request,
          * function(err, response) { if (err) { console.error(err); return;
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
          *     if (authClient.createScopedRequired &&
          * authClient.createScopedRequired()) { var scopes =
          * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
          * authClient.createScoped(scopes);
          *     }
          *     callback(authClient);
          *   });
          * }
          * @alias pubsub.projects.subscriptions.testIamPermissions
          * @memberOf! pubsub(v1)
          *
          * @param {object} params Parameters for request
          * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
          * @param {pubsub(v1).TestIamPermissionsRequest} params.resource Request body data
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
        const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
    topics:
        {
          /**
           * pubsub.projects.topics.create
           * @desc Creates the given topic with the given name.
           * @example
           * // BEFORE RUNNING:
           * // ---------------
           * // 1. If not already done, enable the Google Cloud Pub/Sub API
           * //    and check the quota for your project at
           * //    https://console.developers.google.com/apis/api/pubsub
           * // 2. This sample uses Application Default Credentials for
           * authentication.
           * //    If not already done, install the gcloud CLI from
           * //    https://cloud.google.com/sdk and run
           * //    `gcloud beta auth application-default login`.
           * //    For more information, see
           * //
           * https://developers.google.com/identity/protocols/application-default-credentials
           * // 3. Install the Node.js client library by running
           * //    `npm install googleapis --save`
           *
           * var google = require('googleapis');
           * var pubsub = google.pubsub('v1');
           *
           * authorize(function(authClient) {
           *   var request = {
           *     // The name of the topic. It must have the format
           *     // `"projects/{project}/topics/{topic}"`. `{topic}` must start
           * with a letter,
           *     // and contain only letters (`[A-Za-z]`), numbers (`[0-9]`),
           * dashes (`-`),
           *     // underscores (`_`), periods (`.`), tildes (`~`), plus (`+`)
           * or percent
           *     // signs (`%`). It must be between 3 and 255 characters in
           * length, and it
           *     // must not start with `"goog"`.
           *     name: 'projects/my-project/topics/my-topic',  // TODO: Update
           * placeholder value.
           *
           *     resource: {
           *       // TODO: Add desired properties to the request body. All
           * existing properties
           *       // will be replaced.
           *     },
           *
           *     auth: authClient,
           *   };
           *
           *   pubsub.projects.topics.create(request, function(err, response) {
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
           *     if (authClient.createScopedRequired &&
           * authClient.createScopedRequired()) { var scopes =
           * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
           * authClient.createScoped(scopes);
           *     }
           *     callback(authClient);
           *   });
           * }
           * @alias pubsub.projects.topics.create
           * @memberOf! pubsub(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.name The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.
           * @param {pubsub(v1).Topic} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/{name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                  },
                  options),
              params,
              requiredParams: ['name'],
              pathParams: ['name'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * pubsub.projects.topics.delete
              * @desc Deletes the topic with the given name. Returns `NOT_FOUND`
              * if the topic does not exist. After a topic is deleted, a new
              * topic may be created with the same name; this is an entirely new
              * topic with none of the old configuration or subscriptions.
              * Existing subscriptions to this topic are not deleted, but their
              * `topic` field is set to `_deleted-topic_`.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // Name of the topic to delete.
              *     // Format is `projects/{project}/topics/{topic}`.
              *     topic: 'projects/my-project/topics/my-topic',  // TODO:
              * Update placeholder value.
              *
              *     auth: authClient,
              *   };
              *
              *   pubsub.projects.topics.delete(request, function(err) {
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
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.delete
              * @memberOf! pubsub(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.topic Name of the topic to delete. Format is `projects/{project}/topics/{topic}`.
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl + '/v1/{topic}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                  },
                  options),
              params,
              requiredParams: ['topic'],
              pathParams: ['topic'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * pubsub.projects.topics.get
              * @desc Gets the configuration of a topic.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // The name of the topic to get.
              *     // Format is `projects/{project}/topics/{topic}`.
              *     topic: 'projects/my-project/topics/my-topic',  // TODO:
              * Update placeholder value.
              *
              *     auth: authClient,
              *   };
              *
              *   pubsub.projects.topics.get(request, function(err, response) {
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
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.get
              * @memberOf! pubsub(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.topic The name of the topic to get. Format is `projects/{project}/topics/{topic}`.
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url:
                        (rootUrl + '/v1/{topic}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['topic'],
              pathParams: ['topic'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * pubsub.projects.topics.getIamPolicy
              * @desc Gets the access control policy for a resource. Returns an
              * empty policy if the resource exists and does not have a policy
              * set.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // REQUIRED: The resource for which the policy is being
              * requested.
              *     // See the operation documentation for the appropriate value
              * for this field. resource_:
              * 'projects/my-project/topics/my-topic',  // TODO: Update
              * placeholder value.
              *
              *     auth: authClient,
              *   };
              *
              *   pubsub.projects.topics.getIamPolicy(request, function(err,
              * response) { if (err) { console.error(err); return;
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
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.getIamPolicy
              * @memberOf! pubsub(v1)
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
              * pubsub.projects.topics.list
              * @desc Lists matching topics.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // The name of the cloud project that topics belong to.
              *     // Format is `projects/{project}`.
              *     project: 'projects/my-project',  // TODO: Update placeholder
              * value.
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
              *     var topicsPage = response['topics'];
              *     if (!topicsPage) {
              *       return;
              *     }
              *     for (var i = 0; i < topicsPage.length; i++) {
              *       // TODO: Change code below to process each resource in
              * `topicsPage`: console.log(JSON.stringify(topicsPage[i], null,
              * 2));
              *     }
              *
              *     if (response.nextPageToken) {
              *       request.pageToken = response.nextPageToken;
              *       pubsub.projects.topics.list(request, handlePage);
              *     }
              *   };
              *
              *   pubsub.projects.topics.list(request, handlePage);
              * });
              *
              * function authorize(callback) {
              *   google.auth.getApplicationDefault(function(err, authClient) {
              *     if (err) {
              *       console.error('authentication failed: ', err);
              *       return;
              *     }
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.list
              * @memberOf! pubsub(v1)
              *
              * @param {object} params Parameters for request
              * @param {integer=} params.pageSize Maximum number of topics to return.
              * @param {string=} params.pageToken The value returned by the last `ListTopicsResponse`; indicates that this is a continuation of a prior `ListTopics` call, and that the system should return the next page of data.
              * @param {string} params.project The name of the cloud project that topics belong to. Format is `projects/{project}`.
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/{project}/topics')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                  },
                  options),
              params,
              requiredParams: ['project'],
              pathParams: ['project'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * pubsub.projects.topics.publish
              * @desc Adds one or more messages to the topic. Returns
              * `NOT_FOUND` if the topic does not exist. The message payload
              * must not be empty; it must contain  either a non-empty data
              * field, or at least one attribute.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // The messages in the request will be published on this
              * topic.
              *     // Format is `projects/{project}/topics/{topic}`.
              *     topic: 'projects/my-project/topics/my-topic',  // TODO:
              * Update placeholder value.
              *
              *     resource: {
              *       // TODO: Add desired properties to the request body.
              *     },
              *
              *     auth: authClient,
              *   };
              *
              *   pubsub.projects.topics.publish(request, function(err,
              * response) { if (err) { console.error(err); return;
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
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.publish
              * @memberOf! pubsub(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.topic The messages in the request will be published on this topic. Format is `projects/{project}/topics/{topic}`.
              * @param {pubsub(v1).PublishRequest} params.resource Request body data
              * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
              * @param {callback} callback The callback that handles the response.
              * @return {object} Request object
              */
          publish(params, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            options = options || {};
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
            const parameters = {
              options: Object.assign(
                  {
                    url: (rootUrl + '/v1/{topic}:publish')
                             .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                  },
                  options),
              params,
              requiredParams: ['topic'],
              pathParams: ['topic'],
              context: self
            };
            return createAPIRequest(parameters, callback);
          }, /**
              * pubsub.projects.topics.setIamPolicy
              * @desc Sets the access control policy on the specified resource.
              * Replaces any existing policy.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // REQUIRED: The resource for which the policy is being
              * specified.
              *     // See the operation documentation for the appropriate value
              * for this field. resource_:
              * 'projects/my-project/topics/my-topic',  // TODO: Update
              * placeholder value.
              *
              *     resource: {
              *       // TODO: Add desired properties to the request body.
              *     },
              *
              *     auth: authClient,
              *   };
              *
              *   pubsub.projects.topics.setIamPolicy(request, function(err,
              * response) { if (err) { console.error(err); return;
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
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.setIamPolicy
              * @memberOf! pubsub(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
              * @param {pubsub(v1).SetIamPolicyRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
              * pubsub.projects.topics.testIamPermissions
              * @desc Returns permissions that a caller has on the specified
              * resource. If the resource does not exist, this will return an
              * empty set of permissions, not a NOT_FOUND error.  Note: This
              * operation is designed to be used for building permission-aware
              * UIs and command-line tools, not for authorization checking. This
              * operation may "fail open" without warning.
              * @example
              * // BEFORE RUNNING:
              * // ---------------
              * // 1. If not already done, enable the Google Cloud Pub/Sub API
              * //    and check the quota for your project at
              * //    https://console.developers.google.com/apis/api/pubsub
              * // 2. This sample uses Application Default Credentials for
              * authentication.
              * //    If not already done, install the gcloud CLI from
              * //    https://cloud.google.com/sdk and run
              * //    `gcloud beta auth application-default login`.
              * //    For more information, see
              * //
              * https://developers.google.com/identity/protocols/application-default-credentials
              * // 3. Install the Node.js client library by running
              * //    `npm install googleapis --save`
              *
              * var google = require('googleapis');
              * var pubsub = google.pubsub('v1');
              *
              * authorize(function(authClient) {
              *   var request = {
              *     // REQUIRED: The resource for which the policy detail is
              * being requested.
              *     // See the operation documentation for the appropriate value
              * for this field. resource_:
              * 'projects/my-project/topics/my-topic',  // TODO: Update
              * placeholder value.
              *
              *     resource: {
              *       // TODO: Add desired properties to the request body.
              *     },
              *
              *     auth: authClient,
              *   };
              *
              *   pubsub.projects.topics.testIamPermissions(request,
              * function(err, response) { if (err) { console.error(err); return;
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
              *     if (authClient.createScopedRequired &&
              * authClient.createScopedRequired()) { var scopes =
              * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
              * authClient.createScoped(scopes);
              *     }
              *     callback(authClient);
              *   });
              * }
              * @alias pubsub.projects.topics.testIamPermissions
              * @memberOf! pubsub(v1)
              *
              * @param {object} params Parameters for request
              * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
              * @param {pubsub(v1).TestIamPermissionsRequest} params.resource Request body data
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
            const rootUrl = options.rootUrl || 'https://pubsub.googleapis.com/';
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
          snapshots: {
            /**
             * pubsub.projects.topics.snapshots.list
             * @desc Lists the names of the snapshots on this topic.
             * @alias pubsub.projects.topics.snapshots.list
             * @memberOf! pubsub(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Maximum number of snapshot names to return.
             * @param {string=} params.pageToken The value returned by the last `ListTopicSnapshotsResponse`; indicates that this is a continuation of a prior `ListTopicSnapshots` call, and that the system should return the next page of data.
             * @param {string} params.topic The name of the topic that snapshots are attached to. Format is `projects/{project}/topics/{topic}`.
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
              const rootUrl =
                  options.rootUrl || 'https://pubsub.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url: (rootUrl + '/v1/{topic}/snapshots')
                               .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['topic'],
                pathParams: ['topic'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }

          },
          subscriptions: {
            /**
             * pubsub.projects.topics.subscriptions.list
             * @desc Lists the names of the subscriptions on this topic.
             * @example
             * // BEFORE RUNNING:
             * // ---------------
             * // 1. If not already done, enable the Google Cloud Pub/Sub API
             * //    and check the quota for your project at
             * //    https://console.developers.google.com/apis/api/pubsub
             * // 2. This sample uses Application Default Credentials for
             * authentication.
             * //    If not already done, install the gcloud CLI from
             * //    https://cloud.google.com/sdk and run
             * //    `gcloud beta auth application-default login`.
             * //    For more information, see
             * //
             * https://developers.google.com/identity/protocols/application-default-credentials
             * // 3. Install the Node.js client library by running
             * //    `npm install googleapis --save`
             *
             * var google = require('googleapis');
             * var pubsub = google.pubsub('v1');
             *
             * authorize(function(authClient) {
             *   var request = {
             *     // The name of the topic that subscriptions are attached to.
             *     // Format is `projects/{project}/topics/{topic}`.
             *     topic: 'projects/my-project/topics/my-topic',  // TODO:
             * Update placeholder value.
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
             *     var subscriptionsPage = response['subscriptions'];
             *     if (!subscriptionsPage) {
             *       return;
             *     }
             *     for (var i = 0; i < subscriptionsPage.length; i++) {
             *       // TODO: Change code below to process each resource in
             * `subscriptionsPage`:
             *       console.log(JSON.stringify(subscriptionsPage[i], null, 2));
             *     }
             *
             *     if (response.nextPageToken) {
             *       request.pageToken = response.nextPageToken;
             *       pubsub.projects.topics.subscriptions.list(request,
             * handlePage);
             *     }
             *   };
             *
             *   pubsub.projects.topics.subscriptions.list(request, handlePage);
             * });
             *
             * function authorize(callback) {
             *   google.auth.getApplicationDefault(function(err, authClient) {
             *     if (err) {
             *       console.error('authentication failed: ', err);
             *       return;
             *     }
             *     if (authClient.createScopedRequired &&
             * authClient.createScopedRequired()) { var scopes =
             * ['https://www.googleapis.com/auth/cloud-platform']; authClient =
             * authClient.createScoped(scopes);
             *     }
             *     callback(authClient);
             *   });
             * }
             * @alias pubsub.projects.topics.subscriptions.list
             * @memberOf! pubsub(v1)
             *
             * @param {object} params Parameters for request
             * @param {integer=} params.pageSize Maximum number of subscription names to return.
             * @param {string=} params.pageToken The value returned by the last `ListTopicSubscriptionsResponse`; indicates that this is a continuation of a prior `ListTopicSubscriptions` call, and that the system should return the next page of data.
             * @param {string} params.topic The name of the topic that subscriptions are attached to. Format is `projects/{project}/topics/{topic}`.
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
              const rootUrl =
                  options.rootUrl || 'https://pubsub.googleapis.com/';
              const parameters = {
                options: Object.assign(
                    {
                      url: (rootUrl + '/v1/{topic}/subscriptions')
                               .replace(/([^:]\/)\/+/g, '$1'),
                      method: 'GET'
                    },
                    options),
                params,
                requiredParams: ['topic'],
                pathParams: ['topic'],
                context: self
              };
              return createAPIRequest(parameters, callback);
            }

          }
        }
  };
}
/**
 * @typedef AcknowledgeRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string[]} ackIds The acknowledgment ID for the messages being acknowledged that was returned by the Pub/Sub system in the `Pull` response. Must not be empty.
 */
/**
 * @typedef Binding
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string[]} members Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:  * `allUsers`: A special identifier that represents anyone who is    on the internet; with or without a Google account.  * `allAuthenticatedUsers`: A special identifier that represents anyone    who is authenticated with a Google account or a service account.  * `user:{emailid}`: An email address that represents a specific Google    account. For example, `alice@gmail.com` or `joe@example.com`.   * `serviceAccount:{emailid}`: An email address that represents a service    account. For example, `my-other-app@appspot.gserviceaccount.com`.  * `group:{emailid}`: An email address that represents a Google group.    For example, `admins@example.com`.   * `domain:{domain}`: A Google Apps domain name that represents all the    users of that domain. For example, `google.com` or `example.com`.
 * @property {string} role Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. Required
 */
/**
 * @typedef CreateSnapshotRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} subscription The subscription whose backlog the snapshot retains. Specifically, the created snapshot is guaranteed to retain:  (a) The existing backlog on the subscription. More precisely, this is      defined as the messages in the subscription&#39;s backlog that are      unacknowledged upon the successful completion of the      `CreateSnapshot` request; as well as:  (b) Any messages published to the subscription&#39;s topic following the      successful completion of the CreateSnapshot request. Format is `projects/{project}/subscriptions/{sub}`.
 */
/**
 * @typedef Empty
 * @memberOf! pubsub(v1)
 * @type object
 */
/**
 * @typedef ListSnapshotsResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} nextPageToken If not empty, indicates that there may be more snapshot that match the request; this value should be passed in a new `ListSnapshotsRequest`.
 * @property {pubsub(v1).Snapshot[]} snapshots The resulting snapshots.
 */
/**
 * @typedef ListSubscriptionsResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} nextPageToken If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListSubscriptionsRequest` to get more subscriptions.
 * @property {pubsub(v1).Subscription[]} subscriptions The subscriptions that match the request.
 */
/**
 * @typedef ListTopicSnapshotsResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} nextPageToken If not empty, indicates that there may be more snapshots that match the request; this value should be passed in a new `ListTopicSnapshotsRequest` to get more snapshots.
 * @property {string[]} snapshots The names of the snapshots that match the request.
 */
/**
 * @typedef ListTopicsResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} nextPageToken If not empty, indicates that there may be more topics that match the request; this value should be passed in a new `ListTopicsRequest`.
 * @property {pubsub(v1).Topic[]} topics The resulting topics.
 */
/**
 * @typedef ListTopicSubscriptionsResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} nextPageToken If not empty, indicates that there may be more subscriptions that match the request; this value should be passed in a new `ListTopicSubscriptionsRequest` to get more subscriptions.
 * @property {string[]} subscriptions The names of the subscriptions that match the request.
 */
/**
 * @typedef ModifyAckDeadlineRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {integer} ackDeadlineSeconds The new ack deadline with respect to the time this request was sent to the Pub/Sub system. For example, if the value is 10, the new ack deadline will expire 10 seconds after the `ModifyAckDeadline` call was made. Specifying zero may immediately make the message available for another pull request. The minimum deadline you can specify is 0 seconds. The maximum deadline you can specify is 600 seconds (10 minutes).
 * @property {string[]} ackIds List of acknowledgment IDs.
 */
/**
 * @typedef ModifyPushConfigRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).PushConfig} pushConfig The push configuration for future deliveries.  An empty `pushConfig` indicates that the Pub/Sub system should stop pushing messages from the given subscription and allow messages to be pulled and acknowledged - effectively pausing the subscription if `Pull` or `StreamingPull` is not called.
 */
/**
 * @typedef Policy
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).Binding[]} bindings Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
 * @property {string} etag `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy.  If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
 * @property {integer} version Version of the `Policy`. The default version is 0.
 */
/**
 * @typedef PublishRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).PubsubMessage[]} messages The messages to publish.
 */
/**
 * @typedef PublishResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string[]} messageIds The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
 */
/**
 * @typedef PubsubMessage
 * @memberOf! pubsub(v1)
 * @type object
 * @property {object} attributes Optional attributes for this message.
 * @property {string} data The message payload.
 * @property {string} messageId ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call.
 * @property {string} publishTime The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call.
 */
/**
 * @typedef PullRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {integer} maxMessages The maximum number of messages returned for this request. The Pub/Sub system may return fewer than the number specified.
 * @property {boolean} returnImmediately If this field set to true, the system will respond immediately even if it there are no messages available to return in the `Pull` response. Otherwise, the system may wait (for a bounded amount of time) until at least one message is available, rather than returning no messages. The client may cancel the request if it does not wish to wait any longer for the response.
 */
/**
 * @typedef PullResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).ReceivedMessage[]} receivedMessages Received Pub/Sub messages. The Pub/Sub system will return zero messages if there are no more available in the backlog. The Pub/Sub system may return fewer than the `maxMessages` requested even if there are more messages available in the backlog.
 */
/**
 * @typedef PushConfig
 * @memberOf! pubsub(v1)
 * @type object
 * @property {object} attributes Endpoint configuration attributes.  Every endpoint has a set of API supported attributes that can be used to control different aspects of the message delivery.  The currently supported attribute is `x-goog-version`, which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata). The endpoint version is based on the version of the Pub/Sub API.  If not present during the `CreateSubscription` call, it will default to the version of the API used to make such call. If not present during a `ModifyPushConfig` call, its value will not be changed. `GetSubscription` calls will always return a valid version, even if the subscription was created without this attribute.  The possible values for this attribute are:  * `v1beta1`: uses the push format defined in the v1beta1 Pub/Sub API. * `v1` or `v1beta2`: uses the push format defined in the v1 Pub/Sub API.
 * @property {string} pushEndpoint A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use &quot;https://example.com/push&quot;.
 */
/**
 * @typedef ReceivedMessage
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} ackId This ID can be used to acknowledge the received message.
 * @property {pubsub(v1).PubsubMessage} message The message.
 */
/**
 * @typedef SeekRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} snapshot The snapshot to seek to. The snapshot&#39;s topic must be the same as that of the provided subscription. Format is `projects/{project}/snapshots/{snap}`.
 * @property {string} time The time to seek to. Messages retained in the subscription that were published before this time are marked as acknowledged, and messages retained in the subscription that were published after this time are marked as unacknowledged. Note that this operation affects only those messages retained in the subscription (configured by the combination of `message_retention_duration` and `retain_acked_messages`). For example, if `time` corresponds to a point before the message retention window (or to a point before the system&#39;s notion of the subscription creation time), only retained messages will be marked as unacknowledged, and already-expunged messages will not be restored.
 */
/**
 * @typedef SeekResponse
 * @memberOf! pubsub(v1)
 * @type object
 */
/**
 * @typedef SetIamPolicyRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).Policy} policy REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform services (such as Projects) might reject them.
 */
/**
 * @typedef Snapshot
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} expireTime The snapshot is guaranteed to exist up until this time. A newly-created snapshot expires no later than 7 days from the time of its creation. Its exact lifetime is determined at creation by the existing backlog in the source subscription. Specifically, the lifetime of the snapshot is `7 days - (age of oldest unacked message in the subscription)`. For example, consider a subscription whose oldest unacked message is 3 days old. If a snapshot is created from this subscription, the snapshot -- which will always capture this 3-day-old backlog as long as the snapshot exists -- will expire in 4 days. The service will refuse to create a snapshot that would expire in less than 1 hour after creation.
 * @property {string} name The name of the snapshot.
 * @property {string} topic The name of the topic from which this snapshot is retaining messages.
 */
/**
 * @typedef Subscription
 * @memberOf! pubsub(v1)
 * @type object
 * @property {integer} ackDeadlineSeconds This value is the maximum time after a subscriber receives a message before the subscriber should acknowledge the message. After message delivery but before the ack deadline expires and before the message is acknowledged, it is an outstanding message and will not be delivered again during that time (on a best-effort basis).  For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call `ModifyAckDeadline` with the corresponding `ack_id` if using non-streaming pull or send the `ack_id` in a `StreamingModifyAckDeadlineRequest` if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used.  For push delivery, this value is also used to set the request timeout for the call to the push endpoint.  If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.
 * @property {string} messageRetentionDuration How long to retain unacknowledged messages in the subscription&#39;s backlog, from the moment a message is published. If `retain_acked_messages` is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a `Seek` can be done. Defaults to 7 days. Cannot be more than 7 days or less than 10 minutes.
 * @property {string} name The name of the subscription. It must have the format `&quot;projects/{project}/subscriptions/{subscription}&quot;`. `{subscription}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `&quot;goog&quot;`.
 * @property {pubsub(v1).PushConfig} pushConfig If push delivery is used with this subscription, this field is used to configure it. An empty `pushConfig` signifies that the subscriber will pull and ack messages using API methods.
 * @property {boolean} retainAckedMessages Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription&#39;s backlog, even if they are acknowledged, until they fall out of the `message_retention_duration` window.
 * @property {string} topic The name of the topic from which this subscription is receiving messages. Format is `projects/{project}/topics/{topic}`. The value of this field will be `_deleted-topic_` if the topic has been deleted.
 */
/**
 * @typedef TestIamPermissionsRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string[]} permissions The set of permissions to check for the `resource`. Permissions with wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
/**
 * @typedef TestIamPermissionsResponse
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string[]} permissions A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
 */
/**
 * @typedef Topic
 * @memberOf! pubsub(v1)
 * @type object
 * @property {string} name The name of the topic. It must have the format `&quot;projects/{project}/topics/{topic}&quot;`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `&quot;goog&quot;`.
 */
/**
 * @typedef UpdateSnapshotRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).Snapshot} snapshot The updated snpashot object.
 * @property {string} updateMask Indicates which fields in the provided snapshot to update. Must be specified and non-empty.
 */
/**
 * @typedef UpdateSubscriptionRequest
 * @memberOf! pubsub(v1)
 * @type object
 * @property {pubsub(v1).Subscription} subscription The updated subscription object.
 * @property {string} updateMask Indicates which fields in the provided subscription to update. Must be specified and non-empty.
 */

export = Pubsub;
